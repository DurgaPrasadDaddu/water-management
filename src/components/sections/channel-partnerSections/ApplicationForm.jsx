// // // "use client";

// // // import { useState, useCallback } from "react";

// // // const INITIAL_FORM = {
// // //   fullName: "",
// // //   email: "",
// // //   phone: "",
// // // };

// // // function validate(form) {
// // //   const errors = {};

// // //   if (!form.fullName.trim()) errors.fullName = "Full name is required.";

// // //   if (!form.email.trim()) {
// // //     errors.email = "Email is required.";
// // //   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
// // //     errors.email = "Invalid email address.";
// // //   }

// // //   if (!form.phone.trim()) {
// // //     errors.phone = "Phone number is required.";
// // //   }

// // //   return errors;
// // // }

// // // export default function ApplicationForm() {
// // //   const [form, setForm] = useState(INITIAL_FORM);
// // //   const [errors, setErrors] = useState({});
// // //   const [submitted, setSubmitted] = useState(false);
// // //   const [submitting, setSubmitting] = useState(false);

// // //   const handleChange = useCallback((e) => {
// // //     const { name, value } = e.target;
// // //     setForm((prev) => ({ ...prev, [name]: value }));
// // //     setErrors((prev) => ({ ...prev, [name]: undefined }));
// // //   }, []);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     const validationErrors = validate(form);

// // //     if (Object.keys(validationErrors).length > 0) {
// // //       setErrors(validationErrors);
// // //       return;
// // //     }

// // //     setSubmitting(true);
// // //     await new Promise((r) => setTimeout(r, 1200));
// // //     setSubmitting(false);
// // //     setSubmitted(true);
// // //   };

// // //   if (submitted) {
// // //     return (
// // //       <section id="apply" className="py-20 bg-[var(--bg-light)] text-center">
// // //         <div className="container-custom max-w-xl mx-auto">
// // //           <h2 className="text-2xl font-semibold mb-3">
// // //             Application Received
// // //           </h2>
// // //           <p className="text-[var(--text-secondary)]">
// // //             Thank you, {form.fullName}. Our team will contact you within 2 days.
// // //           </p>
// // //         </div>
// // //       </section>
// // //     );
// // //   }

// // //   return (
// // //     <section id="apply" className="py-20 bg-[var(--bg-light)]">
// // //       <div className="container-custom max-w-2xl mx-auto">

// // //         {/* HEADER */}
// // //         <div className="text-center mb-10">
// // //           <p className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold mb-3">
// // //             Join the Network
// // //           </p>

// // //           <h2 className="text-2xl md:text-4xl font-semibold mb-3">
// // //             Apply for Partnership
// // //           </h2>

// // //           <p className="text-[var(--text-secondary)]">
// // //             Fill in your details and our team will get back within 2 business days.
// // //           </p>
// // //         </div>

// // //         {/* FORM */}
// // //         <form
// // //           onSubmit={handleSubmit}
// // //           className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-[var(--border)] space-y-5"
// // //         >

// // //           {/* NAME */}
// // //           <div>
// // //             <input
// // //               name="fullName"
// // //               value={form.fullName}
// // //               onChange={handleChange}
// // //               placeholder="Full Name"
// // //               className={`w-full px-4 py-3 rounded-lg border text-sm outline-none
// // //                 ${
// // //                   errors.fullName
// // //                     ? "border-red-500"
// // //                     : "border-[var(--border)] focus:border-[var(--color-primary)]"
// // //                 }`}
// // //             />
// // //             {errors.fullName && (
// // //               <p className="text-xs text-red-500 mt-1">
// // //                 {errors.fullName}
// // //               </p>
// // //             )}
// // //           </div>

// // //           {/* EMAIL */}
// // //           <div>
// // //             <input
// // //               name="email"
// // //               value={form.email}
// // //               onChange={handleChange}
// // //               placeholder="Email Address"
// // //               className={`w-full px-4 py-3 rounded-lg border text-sm outline-none
// // //                 ${
// // //                   errors.email
// // //                     ? "border-red-500"
// // //                     : "border-[var(--border)] focus:border-[var(--color-primary)]"
// // //                 }`}
// // //             />
// // //             {errors.email && (
// // //               <p className="text-xs text-red-500 mt-1">
// // //                 {errors.email}
// // //               </p>
// // //             )}
// // //           </div>

