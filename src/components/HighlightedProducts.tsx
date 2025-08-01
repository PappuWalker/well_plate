import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    title: 'Foods that drain away your kidney stones',
    image: '/Kidney.png',
    align: 'left',
    alt: 'Kidney Stones',
    description: 'Discover a variety of foods that can help prevent and manage kidney stones. Our selection includes items rich in citrate and low in oxalate to support your kidney health.',
  },
  {
    title: 'Foods to manage Diabetes',
    image: '/daibatics.png',
    align: 'right',
    alt: 'Diabetes',
    description: 'Find a range of delicious and healthy foods to help you manage your blood sugar levels. Our diabetic-friendly options are low in carbs and high in fiber.',
  },
  {
    title: 'Foods for a Healthy Heart',
    image: '/heart.png',
    align: 'left',
    alt: 'Healthy Heart',
    description: 'Protect your heart with our selection of heart-healthy foods. These options are rich in omega-3 fatty acids, antioxidants, and fiber to support cardiovascular wellness.',
  },
];

const HighlightedProducts = () => {
  return (
    <section className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-16">Featured For You</h2>
      <div className="relative space-y-16">
        {products.map((product, index) => (
          <div
            key={index}
            className={`relative z-10 flex items-center ${
              product.align === 'left' ? 'justify-start' : 'justify-end'
            }`}
          >
            {product.align === 'left' && (
              <div className="w-5/12">
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={260}
                  height={350}
                  className="rounded-lg shadow-lg"
                />
              </div>
            )}
            <div
              className={`w-7/12 p-8 bg-gray-800 rounded-lg shadow-lg ${
                product.align === 'left' ? '-ml-32' : '-mr-32 text-right'
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {product.title}
              </h3>
              <p className="text-gray-300 mb-4">{product.description}</p>
              <Link href="/search" className="text-green-400 hover:underline font-semibold">
                Discover More
              </Link>
            </div>
            {product.align === 'right' && (
              <div className="w-5/12 text-right">
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={260}
                  height={350}
                  className="rounded-lg shadow-lg inline-block"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightedProducts;
