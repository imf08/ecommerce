import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-[120px] pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-[3%]">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl lg:text-2xl opacity-90">
              We'd love to hear from you. Get in touch with us today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-[3%]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Address */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl text-blue-600 mb-4">📍</div>
              <h3 className="text-2xl font-bold mb-4">Address</h3>
              <p className="text-gray-700">
                123 Business Street<br />
                Commerce City, BC 12345<br />
                Canada
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl text-blue-600 mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-4">Phone</h3>
              <p className="text-gray-700">
                <strong>Main:</strong> (555) 123-4567<br />
                <strong>Support:</strong> (555) 123-4568<br />
                <strong>Fax:</strong> (555) 123-4569
              </p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl text-blue-600 mb-4">📧</div>
              <h3 className="text-2xl font-bold mb-4">Email</h3>
              <p className="text-gray-700">
                <strong>General:</strong> info@ourstore.com<br />
                <strong>Support:</strong> support@ourstore.com<br />
                <strong>Sales:</strong> sales@ourstore.com
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Saturday:</strong> 10:00 AM - 4:00 PM
                </p>
                <p className="text-gray-700">
                  <strong>Sunday:</strong> Closed
                </p>
              </div>
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Online Support:</strong> Available 24/7
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Response Time:</strong> Within 24 hours
                </p>
                <p className="text-gray-700">
                  <strong>Holiday Hours:</strong> Check our website
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-[3%]">
          <h2 className="text-4xl font-bold mb-12 text-center">Send us a Message</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ✓ Thank you! Your message has been sent successfully. We'll get back to you soon!
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Subject */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="Please write your message here..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-[3%]">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-600">How quickly will I receive a response?</h3>
              <p className="text-gray-700">
                We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Do you offer technical support?</h3>
              <p className="text-gray-700">
                Yes, our technical support team is available to assist you with any product-related questions or issues.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Can I visit your office in person?</h3>
              <p className="text-gray-700">
                Absolutely! We welcome visitors during our business hours. Please call ahead to schedule an appointment.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-600">What is your return policy?</h3>
              <p className="text-gray-700">
                We offer a 30-day return policy for most items. Please contact our support team for more details about specific products.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
