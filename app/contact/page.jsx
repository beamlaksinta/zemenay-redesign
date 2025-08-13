import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 space-y-6">
      
      {/* Notes / Intro */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          We’re Here to Bring Your Ideas to Life
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Whether you have a question, want to discuss a project, or just need some expert advice — our team is ready to help. 
          At Zemenay Tech Solutions, every conversation starts with listening and understanding your unique needs.
        </p>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-brand-600 mb-4 text-center">
        Get in Touch
      </h1>
      <p className="text-gray-700 mb-10 text-center italic">
        "Great things in business are never done by one person; they're done by a team of passionate minds."
      </p>

      {/* Form Container */}
      <div className="bg-white rounded-lg p-10 border-2 border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">
        <ContactForm />
      </div>
    </section>
  );
}