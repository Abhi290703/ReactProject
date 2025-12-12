import React from 'react'

export default function Home() {
  return (
    <>

      {/* Page Content */}
      <div className="w-full">

        {/* Banner section */}

        <section className='w-full'>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/004/299/835/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" 
          alt="Banner" className='w-full h-40 md:h-60 object-cover shadow-lg'/>
        </section>

        {/* Hero Section */}
        <section className="bg-indigo-600 text-white py-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to <span className="text-yellow-300">MyStore</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Discover high-quality products, amazing deals, and insightful blogs.
          </p>
          <button className="mt-6 bg-yellow-400 text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
            Explore Products
          </button>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-2">✅ Quality Products</h3>
              <p className="text-gray-600">
                Only the best products with trusted quality.
              </p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-2">🚀 Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and reliable delivery at your doorstep.
              </p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-2">💬 24/7 Support</h3>
              <p className="text-gray-600">
                We are here to help you anytime.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700 text-lg">
              MyStore is built to provide users with a smooth shopping
              experience and informative content, all in one place.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-indigo-700 py-14 px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to start shopping?
          </h2>
          <p className="mb-6 text-gray-200">
            Browse our latest products and deals now.
          </p>
          <button className="bg-yellow-400 text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300">
            Get Started
          </button>
        </section>

      </div>
    </>
  );
}
