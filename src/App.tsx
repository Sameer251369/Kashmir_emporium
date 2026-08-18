import { TooltipProvider } from "@/components/ui/tooltip"
import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/sections/Hero"
import { Heritage } from "@/components/sections/Heritage"
import { Collections } from "@/components/sections/Collections"
import { Carpets } from "@/components/sections/Carpets"
import { Gallery } from "@/components/sections/Gallery"
import { Craft } from "@/components/sections/Craft"
import { Testimonials } from "@/components/sections/Testimonials"
import { Enquiry } from "@/components/sections/Enquiry"
import { Footer } from "@/components/sections/Footer"

export function App() {
  return (
    <TooltipProvider>
      <div className="min-h-svh overflow-x-hidden">
        <Header />
        <Hero />
        <Heritage />
        <Collections />
        <Carpets />
        <Gallery />
        <Craft />
        <Testimonials />
        <Enquiry />
        <Footer />
      </div>
    </TooltipProvider>
  )
}

export default App
