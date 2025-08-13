

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {submitted && (
        <div className="bg-green-100 text-green-800 p-3 rounded-md text-center">
          ✅ Thanks — we received your message and will reply soon.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {["firstName", "lastName"].map((name, idx) => (
          <div key={idx} className="relative">
            <input
              type="text"
              name={name}
              value={form[name]}
              onChange={handleChange}
              required
              placeholder={name === "firstName" ? "First name" : "Last name"}
              className="peer w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-brand-600 focus:border-brand-600 placeholder-gray-400"
            />
            <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-brand-600">
              {name === "firstName" ? "First Name" : "Last Name"}
            </label>
          </div>
        ))}
      </div>

      {["email", "subject"].map((name, idx) => (
        <div key={idx} className="relative">
          <input
            type={name === "email" ? "email" : "text"}
            name={name}
            value={form[name]}
            onChange={handleChange}
            required
            placeholder={name === "email" ? "Email" : "Subject"}
            className="peer w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-brand-600 focus:border-brand-600 placeholder-gray-400"
          />
          <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-brand-600">
            {name === "email" ? "Email" : "Subject"}
          </label>
        </div>
      ))}

      <div className="relative">
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          required
          placeholder="Message"
          className="peer w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-brand-600 focus:border-brand-600 resize-none placeholder-gray-400"
        />
        <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-brand-600">
          Message
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-md transition"
      >
        Send Message
      </button>
    </motion.form>
  );
}