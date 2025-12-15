"use client"

import { useEffect, useState } from "react"

type VideoCompletionOptions = {
  videoId?: string
  onVideoEnd?: () => void
}

export function useVideoCompletion({ videoId = "panda-134d1f61-e2fd-4ec7-95db-7c86009187db", onVideoEnd }: VideoCompletionOptions = {}) {
  const [hasWatchedVideo, setHasWatchedVideo] = useState(false)
  const [isVideoEnded, setIsVideoEnded] = useState(false)

  useEffect(() => {
    // Check localStorage for previous video completion
    const savedWatchState = localStorage.getItem('dreame-video-completed')
    if (savedWatchState === 'true') {
      setHasWatchedVideo(true)
      setIsVideoEnded(true)
      return
    }

    // Listen for PandaVideo events
    const handlePandaEvent = (event: MessageEvent) => {
      if (event.origin !== 'https://player-vz-e2ae5091-252.tv.pandavideo.com.br') return
      
      try {
        const data = JSON.parse(event.data)
        
        // Check if it's our video and if it ended
        if (data.id === videoId && data.event === 'video:ended') {
          setIsVideoEnded(true)
          setHasWatchedVideo(true)
          localStorage.setItem('dreame-video-completed', 'true')
          onVideoEnd?.()
        }
        
        // Also trigger on high progress (90%+) in case user skips to end
        if (data.id === videoId && data.event === 'video:progress' && data.progress >= 90) {
          setIsVideoEnded(true)
          setHasWatchedVideo(true)
          localStorage.setItem('dreame-video-completed', 'true')
          onVideoEnd?.()
        }
      } catch (error) {
        // Ignore parse errors
      }
    }

    // Fallback: if no events detected, assume video can be ended after 5 minutes
    const fallbackTimer = setTimeout(() => {
      setHasWatchedVideo(true)
    }, 300000) // 5 minutes

    window.addEventListener('message', handlePandaEvent)
    
    return () => {
      window.removeEventListener('message', handlePandaEvent)
      clearTimeout(fallbackTimer)
    }
  }, [videoId, onVideoEnd])

  const markVideoAsCompleted = () => {
    setIsVideoEnded(true)
    setHasWatchedVideo(true)
    localStorage.setItem('dreame-video-completed', 'true')
    onVideoEnd?.()
  }

  return {
    hasWatchedVideo,
    isVideoEnded,
    markVideoAsCompleted,
  }
}