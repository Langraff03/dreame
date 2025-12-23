"use client"

import { HeroSection } from "@/components/hero-section"
import { SocialProofBar } from "@/components/social-proof-bar"
import { VideoProofSection } from "@/components/video-proof-section"
import { ProductGallerySection } from "@/components/product-gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { OfferSection } from "@/components/offer-section"
import { ComparisonSection } from "@/components/comparison-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { StickyCtaBar } from "@/components/sticky-cta-bar"
import { UrgencyTopBar } from "@/components/urgency-top-bar"
import { BrandSection } from "@/components/brand-section"
import { LivePurchasePopup } from "@/components/live-purchase-popup"
import { ExitIntentModal } from "@/components/exit-intent-modal"
import { useExitIntent } from "@/hooks/use-exit-intent"
import { useState, useEffect } from "react"

export default function Home() {
  const [showExitIntent, setShowExitIntent] = useState(false)
  const [exitIntentShown, setExitIntentShown] = useState(false)
  const [timeOnSite, setTimeOnSite] = useState(0)

  // Track time on site
  useEffect(() => {
    // Check if popup was already shown
    const popupShown = localStorage.getItem('dreame-exit-popup-shown')
    if (popupShown === 'true') {
      setExitIntentShown(true)
      return
    }

    const startTime = Date.now()
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000)
      setTimeOnSite(elapsed)
      
      // Show popup after 120 seconds, only once
      if (elapsed >= 120 && !exitIntentShown) {
        setShowExitIntent(true)
        setExitIntentShown(true)
        localStorage.setItem('dreame-exit-popup-shown', 'true')
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [exitIntentShown])

  // Keep exit intent detection as backup for early leavers
  useExitIntent({
    threshold: 50,
    delay: 1000,
    enabled: timeOnSite >= 10 && !exitIntentShown, // Only after 10s and if popup not shown
    onExitIntent: () => {
      if (!exitIntentShown) {
        setShowExitIntent(true)
        setExitIntentShown(true)
        localStorage.setItem('dreame-exit-popup-shown', 'true')
      }
    },
  })

  const handleExitIntentAccept = () => {
    setShowExitIntent(false)
    // Scroll to offer section with special discount applied
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleExitIntentClose = () => {
    setShowExitIntent(false)
  }

  return (
    <main className="min-h-screen bg-background pb-20 md:pb-28">
      <UrgencyTopBar />
      <HeroSection />
      <SocialProofBar />
      <VideoProofSection />
      <ProductGallerySection />
      <ComparisonSection />
      <BrandSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <OfferSection />
      <FaqSection />
      <FinalCtaSection />
      <StickyCtaBar />
      
      {/* New conversion optimization components */}
      <LivePurchasePopup />
      <ExitIntentModal
        isOpen={showExitIntent}
        onClose={handleExitIntentClose}
        onAccept={handleExitIntentAccept}
      />
    </main>
  )
}
