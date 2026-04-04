'use client';

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API)
    alert("Form submitted!");
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
     <div className="flex flex-col md:flex-row gap-4 w-full">
      <div id="map" className="w-full md:w-1/2">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5594!2d73.0791936!3d33.6429056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1620000000000" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <div id="vid1" className="w-full md:w-1/2">
        <iframe 
          src="https://www.youtube.com/embed/XVEjtloKlpM" 
          width="100%" 
          height="315" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
     </div>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold mb-8 text-black dark:text-zinc-50">
          Contact Information
        </h1>

        <div className="w-full space-y-6">
          <div className="border-b border-gray-200 dark:border-zinc-800 pb-4">
            <h2 className="text-xl font-semibold mb-2 text-black dark:text-zinc-50">
              Email
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              <a
                href="mailto:example@email.com"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                example@email.com
              </a>
            </p>
          </div>

          <div className="border-b border-gray-200 dark:border-zinc-800 pb-4">
            <h2 className="text-xl font-semibold mb-2 text-black dark:text-zinc-50">
              Phone
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              +1 (555) 123-4567
            </p>
          </div>

          <div className="border-b border-gray-200 dark:border-zinc-800 pb-4">
            <h2 className="text-xl font-semibold mb-2 text-black dark:text-zinc-50">
              Location
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              San Francisco, CA, USA
            </p>
          </div>

          <div className="border-b border-gray-200 dark:border-zinc-800 pb-4">
            <h2 className="text-xl font-semibold mb-2 text-black dark:text-zinc-50">
              Business Hours
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Monday - Friday: 9:00 AM - 5:00 PM PST
            </p>
          </div>

          {/* Contact Form */}
          <div className="border-b border-gray-200 dark:border-zinc-800 pb-4">
            <h2 className="text-xl font-semibold mb-2 text-black dark:text-zinc-50">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black dark:text-zinc-50 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black dark:text-zinc-50 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-white text-black text-3xl border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black dark:text-zinc-50 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  required
                  className="w-full px-3 py-2 bg-white text-black text-3xl border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
