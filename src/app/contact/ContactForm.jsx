"use client";

import { useState } from "react";

export default function ContactForm({ SERVICES }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [website, setWebsite] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    //  SPAM CHECK
    if (website) {
      return setError("Submission failed. Try again.");
    }

    //  VALIDATION
    if (!formData.fullName.trim()) return setError("Name is required");
    if (!formData.email.trim()) return setError("Email is required");

    if (!/^\d{10,}$/.test(formData.phone)) {
      return setError("Enter valid phone number");
    }

    if (!formData.service) return setError("Select a service");
    if (!formData.message.trim()) return setError("Message is required");

    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        setError("Server issue. Please try again later.");
        return;
      }

      const result = await res.json();

      if (!result.success) {
        setError(result.error || "Failed to send message");
        setLoading(false);
        return;
      }

      // ✅ SUCCESS (slight delay)
      setTimeout(() => {
        setSubmitted(true);
      }, 500);
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
        <div className="px-8 pt-8 pb-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
          <h2 className="text-2xl font-black text-slate-900 mb-1">
            Send Us a Message
          </h2>
          <p className="text-slate-500 text-sm">
            Our team typically responds within 2–4 business hours.
          </p>
        </div>

        {submitted ? (
          <div className="px-8 py-16 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
              <svg
                className="w-8 h-8 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">
              Message Sent Successfully 🎉
            </h3>
            <p className="text-slate-500 text-sm max-w-xs">
              Thank you for reaching out. One of our engineers will contact you
              shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setError("");
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  company: "",
                  service: "",
                  message: "",
                });
              }}
              className="mt-6 text-cyan-600 text-sm font-semibold hover:text-cyan-700 underline underline-offset-4"
            >
              Submit another enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-8 py-8 space-y-5">
            {/* 🛡️ Honeypot (spam protection) */}
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="hidden"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="fullName"
                  className="text-xs font-bold text-slate-600 tracking-widest uppercase"
                >
                  Full Name <span className="text-cyan-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your Name"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent hover:border-slate-300 transition-all duration-200 shadow-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-bold text-slate-600 tracking-widest uppercase"
                >
                  Email Address <span className="text-cyan-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent hover:border-slate-300 transition-all duration-200 shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="phone"
                  className="text-xs font-bold text-slate-600 tracking-widest uppercase"
                >
                  Phone Number <span className="text-cyan-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  maxLength={10}
                  inputMode="numeric"
                  placeholder="Enter Your Working Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent hover:border-slate-300 transition-all duration-200 shadow-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="company"
                  className="text-xs font-bold text-slate-600 tracking-widest uppercase"
                >
                  Company{" "}
                  <span className="text-slate-400 font-normal normal-case text-xs">
                    (optional)
                  </span>
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Your Organisation"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent hover:border-slate-300 transition-all duration-200 shadow-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="service"
                className="text-xs font-bold text-slate-600 tracking-widest uppercase"
              >
                Service Required <span className="text-cyan-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent hover:border-slate-300 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <option value="" disabled>
                    Select a service...
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg
                    className="w-4 h-4 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-xs font-bold text-slate-600 tracking-widest uppercase"
              >
                Project Details <span className="text-cyan-500">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                required
                placeholder="Describe your project requirements, capacity, timeline, or any specific challenges..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent hover:border-slate-300 transition-all duration-200 shadow-sm resize-none"
              />
            </div>

            <div className="flex items-center gap-2 text-slate-500 text-xs bg-slate-50 rounded-xl px-4 py-3">
              <svg
                className="w-4 h-4 flex-shrink-0 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>
                Your information is confidential and will never be shared with
                third parties.
              </span>
            </div>
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full relative overflow-hidden bg-[#00A3E0] hover:bg-[#0091c7] active:scale-[0.99] text-white font-bold py-4 px-8 rounded-xl text-sm tracking-widest uppercase transition-all duration-200 shadow-lg shadow-cyan-200 hover:shadow-cyan-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span
                className={`flex items-center justify-center gap-2 transition-all duration-200 ${loading ? "opacity-0" : "opacity-100"}`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Submit Enquiry
              </span>
              {loading && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                </span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Input({ id, label, value, onChange, required, type = "text" }) {
  return (
    <div>
      <label className="text-sm font-medium">
        {label} {required && "*"}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border rounded-lg px-3 py-2 mt-1"
      />
    </div>
  );
}
