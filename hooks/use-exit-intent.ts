"use client"

import { useEffect, useRef, useState } from "react"

type ExitIntentOptions = {
  threshold?: number
  delay?: number
  onExitIntent?: () => void
  enabled?: boolean
}

export function useExitIntent({
  threshold = 50,
  delay = 1000,
  onExitIntent,
  enabled = true,
}: ExitIntentOptions = {}) {
  const [hasTriggered, setHasTriggered] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef(Date.now())

  useEffect(() => {
    if (!enabled || hasTriggered) return

    startTimeRef.current = Date.now()

    const handleMouseLeave = (event: MouseEvent) => {
      // Only trigger if cursor moves to top of screen (typical exit behavior)
      if (event.clientY <= threshold) {
        // Ensure user has been on page for minimum time
        const timeOnPage = Date.now() - startTimeRef.current
        if (timeOnPage >= delay && !hasTriggered) {
          setHasTriggered(true)
          onExitIntent?.()
        }
      }
    }

    const handleBeforeUnload = () => {
      const timeOnPage = Date.now() - startTimeRef.current
      if (timeOnPage >= delay && !hasTriggered) {
        setHasTriggered(true)
        onExitIntent?.()
      }
    }

    // Mobile: detect when user tries to navigate away
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        const timeOnPage = Date.now() - startTimeRef.current
        if (timeOnPage >= delay && !hasTriggered) {
          setHasTriggered(true)
          onExitIntent?.()
        }
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("beforeunload", handleBeforeUnload)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("beforeunload", handleBeforeUnload)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [threshold, delay, onExitIntent, enabled, hasTriggered])

  const reset = () => {
    setHasTriggered(false)
    startTimeRef.current = Date.now()
  }

  return {
    hasTriggered,
    reset,
  }
}