// // //           {/* PHONE */}
// // //           <div>
// // //             <input
// // //               name="phone"
// // //               value={form.phone}
// // //               onChange={handleChange}
// // //               placeholder="Phone Number"
// // //               className={`w-full px-4 py-3 rounded-lg border text-sm outline-none
// // //                 ${
// // //                   errors.phone
// // //                     ? "border-red-500"
// // //                     : "border-[var(--border)] focus:border-[var(--color-primary)]"
// // //                 }`}
// // //             />
// // //             {errors.phone && (
// // //               <p className="text-xs text-red-500 mt-1">
// // //                 {errors.phone}
// // //               </p>
// // //             )}
// // //           </div>

// // //           {/* SUBMIT */}
// // //           <button
// // //             type="submit"
// // //             disabled={submitting}
// // //             className="w-full py-3 rounded-lg bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-hover)] transition"
// // //           >
// // //             {submitting ? "Submitting..." : "Apply Now"}
// // //           </button>

// // //           {/* TRUST TEXT */}
// // //           <p className="text-xs text-[var(--text-muted)] text-center">
// // //             No spam. Your information is secure and confidential.
// // //           </p>

// // //         </form>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // "use client";

// // import { useState } from "react";

// // export default function ApplicationForm() {
// //   const [step, setStep] = useState(1);
// //   const [submitted, setSubmitted] = useState(false);

// //   const [data, setData] = useState({
// //     name: "",
// //     company: "",
// //     phone: "",
// //     email: "",
// //     location: "",
// //     businessType: "",
// //     experience: "",
// //     investment: "",
// //     message: "",
// //   });

// //   const set = (k, v) => setData((p) => ({ ...p, [k]: v }));

// //   const next = () => {
// //     if (step === 4) return setSubmitted(true);
// //     setStep((s) => s + 1);
// //   };

// //   const back = () => setStep((s) => s - 1);

// //   if (submitted) {
// //     return (
// //       <section className="py-20 bg-[var(--bg-light)] text-center">
// //         <div className="container-custom max-w-xl mx-auto">
// //           <h2 className="text-2xl font-semibold mb-3">
// //             Application Submitted 🎉
// //           </h2>
// //           <p className="text-[var(--text-secondary)]">
// //             Our team will contact you within 2–3 business days.
// //           </p>
// //         </div>
// //       </section>
// //     );
// //   }

// //   return (
// //     <section id="apply" className="py-10 bg-[var(--bg-light)]">
// //       <div className="max-w-4xl mx-auto">

// //         {/* HEADER */}
// //         <div className="text-center mb-10 ">
// //           <p className="text-base uppercase tracking-widest text-[var(--color-primary)] font-semibold mb-3">
// //             Partner Application
// //           </p>

// //           <h2 className="text-2xl md:text-4xl font-semibold mb-3">
// //             Apply for Channel Partnership
// //           </h2>

// //           <p className="text-[var(--text-secondary)]">
// //             Complete this quick 4-step form.
// //           </p>
// //         </div>

// //         {/* CARD */}
// //         <div className="bg-white border border-[var(--border)] rounded-2xl shadow-md overflow-hidden">

// //           {/* PROGRESS */}
// //           <div className="bg-[#0C2340] p-5">
// //             <div className="flex justify-between text-xs text-white/70 mb-3">
// //               <span>Step {step} of 4</span>
// //               <span className="text-[var(--color-secondary)] font-semibold">
// //                 {["Basic Info", "Business", "Details", "Final"][step - 1]}
// //               </span>
// //             </div>

// //             <div className="flex gap-2">
// //               {[1, 2, 3, 4].map((n) => (
// //                 <div
// //                   key={n}
// //                   className={`h-1 flex-1 rounded ${
// //                     n <= step
// //                       ? "bg-[var(--color-secondary)]"
// //                       : "bg-white/20"
// //                   }`}
// //                 />
// //               ))}
// //             </div>
// //           </div>

// //           {/* FORM */}
// //           <div className="p-6 space-y-5">

