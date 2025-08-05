"use client";
import dynamic from 'next/dynamic';

const Testimonials = dynamic(() => import('@/components/testimonials').then(mod => mod.Testimonials), { ssr: false });

export default function TestimonialsWrapper() {
  return <Testimonials />;
}
