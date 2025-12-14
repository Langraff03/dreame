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

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-20 md:pb-28">
      <UrgencyTopBar />
      <HeroSection />
      <SocialProofBar />
      <VideoProofSection />
      <ProductGallerySection />
      <ComparisonSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <OfferSection />
      <FaqSection />
      <FinalCtaSection />
      <StickyCtaBar />
    </main>
  )
}