// //             {step === 1 && (
// //               <>
// //                 <Input label="Full Name" value={data.name} onChange={(v) => set("name", v)} />
// //                 <Input label="Company Name" value={data.company} onChange={(v) => set("company", v)} />
// //                 <Input label="Phone" value={data.phone} onChange={(v) => set("phone", v)} />
// //                 <Input label="Email" value={data.email} onChange={(v) => set("email", v)} />
// //                 <Input label="Location" value={data.location} onChange={(v) => set("location", v)} />
// //               </>
// //             )}

// //             {step === 2 && (
// //               <>
// //                 <Select
// //                   label="Business Type"
// //                   value={data.businessType}
// //                   options={["Distributor", "Contractor", "Consultant", "Other"]}
// //                   onChange={(v) => set("businessType", v)}
// //                 />
// //                 <Select
// //                   label="Experience"
// //                   value={data.experience}
// //                   options={["1-3 Years", "3-7 Years", "7+ Years"]}
// //                   onChange={(v) => set("experience", v)}
// //                 />
// //               </>
// //             )}

// //             {step === 3 && (
// //               <>
// //                 <p className="text-sm text-[var(--text-secondary)]">
// //                   Tell us more about your business.
// //                 </p>
// //                 <textarea
// //                   className="w-full border border-[var(--border)] rounded-lg p-3 text-sm"
// //                   placeholder="Your business details..."
// //                   value={data.message}
// //                   onChange={(e) => set("message", e.target.value)}
// //                 />
// //               </>
// //             )}

// //             {step === 4 && (
// //               <>
// //                 <Select
// //                   label="Investment Capacity"
// //                   value={data.investment}
// //                   options={["<5L", "5-15L", "15-50L", "50L+"]}
// //                   onChange={(v) => set("investment", v)}
// //                 />
// //               </>
// //             )}

// //             {/* ACTIONS */}
// //             <div className="flex justify-between pt-4">
// //               <button
// //                 onClick={back}
// //                 disabled={step === 1}
// //                 className="px-4 py-2 text-sm border border-[var(--border)] rounded-lg disabled:opacity-40"
// //               >
// //                 Back
// //               </button>

// //               <button
// //                 onClick={next}
// //                 className="px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-hover)]"
// //               >
// //                 {step === 4 ? "Submit" : "Next"}
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* TRUST */}
// //         <div className="flex justify-center gap-6 mt-6 text-sm text-[var(--text-muted)]">
// //           <span>✓ No registration fee</span>
// //           <span>✓ 3-day response</span>
// //           <span>✓ Exclusive territory</span>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // /* REUSABLE INPUT */
// // function Input({ label, value, onChange }) {
// //   return (
// //     <div>
// //       <label className="text-sm font-medium block mb-1">{label}</label>
// //       <input
// //         value={value}
// //         onChange={(e) => onChange(e.target.value)}
// //         className="w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm focus:border-[var(--color-primary)] outline-none"
// //       />
// //     </div>
// //   );
// // }

// // /* REUSABLE SELECT */
// // function Select({ label, value, options, onChange }) {
// //   return (
// //     <div>
// //       <label className="text-sm font-medium block mb-1">{label}</label>
// //       <select
// //         value={value}
// //         onChange={(e) => onChange(e.target.value)}
// //         className="w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm focus:border-[var(--color-primary)] outline-none"
// //       >
// //         <option value="">Select</option>
// //         {options.map((o) => (
// //           <option key={o}>{o}</option>
// //         ))}
// //       </select>
// //     </div>
// //   );
// // }
// "use client";

// import { useState } from "react";
// import Container from "@/components/ui/Container";
// import SectionWrapper from "@/components/ui/SectionWrapper";
// import SectionHeading from "@/components/ui/SectionHeading";

// export default function ApplicationForm() {
//   const [step, setStep] = useState(1);
//   const [submitted, setSubmitted] = useState(false);
//   const [errors, setErrors] = useState({});

//   const [data, setData] = useState({
//     name: "",
//     company: "",
//     phone: "",
//     email: "",
//     location: "",
//     businessType: "",
//     experience: "",
//     investment: "",
//     message: "",
//   });

