'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import './../app/Card.css';

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
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-16">Featured For You</h2>
      <div className="space-y-16">
        {products.map((product, index) => (
          <div key={index} className="md:hidden">
            <div
              className={`card h-[350px] w-[260px] mx-auto ${flipped === index ? 'flipped' : ''}`}
              onClick={() => setFlipped(flipped === index ? null : index)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width={260}
                    height={350}
                    className="rounded-lg shadow-lg mx-auto"
                  />
                </div>
                <div className="card-back bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-center">{product.description}</p>
                  <Link href="/search" className="text-green-400 hover:underline font-semibold">
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
            <p className="text-center mt-2 text-white text-lg font-bold">Click me</p>
          </div>
        ))}
        <div className="hidden md:block">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative flex items-center"
            >
              <div className={`w-5/12 ${product.align === 'right' ? 'order-2' : ''}`}>
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={260}
                  height={350}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
              <div
                className={`w-7/12 p-6 bg-gray-800 rounded-lg shadow-lg relative ${
                  product.align === 'left' ? '-ml-16' : '-mr-16 text-right'
                }`}
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">
                  {product.title}
                </h3>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <Link href="/search" className="text-green-400 hover:underline font-semibold">
                  Discover More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightedProducts;
