"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [successDelay, setSuccessDelay] = useState(false);

  // 🛡️ Honeypot (spam protection)
  const [website, setWebsite] = useState("");

  const [data, setData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    businessType: "",
    experience: "",
    investment: "",
    message: "",
  });

  const set = (k, v) => {
    setData((p) => ({ ...p, [k]: v }));
    setErrors((prev) => ({ ...prev, [k]: "" }));
    setApiError("");
  };

  // ✅ STEP VALIDATION
  const validateStep = () => {
    const e = {};

    if (step === 1) {
      if (!data.name) e.name = "Required";
      if (!data.company) e.company = "Required";
      if (!data.phone) e.phone = "Required";
      if (!data.email) e.email = "Required";
      if (!data.location) e.location = "Required";
    }

    if (step === 2) {
      if (!data.businessType) e.businessType = "Required";
      if (!data.experience) e.experience = "Required";
    }

    if (step === 4) {
      if (!data.investment) e.investment = "Required";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // 🔐 FINAL VALIDATION
  const validateBeforeSubmit = () => {
    if (!data.name.trim()) return "Name is required";
    if (!data.company.trim()) return "Company is required";
    if (!data.phone.trim() || !/^\d{10,}$/.test(data.phone))
      return "Valid phone number required";

    if (!data.email.trim()) return "Email is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) return "Invalid email";

    if (!data.location.trim()) return "Location required";
    if (!data.businessType) return "Select business type";
    if (!data.experience) return "Select experience";
    if (!data.investment) return "Select investment";

    return null;
  };

  // 🔥 MAIN FLOW
  const next = async () => {
    if (!validateStep()) return;

    if (step === 4) {
      // SPAM CHECK
      if (website) {
        setApiError("Submission failed. Please try again.");
        return;
      }
      const validationError = validateBeforeSubmit();
      if (validationError) {
        setApiError(validationError);
        return;
      }

      try {
        setLoading(true);
        setApiError("");

        const res = await fetch("/api/channel-partner", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!res.ok) {
          throw new Error("Server error");
        }

        const result = await res.json();

        if (!result.success) {
          setApiError(result.error || "Submission failed");
          return;
        }

        // ✅ SUCCESS DELAY
        setSuccessDelay(true);

        const timer = setTimeout(() => {
          setSubmitted(true);
        }, 800);

        return () => clearTimeout(timer);
      } catch (err) {
        setApiError("Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setStep((s) => s + 1);
    }
  };

  const back = () => setStep((s) => s - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    next();
  };

  if (submitted) {
    return (
      <SectionWrapper className="bg-[var(--bg-light)] text-center">
        <Container className="max-w-xl">
          <h2 className="text-2xl font-semibold mb-3">
            Application Submitted 🎉
          </h2>
          <p className="text-[var(--text-secondary)]">
            Our team will contact you within 2–3 business days.
          </p>
        </Container>
      </SectionWrapper>
    );
  }
  return (
    <SectionWrapper className="bg-[var(--bg-light)]">
      <Container className="max-w-5xl mx-auto lg:px-[15px]">
        <SectionHeading
          variant="product"
          tag="Partner Application"
          title={<>Apply for Channel Partnership</>}
          description="Fill in your details to join our partner network."
        />

        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white border border-[var(--border)] rounded-2xl shadow-lg overflow-hidden"
          >
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="hidden"
            />

            {/* PROGRESS */}
            <div className="bg-[#0C2340] p-5">
              <div className="flex justify-between text-base text-white/70 mb-2">
                <span>Step {step} of 4</span>
                <span className="text-[var(--color-secondary)]">
                  {["Basic Info", "Business", "Details", "Final"][step - 1]}
                </span>
              </div>

              <div className="flex gap-2">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className={`h-1 flex-1 ${
                      n <= step ? "bg-[var(--color-secondary)]" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* BODY */}
            <div className="p-6 md:p-8 space-y-6">
              {step === 1 && (
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    required
                    value={data.name}
                    error={errors.name}
                    onChange={(v) => set("name", v)}
                    placeholder="Enter Your Name"
                  />

                  <Input
                    label="Company Name"
                    required
                    value={data.company}
                    error={errors.company}
                    onChange={(v) => set("company", v)}
                    placeholder="ABC Pvt Ltd"
                  />

                  <Input
                    label="Phone Number"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Enter Your Working Number"
                    required
                    value={data.phone}
                    error={errors.phone}
                    onChange={(v) => set("phone", v)}
                  />

                  <Input
                    label="Email Address"
                    required
                    value={data.email}
                    error={errors.email}
                    onChange={(v) => set("email", v)}
                    placeholder="you@company.com"
                  />

                  <div className="md:col-span-2">
                    <Input
                      label="Location"
                      required
                      value={data.location}
                      error={errors.location}
                      onChange={(v) => set("location", v)}
                      placeholder="City, State"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="grid md:grid-cols-2 gap-4">
                  <Select
                    label="Business Type"
                    required
                    value={data.businessType}
                    error={errors.businessType}
                    options={["Distributor", "Contractor", "Consultant"]}
                    onChange={(v) => set("businessType", v)}
                  />

                  <Select
                    label="Experience"
                    required
                    value={data.experience}
                    error={errors.experience}
                    options={["1-3 Years", "3-7 Years", "7+ Years"]}
                    onChange={(v) => set("experience", v)}
                  />
                </div>
              )}

              {step === 3 && (
                <textarea
                  placeholder="Tell us about your business (optional)"
                  className="w-full border border-[var(--border)] rounded-lg p-3 text-sm focus:border-[var(--color-primary)] outline-none"
                  value={data.message}
                  onChange={(e) => set("message", e.target.value)}
                />
              )}

              {step === 4 && (
                <Select
                  label="Investment Capacity"
                  required
                  value={data.investment}
                  error={errors.investment}
                  options={["<5L", "5-15L", "15-50L", "50L+"]}
                  onChange={(v) => set("investment", v)}
                />
              )}

              {/* ERROR */}
              {apiError && (
                <p className="text-red-500 text-sm text-center">{apiError}</p>
              )}

              {/* ACTIONS */}
              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={back}
                  disabled={step === 1}
                  className="px-4 py-2 text-sm border border-[var(--border)] rounded-lg disabled:opacity-40"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={loading || successDelay}
                  className="px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-hover)] transition"
                >
                  {loading || successDelay
                    ? "Submitting..."
                    : step === 4
                      ? "Submit Application"
                      : "Next Step"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </SectionWrapper>
  );
}

/* INPUT */
function Input({ label, value, onChange, error, required, placeholder }) {
  return (
    <div>
      <label className="text-sm font-medium mb-1 block">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-lg px-3 py-2 text-sm outline-none transition border
        ${
          error
            ? "border-red-500 bg-red-50"
            : "border-[var(--border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-blue-100"
        }`}
      />

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

/* SELECT */
function Select({ label, value, onChange, options, error, required }) {
  return (
    <div>
      <label className="text-sm font-medium mb-1 block">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-lg px-3 py-2 text-sm outline-none border
        ${
          error
            ? "border-red-500 bg-red-50"
            : "border-[var(--border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-blue-100"
        }`}
      >
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