//   const set = (k, v) => {
//     setData((p) => ({ ...p, [k]: v }));
//     setErrors((prev) => ({ ...prev, [k]: "" }));
//   };

//   // ✅ VALIDATION
//   const validateStep = () => {
//     const e = {};

//     if (step === 1) {
//       if (!data.name) e.name = "Required";
//       if (!data.company) e.company = "Required";
//       if (!data.phone) e.phone = "Required";
//       if (!data.email) e.email = "Required";
//       if (!data.location) e.location = "Required";
//     }

//     if (step === 2) {
//       if (!data.businessType) e.businessType = "Required";
//       if (!data.experience) e.experience = "Required";
//     }

//     if (step === 4) {
//       if (!data.investment) e.investment = "Required";
//     }

//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   const next = () => {
//     if (!validateStep()) return;

//     if (step === 4) {
//       setSubmitted(true);
//     } else {
//       setStep((s) => s + 1);
//     }
//   };

//   const back = () => setStep((s) => s - 1);

//   // ✅ ENTER KEY SUBMIT
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     next();
//   };

//   if (submitted) {
//     return (
//       <SectionWrapper className="bg-[var(--bg-light)] text-center">
//         <Container className="max-w-xl lg:px-[15px]">
//           <h2 className="text-2xl font-semibold mb-3">
//             Application Submitted 🎉
//           </h2>
//           <p className="text-[var(--text-secondary)]">
//             Our team will contact you within 2–3 business days.
//           </p>
//         </Container>
//       </SectionWrapper>
//     );
//   }

//   return (
//     <SectionWrapper className="bg-[var(--bg-light)]">
//       <Container className="max-w-5xl mx-auto lg:px-[15px]">
//         {/* HEADING */}
//         <SectionHeading
//           variant="product"
//           tag="Partner Application"
//           title={<>Apply for Channel Partnership</>}
//           description="Fill in your details to join our partner network."
//         />
//         <div className="flex justify-center">
//           <div className="w-full max-w-5xl">
//             <form
//               onSubmit={handleSubmit}
//               className="bg-white border border-[var(--border)] rounded-2xl shadow-md overflow-hidden"
//             >
//               {/* PROGRESS */}
//               <div className="bg-[#0C2340] p-5">
//                 <div className="flex justify-between text-xs text-white/70 mb-2">
//                   <span>Step {step} of 4</span>
//                   <span className="text-[var(--color-secondary)]">
//                     {["Basic Info", "Business", "Details", "Final"][step - 1]}
//                   </span>
//                 </div>

//                 <div className="flex gap-2">
//                   {[1, 2, 3, 4].map((n) => (
//                     <div
//                       key={n}
//                       className={`h-1 flex-1 ${
//                         n <= step
//                           ? "bg-[var(--color-secondary)]"
//                           : "bg-white/20"
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* BODY */}
//               <div className="p-6 md:p-8 space-y-5">
//                 {step === 1 && (
//                   <>
//                     <Input
//                       label="Full Name"
//                       required
//                       value={data.name}
//                       error={errors.name}
//                       onChange={(v) => set("name", v)}
//                     />
//                     <Input
//                       label="Company Name"
//                       required
//                       value={data.company}
//                       error={errors.company}
//                       onChange={(v) => set("company", v)}
//                     />
//                     <Input
//                       label="Phone Number"
//                       required
//                       value={data.phone}
//                       error={errors.phone}
//                       onChange={(v) => set("phone", v)}
//                     />
//                     <Input
//                       label="Email Address"
//                       required
//                       value={data.email}
//                       error={errors.email}
//                       onChange={(v) => set("email", v)}
//                     />
//                     <Input
//                       label="Location"
//                       required
//                       value={data.location}
//                       error={errors.location}
//                       onChange={(v) => set("location", v)}
//                     />
//                   </>
//                 )}

//                 {step === 2 && (
//                   <>
//                     <Select
//                       label="Business Type"
//                       required
//                       value={data.businessType}
//                       error={errors.businessType}
//                       options={["Distributor", "Contractor", "Consultant"]}
//                       onChange={(v) => set("businessType", v)}
//                     />
//                     <Select
//                       label="Experience"
//                       required
//                       value={data.experience}
//                       error={errors.experience}
//                       options={["1-3 Years", "3-7 Years", "7+ Years"]}
//                       onChange={(v) => set("experience", v)}
//                     />
//                   </>
//                 )}

