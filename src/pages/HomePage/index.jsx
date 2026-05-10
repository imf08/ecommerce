import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="pt-[120px] pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-[3%]">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">Welcome to Our Store</h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Quality Products, Exceptional Service, Since Day One
            </p>
            <Link
              to="/store"
              className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Explore Store
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-[3%]">
          <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Story</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are a dedicated team passionate about delivering quality products and exceptional customer service.
                With years of experience in the industry, we've built a reputation for excellence and reliability.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our commitment to quality and customer satisfaction drives everything we do. From product selection
                to delivery, we ensure every step of your journey is exceptional.
              </p>
            </div>
            <div className="bg-blue-100 rounded-lg p-8 h-64 flex items-center justify-center">
              <p className="text-center text-blue-900 text-lg font-semibold">
                Your Trusted Partner in Quality Shopping
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-[3%]">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-blue-600 text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide high-quality products and outstanding customer service that exceeds expectations. We strive
                to build long-lasting relationships with our customers through trust, transparency, and continuous
                improvement.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-blue-600 text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become a leading brand recognized for our commitment to quality, innovation, and customer
                satisfaction. We envision a future where shopping with us is the preferred choice for discerning
                customers worldwide.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-blue-600 text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Quality:</strong> We never compromise on product quality. <br />
                <strong>Integrity:</strong> Honest dealings in all transactions. <br />
                <strong>Excellence:</strong> Continuous improvement in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-[3%]">
          <h2 className="text-4xl font-bold mb-12 text-center">How We Operate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h4 className="text-xl font-bold mb-2">Quality Selection</h4>
              <p className="text-gray-700">
                We carefully curate our product selection to ensure only the best items reach our customers.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h4 className="text-xl font-bold mb-2">Competitive Pricing</h4>
              <p className="text-gray-700">
                We offer competitive prices without compromising on the quality of our products.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h4 className="text-xl font-bold mb-2">Fast Delivery</h4>
              <p className="text-gray-700">
                We ensure quick and reliable delivery to get your products to you as soon as possible.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h4 className="text-xl font-bold mb-2">Customer Support</h4>
              <p className="text-gray-700">
                Our dedicated support team is always ready to assist you with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16">
        <div className="container mx-auto px-[3%]">
          <h2 className="text-4xl font-bold mb-12 text-center">Visit Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Our Location</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">📍 Address</h4>
                  <p className="text-gray-700">
                    123 Business Street<br />
                    Commerce City, BC 12345<br />
                    Canada
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">📞 Phone</h4>
                  <p className="text-gray-700">(555) 123-4567</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">📧 Email</h4>
                  <p className="text-gray-700">info@ourstore.com</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">🕒 Business Hours</h4>
                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-600 text-center">
                Map Integration Coming Soon<br/>
                (Embed your map here)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-[3%] text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Shop?</h2>
          <p className="text-xl mb-8 opacity-90">
            Browse our extensive collection of quality products today!
          </p>
          <Link
            to="/store"
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
