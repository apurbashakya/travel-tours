import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedDestinations from '../components/FeaturedDestinations'
import Offer from '../components/Offer';
import Footer from '@/components/Footer';
import FeedbackSection  from '@/components/Recommendation'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <Offer/>
      <FeaturedDestinations />
      <FeedbackSection />
      <Footer/>
    </main>
  )
}