//                 {step === 3 && (
//                   <textarea
//                     placeholder="Tell us about your business (optional)"
//                     className="w-full border border-[var(--border)] rounded-lg p-3 text-sm focus:border-[var(--color-primary)] outline-none"
//                     value={data.message}
//                     onChange={(e) => set("message", e.target.value)}
//                   />
//                 )}

//                 {step === 4 && (
//                   <Select
//                     label="Investment Capacity"
//                     required
//                     value={data.investment}
//                     error={errors.investment}
//                     options={["<5L", "5-15L", "15-50L", "50L+"]}
//                     onChange={(v) => set("investment", v)}
//                   />
//                 )}

//                 {/* ACTIONS */}
//                 <div className="flex justify-between pt-4">
//                   <button
//                     type="button"
//                     onClick={back}
//                     disabled={step === 1}
//                     className="px-4 py-2 text-sm border border-[var(--border)] rounded-lg disabled:opacity-40"
//                   >
//                     Back
//                   </button>

//                   <button
//                     type="submit"
//                     className="px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-hover)] transition"
//                   >
//                     {step === 4 ? "Submit Application" : "Next Step"}
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </Container>
//     </SectionWrapper>
//   );
// }

// /* INPUT */
// function Input({ label, value, onChange, error }) {
//   return (
//     <div>
//       <label className="text-sm mb-1 block">{label}</label>
//       <input
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className={`w-full border rounded-lg px-3 py-2 ${
//           error ? "border-red-500" : "border-[var(--border)]"
//         }`}
//       />
//       {error && <p className="text-xs text-red-500">{error}</p>}
//     </div>
//   );
// }

// /* SELECT */
// function Select({ label, value, onChange, options, error }) {
//   return (
//     <div>
//       <label className="text-sm mb-1 block">{label}</label>
//       <select
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className={`w-full border rounded-lg px-3 py-2 ${
//           error ? "border-red-500" : "border-[var(--border)]"
//         }`}
//       >
//         <option value="">Select</option>
//         {options.map((o) => (
//           <option key={o}>{o}</option>
//         ))}
//       </select>
//       {error && <p className="text-xs text-red-500">{error}</p>}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

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
  };

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

  const next = () => {
    if (!validateStep()) return;

    if (step === 4) {
      setSubmitted(true);
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
                      n <= step
                        ? "bg-[var(--color-secondary)]"
                        : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* BODY */}
            <div className="p-6 md:p-8 space-y-6">

              {step === 1 && (
                <div className="grid md:grid-cols-2 gap-4">

                  <Input label="Full Name" required value={data.name} error={errors.name} onChange={(v) => set("name", v)} placeholder="Enter Your Name" />

                  <Input label="Company Name" required value={data.company} error={errors.company} onChange={(v) => set("company", v)} placeholder="ABC Pvt Ltd" />

                  <Input label="Phone Number" required value={data.phone} error={errors.phone} onChange={(v) => set("phone", v)} placeholder="+91 98765 43210" />

                  <Input label="Email Address" required value={data.email} error={errors.email} onChange={(v) => set("email", v)} placeholder="you@company.com" />

                  <div className="md:col-span-2">
                    <Input label="Location" required value={data.location} error={errors.location} onChange={(v) => set("location", v)} placeholder="City, State" />
                  </div>

                </div>
              )}

              {step === 2 && (
                <div className="grid md:grid-cols-2 gap-4">

                  <Select label="Business Type" required value={data.businessType} error={errors.businessType} options={["Distributor","Contractor","Consultant"]} onChange={(v) => set("businessType", v)} />

                  <Select label="Experience" required value={data.experience} error={errors.experience} options={["1-3 Years","3-7 Years","7+ Years"]} onChange={(v) => set("experience", v)} />

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
                  className="px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-hover)] transition"
                >
                  {step === 4 ? "Submit Application" : "Next Step"}
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