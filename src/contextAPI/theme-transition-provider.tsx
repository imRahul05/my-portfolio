"use client"

import type React from "react"
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type Theme = "light" | "dark"
type Direction = "expand" | "contract"

type ThemeContextValue = {
  theme: Theme
  toggleFromElement: (el?: HTMLElement | null) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function useThemeTransition() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useThemeTransition must be used within ThemeTransitionProvider")
  return ctx
}

export function ThemeTransitionProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")

  // Transition overlay state
  const [overlayVisible, setOverlayVisible] = useState(false)
  const [overlayTheme, setOverlayTheme] = useState<Theme>("dark")
  const [clipRadius, setClipRadius] = useState(0)
  const [center, setCenter] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [direction, setDirection] = useState<Direction>("expand")

  const animRef = useRef<number | null>(null)
  const endTimeoutRef = useRef<number | null>(null)
  const midTimeoutRef = useRef<number | null>(null) // new: mid-switch timer

  const DURATION = 600
  const EXPAND_SWITCH_AT = 0.55 // when going to dark, flip while mostly covered
  const CONTRACT_SWITCH_AT = 0.05 // when going to light, flip almost immediately

  // Load persisted theme
  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("theme") as Theme | null) : null
    if (stored === "dark" || stored === "light") {
      setTheme(stored)
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", stored === "dark")
      }
    } else {
      // Respect OS preference on first load
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(prefersDark ? "dark" : "light")
      document.documentElement.classList.toggle("dark", prefersDark)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Keep <html> class in sync whenever theme changes (outside of transition)
  useEffect(() => {
    if (!overlayVisible) {
      document.documentElement.classList.toggle("dark", theme === "dark")
      localStorage.setItem("theme", theme)
    }
  }, [theme, overlayVisible])

  const stopAnimation = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current)
    animRef.current = null
    if (endTimeoutRef.current) window.clearTimeout(endTimeoutRef.current)
    endTimeoutRef.current = null
    if (midTimeoutRef.current) window.clearTimeout(midTimeoutRef.current) // clear mid-switch
    midTimeoutRef.current = null
  }

  const computeMaxRadius = (x: number, y: number) => {
    const w = window.innerWidth
    const h = window.innerHeight
    // Distance to the farthest corner
    const distances = [
      Math.hypot(x - 0, y - 0),
      Math.hypot(x - w, y - 0),
      Math.hypot(x - 0, y - h),
      Math.hypot(x - w, y - h),
    ]
    return Math.max(...distances)
  }

  const toggleFromElement = useCallback(
    (el?: HTMLElement | null) => {
      const current = theme
      const target: Theme = current === "dark" ? "light" : "dark"

      // Find center point for the animation
      let x = window.innerWidth - 24 // fallback right edge
      let y = 24 // fallback near top
      if (el) {
        const rect = el.getBoundingClientRect()
        x = rect.left + rect.width / 2
        y = rect.top + rect.height / 2
      }

      const maxR = computeMaxRadius(x, y)
      setCenter({ x, y })
      setOverlayTheme(target)
      setOverlayVisible(true)

      const dir: Direction = target === "dark" ? "expand" : "contract"
      setDirection(dir)

      // Schedule the moment we actually flip html.dark while overlay is covering the UI
      const switchAt = dir === "expand" ? EXPAND_SWITCH_AT : CONTRACT_SWITCH_AT
      midTimeoutRef.current = window.setTimeout(
        () => {
          // Flip the class directly (the syncing effect stays paused while overlayVisible is true)
          document.documentElement.classList.toggle("dark", target === "dark")
        },
        Math.round(DURATION * switchAt),
      )

      stopAnimation()

      if (dir === "expand") {
        setClipRadius(0)
        requestAnimationFrame(() => {
          setClipRadius(maxR)
        })
        endTimeoutRef.current = window.setTimeout(() => {
          // Finalize state/persistence and remove overlay
          setTheme(target)
          localStorage.setItem("theme", target)
          setOverlayVisible(false)
        }, DURATION)
      } else {
        setClipRadius(maxR)
        requestAnimationFrame(() => {
          setClipRadius(0)
        })
        endTimeoutRef.current = window.setTimeout(() => {
          setTheme(target)
          localStorage.setItem("theme", target)
          setOverlayVisible(false)
        }, DURATION)
      }
    },
    [theme],
  )

  return (
    <ThemeContext.Provider value={{ theme, toggleFromElement }}>
      {children}

      {/* Transition overlay */}
      {overlayVisible && (
        <div
          aria-hidden="true"
          className={cn(
            "fixed inset-0 z-50 pointer-events-none",
            // Use a solid background to "wash" the page with target theme color
            overlayTheme === "dark" ? "bg-neutral-950" : "bg-white",
          )}
          style={{
            clipPath: `circle(${clipRadius}px at ${center.x}px ${center.y}px)`,
            transition: `clip-path ${DURATION}ms cubic-bezier(0.22, 1, 0.36, 1)`, // use constant
            willChange: "clip-path",
          }}
        />
      )}
    </ThemeContext.Provider>
  )
}
