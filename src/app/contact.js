'use client'

import { useState } from "react";

export function Contact() {
    const [status, setStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

      async function handleSubmit(event) {
          event.preventDefault();
          const formData = new FormData(event.target);
          setIsSubmitting(true);

          formData.append("access_key", "1b006ca2-3dee-466c-84e1-118c3c8c8386");

          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);

          const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
          });
          const result = await response.json();
          if (result.success) {
              console.log(result);
              setStatus("success");
              event.target.reset();
          } else{
            setStatus("error");
          }
          setIsSubmitting(false);
      }
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center px-4 py-10 min-h-screen"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 border-b-4 border-black dark:border-white text-center">
        Let's Get In Touch
      </h1>

      <form 
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col gap-6 border rounded-xl p-6 sm:p-10 dark:bg-gray-800"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label className="mb-1 text-sm sm:text-base font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name..."
            className="w-full border h-10 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300 rounded-lg px-3"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm sm:text-base font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email..."
            className="w-full border h-10 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300 rounded-lg px-3"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm sm:text-base font-medium">Message</label>
          <textarea
            required
            name="message"
            placeholder="Enter your message..."
            className="w-full border h-32 sm:h-40 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300 rounded-lg px-3 py-2 resize-none"
          />
        </div>
        {status === "success" && (
        <p className="text-green-500 font-medium pt-4">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
        <p className="text-red-500 font-medium pt-4">⚠️ Something went wrong. Please try again.</p>
        )}

        <button
        type="submit"
        disabled={isSubmitting}
        className={`self-end px-6 py-2 rounded-lg transition-colors ${
            isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-primary text-white hover:bg-primary/80 dark:bg-secondary dark:hover:bg-secondary/50 dark:text-accent"
        }`}
        >
        {isSubmitting ? "Sending..." : "Send"}
        </button>

      </form>
    </div>
  );
}
