import Image from 'next/image';
import Link from 'next/link';
import HighlightedProducts from '@/components/HighlightedProducts';
import Reviews from '@/components/Reviews';
import './order-now-btn.css';


export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[500px] md:h-[600px] w-full">
        <div className="sm:hidden">
          <Image
            src="/mobile_hero.png"
            alt="Healthy food"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
          />
        </div>
        <div className="hidden sm:block">
          <Image
            src="/desktop hero.png"
            alt="Healthy food"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
          />
        </div>
        <div className="absolute top-3/4 sm:top-1/2 left-1/8 sm:left-1/8 transform -translate-x-1/8 -translate-y-1/2 text-white p-4 sm:p-8 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4">
            25% off for your <span className="block"> first orders</span>
          </h1>
          <p className="text-md sm:text-lg md:text-2xl mb-4 sm:mb-6">
            Claim it right now!!
          </p>
          <Link href="/search" legacyBehavior>
  <button type="button" className="order-now-btn">
    <span>Order Now</span>
  </button>
</Link>
        </div>
      </section>

      {/* Highlighted Products Section */}
      <HighlightedProducts />

      {/* Reviews Section */}
      <Reviews />
    </main>
  );
}
