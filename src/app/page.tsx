import Image from "next/image";
import HeaderSection from "@/components/HeaderSection";
import BrandShowcase from "@/components/BrandCarousel";
import NewArrivals from "@/components/NewArrivals";
import TopSelling from "@/components/TopSelling";
import DressStyleBrowser from "@/components/DressStyleBrowser";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterComponent";

export default function Home() {
  return (
    <div>
      <HeaderSection />
      <BrandShowcase />
      <NewArrivals />
      <TopSelling />
      <DressStyleBrowser />
      <TestimonialsCarousel />
      <NewsletterSubscription />
      <Footer />
    </div>
  );
}
