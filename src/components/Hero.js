'use client'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative py-20 text-white bg-gradient-to-r from-primary to-secondary">
      <div className="container px-4 mx-auto text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Professional Air Duct Cleaning in Tampa
        </h1>
        <p className="mb-8 text-xl text-gray-100 md:text-2xl">
          Breathe Cleaner Air Today • NADCA Certified • Free Estimates
        </p>
        <Link href="/contact">
          <button className="px-8 py-4 text-lg font-semibold text-white transition-all rounded-lg shadow-md cursor-pointer bg-accent hover:bg-accent/90 hover:scale-105">
            Get Free Estimate
          </button>
        </Link>
        <p className="mt-4 text-sm text-gray-200">Serving Tampa, St. Petersburg, Clearwater, and surrounding areas</p>
      </div>
    </section>
  )
}