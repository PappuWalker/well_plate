import Image from 'next/image';
import Link from 'next/link';
import HighlightedProducts from '@/components/HighlightedProducts';
import Reviews from '@/components/Reviews';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full">
        <Image
          src="/desktop hero.png"
          alt="Healthy food"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute top-1/2 left-1/8 transform -translate-x-1/8 -translate-y-1/2 text-white p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            25% off for your <span className="block"> first orders</span>
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Claim it right now!!
          </p>
          <Link href="/search" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 font-bold">
            Order Now
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
