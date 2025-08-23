"use client";
import { useEffect, ReactNode } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  children,
}: {
  words?: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  children?: ReactNode;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words?.split(" ") || [];
  
  useEffect(() => {
    animate(
      "span.animate-me",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.1),
      }
    );
  }, [scope.current, animate, filter, duration]);

  const renderWords = () => {
    if (words) {
      return (
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => {
            return (
              <motion.span
                key={word + idx}
                className="dark:text-white text-black opacity-0 animate-me"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word}{" "}
              </motion.span>
            );
          })}
        </motion.div>
      );
    }
    
    // If no words prop but children are provided, apply animation to children
    return null;
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        {words ? (
          <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
            {renderWords()}
          </div>
        ) : (
          <motion.div ref={scope}>
            {children}
          </motion.div>
        )}
      </div>
    </div>
  );
};
