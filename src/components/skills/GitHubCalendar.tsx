"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import GitHubCalendar from "react-github-calendar"
import { Check, X, Palette, RotateCcw, Sparkles } from "lucide-react"
import { colorPalettes, type ColorPaletteType } from "./components/GithubcalendarColor"
import { PulsatingButton } from "@/components/magicui/pulsating-button"

interface CustomTheme {
  light: string[]
  dark: string[]
}

const GitHubContributions: React.FC = () => {
  const [colorPaletteOpen, setColorPaletteOpen] = useState(false)
  const [selectedPalette, setSelectedPalette] = useState<ColorPaletteType>("blue")
  const [customMode, setCustomMode] = useState(false)
  const [customTheme, setCustomTheme] = useState<CustomTheme>({
    light: ["#ebedf0", "#9ecbff", "#60a5fa", "#2563eb", "#1d4ed8"],
    dark: ["#ebedf0", "#9ecbff", "#60a5fa", "#2563eb", "#1d4ed8"],
  })

  const colorPickerRef = useRef<HTMLDivElement>(null)

  // Handle click outside to close the color palette
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target as Node)) {
        setColorPaletteOpen(false)
      }
    }

    if (colorPaletteOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [colorPaletteOpen])

  // Get current theme based on mode
  const getCurrentTheme = () => {
    if (customMode) {
      return customTheme
    }
    return colorPalettes[selectedPalette]
  }

  // Update custom color
  const updateCustomColor = (index: number, color: string) => {
    setCustomTheme((prev) => ({
      light: prev.light.map((c, i) => (i === index ? color : c)),
      dark: prev.dark.map((c, i) => (i === index ? color : c)),
    }))
  }

  // Reset to default theme
  const resetToDefault = () => {
    setCustomMode(false)
    setSelectedPalette("blue")
    setCustomTheme({
      light: ["#ebedf0", "#9ecbff", "#60a5fa", "#2563eb", "#1d4ed8"],
      dark: ["#ebedf0", "#9ecbff", "#60a5fa", "#2563eb", "#1d4ed8"],
    })
  }

  // Generate random theme
  const generateRandomTheme = () => {
    const hue = Math.floor(Math.random() * 360)
    const randomColors = [
      "#ebedf0", // Keep default gray
      `hsl(${hue}, 70%, 80%)`, // Light
      `hsl(${hue}, 70%, 65%)`, // Medium-light
      `hsl(${hue}, 70%, 50%)`, // Medium
      `hsl(${hue}, 70%, 35%)`, // Dark
    ]

    setCustomTheme({
      light: randomColors,
      dark: randomColors,
    })
    setCustomMode(true)
  }

  const colorTheme = getCurrentTheme()
  const contributionLevels = ["No contributions", "Low", "Medium", "High", "Very High"]

  return (
    <section id="github-contributions" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="relative mb-12 flex items-center justify-center">
          {/* Centered Title */}
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
              GitHub Contributions
            </h2>
          </div>

          {/* Color Palette Selector (aligned right) */}
          <div className="absolute right-0 flex items-center gap-2">
            <button
              onClick={() => setColorPaletteOpen(!colorPaletteOpen)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                colorPaletteOpen
                  ? "bg-blue-500 text-white shadow-lg scale-105"
                  : "bg-white hover:bg-gray-50 text-gray-700 shadow-md hover:shadow-lg border border-gray-200"
              }`}
            >
              <Palette size={18} className={colorPaletteOpen ? "animate-pulse" : ""} />
              <span className="hidden sm:inline">{colorPaletteOpen ? "Customize" : "Theme"}</span>
            </button>

            {/* Current palette indicator */}
            {!colorPaletteOpen && (
              <div className="flex gap-1 p-2 bg-white rounded-lg shadow-md border border-gray-200">
                {colorTheme.light.slice(1).map((color, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Color Palette Popup */}
          {colorPaletteOpen && (
            <>
              {/* Overlay */}
              <div className="fixed inset-0 bg-black/30 z-10 backdrop-blur-sm" />

              <div className="absolute z-20 top-16 right-0 left-0 flex justify-center">
                <div
                  ref={colorPickerRef}
                  className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-200 w-full max-w-2xl animate-in fade-in-0 zoom-in-95 duration-300"
                >
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Customize Your Theme</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Choose from presets or create your own custom color scheme
                      </p>
                    </div>
                    <button
                      title='Close color palette'
                      onClick={() => setColorPaletteOpen(false)}
                      className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Mode Toggle */}
                  <div className="flex gap-2 mb-6 p-1 bg-gray-100 rounded-xl">
                    <button
                      onClick={() => setCustomMode(false)}
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                        !customMode ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Presets
                    </button>
                    <button
                      onClick={() => setCustomMode(true)}
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                        customMode ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Custom
                    </button>
                  </div>

                  {!customMode ? (
                    /* Preset Themes */
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                      {Object.entries(colorPalettes).map(([name, palette]) => (
                        <button
                          key={name}
                          onClick={() => {
                            setSelectedPalette(name as ColorPaletteType)
                            setCustomMode(false)
                          }}
                          className={`flex flex-col items-center p-4 rounded-xl transition-all duration-200 ${
                            selectedPalette === name && !customMode
                              ? "bg-blue-50 ring-2 ring-blue-500 scale-105"
                              : "hover:bg-gray-50 hover:scale-102"
                          }`}
                        >
                          <div className="flex gap-1 mb-3">
                            {palette.light.slice(1).map((color, i) => (
                              <div
                                key={i}
                                className="w-6 h-6 rounded-lg shadow-sm border border-white"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-medium capitalize text-gray-700">{name}</span>
                          {selectedPalette === name && !customMode && (
                            <Check size={16} className="text-blue-500 mt-1" />
                          )}
                        </button>
                      ))}
                    </div>
                  ) : (
                    /* Custom Color Picker */
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-gray-800">Custom Colors</h4>
                        <div className="flex gap-2">
                          <button
                            onClick={generateRandomTheme}
                            className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all text-sm font-medium"
                          >
                            <Sparkles size={14} />
                            Random
                          </button>
                          <button
                            onClick={resetToDefault}
                            className="flex items-center gap-2 px-3 py-1.5 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm font-medium"
                          >
                            <RotateCcw size={14} />
                            Reset
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {customTheme.light.map((color, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                            <div className="relative">
                              <input
                                title='Select color'
                                type="color"
                                value={color}
                                onChange={(e) => updateCustomColor(index, e.target.value)}
                                className="w-12 h-12 rounded-lg border-2 border-white shadow-md cursor-pointer"
                                disabled={index === 0} // Keep default gray
                              />
                              {index === 0 && (
                                <div className="absolute inset-0 bg-gray-200/50 rounded-lg pointer-events-none" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-gray-800 text-sm">{contributionLevels[index]}</div>
                              <div className="text-xs text-gray-500 font-mono">{color.toUpperCase()}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Preview */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                    <div className="text-sm font-medium text-gray-700 mb-2">Preview</div>
                    <div className="flex gap-1">
                      {colorTheme.light.map((color, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-md border-2 border-white shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* GitHub Calendar Card */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="flex flex-col items-center">
            <div className="w-full overflow-x-auto">
              <div className="min-w-max">
                <GitHubCalendar
                  username="imRahul05"
                  blockSize={16}
                  blockMargin={4}
                  fontSize={16}
                  theme={colorTheme}
                  hideColorLegend={false}
                  hideMonthLabels={false}
                />
              </div>
            </div>

            {/* GitHub Profile Button */}
            <div className="mt-10 text-center">
              <a
                href="https://github.com/imRahul05"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GitHubContributions
