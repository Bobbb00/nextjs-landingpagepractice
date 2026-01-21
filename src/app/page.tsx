import Navbar from '@/component/navbar';
import Benefits from '@/section/benefits/Benefits';
import Feature from '@/section/feature/Feature';
import Footer from '@/section/footer/Footer';
import Hero from '@/section/hero/Hero';
import Price from '@/section/price/Price';
import Testimonial from '@/section/testimonial/Testimonial';
import Works from '@/section/works/Works';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Benefits />
      <Feature />
      <Works />
      <Testimonial />
      <Price />
      <Footer />
    </main>
  );
}
