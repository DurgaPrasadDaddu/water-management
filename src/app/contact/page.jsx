// // "use client";

// // import { motion } from "framer-motion";

// // export default function ContactPage() {
// //   return (
// //     <div className="bg-white">

// //       {/* HERO */}
// //       <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
// //         <div className="max-w-6xl mx-auto px-6 text-center">
// //           <motion.h1
// //             initial={{ opacity: 0, y: 40 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             className="text-4xl font-bold"
// //           >
// //             Contact Us
// //           </motion.h1>

// //           <p className="mt-4 text-blue-100">
// //             Let’s discuss your water treatment and engineering requirements
// //           </p>
// //         </div>
// //       </section>

// //       {/* MAIN SECTION */}
// //       <section className="py-20">
// //         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

// //           {/* FORM */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -60 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             className="bg-gray-50 p-8 rounded-2xl shadow"
// //           >
// //             <h2 className="text-2xl font-semibold mb-6">
// //               Send Us a Message
// //             </h2>

// //             <form className="space-y-5">

// //               <input type="text" placeholder="Full Name"
// //                 className="w-full p-3 border rounded-lg" />

// //               <input type="email" placeholder="Email Address"
// //                 className="w-full p-3 border rounded-lg" />

// //               <input type="tel" placeholder="Phone Number"
// //                 className="w-full p-3 border rounded-lg" />

// //               <input type="text" placeholder="Company Name"
// //                 className="w-full p-3 border rounded-lg" />

// //               <select className="w-full p-3 border rounded-lg">
// //                 <option>Select Industry</option>
// //                 <option>Pharmaceutical</option>
// //                 <option>Chemical</option>
// //                 <option>Manufacturing</option>
// //                 <option>Healthcare</option>
// //               </select>

// //               <select className="w-full p-3 border rounded-lg">
// //                 <option>Service Required</option>
// //                 <option>STP</option>
// //                 <option>ETP</option>
// //                 <option>RO</option>
// //                 <option>ZLD</option>
// //                 <option>Fabrication</option>
// //               </select>

// //               <textarea
// //                 rows="4"
// //                 placeholder="Your Message"
// //                 className="w-full p-3 border rounded-lg"
// //               ></textarea>

// //               <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
// //                 Submit Inquiry
// //               </button>

// //             </form>
// //           </motion.div>

// //           {/* CONTACT INFO */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 60 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             className="space-y-6"
// //           >

// //             <h2 className="text-2xl font-semibold">
// //               Contact Information
// //             </h2>

// //             <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
// //               <p className="font-semibold">Office Address</p>
// //               <p className="text-[var(--heading-text)] mt-2">
// //                 Hyaline Enviro Engineers Pvt. Ltd.<br />
// //                 Jai Ram Bhavan, Plot no 61,<br />
// //                 Green Park Road, Suchitra,<br />
// //                 Hyderabad, Telangana - 500067
// //               </p>
// //             </div>

// //             <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
// //               <p className="font-semibold">Phone</p>
// //               <p className="text-[var(--heading-text)] mt-2">
// //                 +91 93907 01234 <br />
// //                 +91 79811 23366
// //               </p>
// //             </div>

// //             <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
// //               <p className="font-semibold">Email</p>
// //               <p className="text-[var(--heading-text)] mt-2">
// //                 info@hyalineenviro.com <br />
// //                 sales@hyalineenviro.com
// //               </p>
// //             </div>

// //           </motion.div>

// //         </div>
// //       </section>

// //       {/* MAP */}
// //       <section className="h-[400px]">
// //         <iframe
// //           src="https://maps.google.com/maps?q=Jeedimetla%20Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
// //           width="100%"
// //           height="100%"
// //           loading="lazy"
// //           className="border-0"
// //         ></iframe>
// //       </section>

// //       {/* CTA */}
// //       <section className="bg-blue-600 text-white py-16 text-center">
// //         <h2 className="text-2xl font-semibold">
// //           Need a Custom Water Treatment Solution?
// //         </h2>
// //         <p className="mt-2 text-blue-100">
// //           Our engineers are ready to help you design the right system.
// //         </p>
// //       </section>

// //     </div>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   User,
//   Mail,
//   Phone,
//   Building2,
//   MessageSquare,
// } from "lucide-react";

// export default function ContactPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     industry: "",
//     service: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   // HANDLE CHANGE
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // VALIDATION
//   const validate = () => {
//     let newErrors = {};

//     if (!form.name) newErrors.name = "Full name is required";
//     if (!form.email) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(form.email))
//       newErrors.email = "Invalid email";

//     if (!form.phone) newErrors.phone = "Phone number is required";
//     if (!form.message) newErrors.message = "Message is required";

//     return newErrors;
//   };

//   // SUBMIT
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setErrors({});
//     setLoading(true);

//     // simulate API
//     setTimeout(() => {
//       setLoading(false);
//       setSuccess(true);
//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         company: "",
//         industry: "",
//         service: "",
//         message: "",
//       });
//     }, 1500);
//   };

//   return (
//     <div className="bg-white">

//       {/* HERO */}
//       <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl font-bold"
//           >
//             Contact Us
//           </motion.h1>
//           <p className="mt-4 text-blue-100">
//             Let’s discuss your engineering requirements
//           </p>
//         </div>
//       </section>

//       {/* MAIN */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

//           {/* FORM */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="bg-white border p-8 rounded-2xl shadow-xl"
//           >
//             <h2 className="text-2xl font-semibold mb-6">
//               Send Us a Message
//             </h2>

//             {success && (
//               <p className="mb-4 text-green-600 font-medium">
//                Message sent successfully!
//               </p>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-5">

//               {/* NAME */}
//               <div>
//                 <div className="relative">
//                   <User className="absolute left-3 top-3 text-gray-400 w-5" />
//                   <input
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     placeholder="Full Name"
//                     className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                   />
//                 </div>
//                 {errors.name && (
//                   <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//                 )}
//               </div>

//               {/* EMAIL */}
//               <div>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-3 text-gray-400 w-5" />
//                   <input
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     placeholder="Email Address"
//                     className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 {errors.email && (
//                   <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//                 )}
//               </div>

//               {/* PHONE */}
//               <div>
//                 <div className="relative">
//                   <Phone className="absolute left-3 top-3 text-gray-400 w-5" />
//                   <input
//                     name="phone"
//                     value={form.phone}
//                     onChange={handleChange}
//                     placeholder="Phone Number"
//                     className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 {errors.phone && (
//                   <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
//                 )}
//               </div>

//               {/* COMPANY */}
//               <div className="relative">
//                 <Building2 className="absolute left-3 top-3 text-gray-400 w-5" />
//                 <input
//                   name="company"
//                   value={form.company}
//                   onChange={handleChange}
//                   placeholder="Company Name"
//                   className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* DROPDOWNS */}
//               <select
//                 name="industry"
//                 value={form.industry}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-lg"
//               >
//                 <option value="">Select Industry</option>
//                 <option>Pharmaceutical</option>
//                 <option>Chemical</option>
//                 <option>Manufacturing</option>
//                 <option>Healthcare</option>
//               </select>

//               <select
//                 name="service"
//                 value={form.service}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-lg"
//               >
//                 <option value="">Service Required</option>
//                 <option>STP</option>
//                 <option>ETP</option>
//                 <option>RO</option>
//                 <option>ZLD</option>
//                 <option>Fabrication</option>
//               </select>

//               {/* MESSAGE */}
//               <div>
//                 <div className="relative">
//                   <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5" />
//                   <textarea
//                     name="message"
//                     value={form.message}
//                     onChange={handleChange}
//                     rows="4"
//                     placeholder="Your Message"
//                     className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 {errors.message && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.message}
//                   </p>
//                 )}
//               </div>

//               {/* BUTTON */}
//               <button
//                 disabled={loading}
//                 className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex justify-center items-center gap-2"
//               >
//                 {loading ? "Sending..." : "Submit Inquiry"}
//               </button>

//             </form>
//           </motion.div>

//           {/* CONTACT INFO */}
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="space-y-6"
//           >
//             <h2 className="text-2xl font-semibold">
//               Contact Information
//             </h2>

//             <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
//               <p className="font-semibold">Office Address</p>
//               <p className="text-[var(--heading-text)] mt-2">
//                 Hyaline Enviro Engineers Pvt. Ltd.<br />
//                 Hyderabad, Telangana - 500067
//               </p>
//             </div>

//             <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
//               <p className="font-semibold">Phone</p>
//               <p className="text-[var(--heading-text)] mt-2">
//                 +91 93907 01234 <br />
//                 +91 79811 23366
//               </p>
//             </div>

//             <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
//               <p className="font-semibold">Email</p>
//               <p className="text-[var(--heading-text)] mt-2">
//                 info@hyalineenviro.com <br />
//                 sales@hyalineenviro.com
//               </p>
//             </div>
//           </motion.div>

//         </div>
//       </section>

//       {/* MAP */}
//       <section className="h-[400px]">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30440.332549674757!2d78.476794!3d17.505529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9beb1fd6bf87%3A0x909e3d9b5fad41e9!2sHYALINE%20ENVIRO%20ENGINEERS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1695463779641!5m2!1sen!2sin"
//           width="100%"
//           height="100%"
//           loading="lazy"
//           className="border-0"
//         ></iframe>
//       </section>

//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   User,
//   Mail,
//   Phone,
//   Building2,
//   MessageSquare,
//   MapPin,
// } from "lucide-react";
// import Image from "next/image";

// export default function ContactPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     industry: "",
//     service: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     let newErrors = {};

//     if (!form.name) newErrors.name = "Full name is required";
//     if (!form.email) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(form.email))
//       newErrors.email = "Invalid email";

//     if (!form.phone) newErrors.phone = "Phone number is required";
//     if (!form.message) newErrors.message = "Message is required";

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setErrors({});
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       setSuccess(true);
//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         company: "",
//         industry: "",
//         service: "",
//         message: "",
//       });
//     }, 1500);
//   };

//   const contactData = [
//     {
//       icon: <MapPin className="w-5 h-5" />,
//       title: "Office Address",
//       content: (
//         <>
//           Plot no : 61, Jayaram Bhavan,
//           <br />
//           Green Park Avenue, Suchitra,
//           <br />
//           Hyderabad - 500067
//         </>
//       ),
//     },
//     {
//       icon: <Phone className="w-5 h-5" />,
//       title: "Call Us Anytime",
//       content: (
//         <>
//           <a href="tel:+919390701234">+91 93907 01234</a>
//           <br />
//           <a href="tel:+917981123366">+91 79811 23366</a>
//           <br />
//           <span className="text-xs text-gray-500">Tel: 040 27230374</span>
//         </>
//       ),
//     },
//     {
//       icon: <Mail className="w-5 h-5" />,
//       title: "Email Us",
//       content: (
//         <>
//           <a href="mailto:info@hyalineenviro.com">info@hyalineenviro.com</a>
//           <br />
//           <a href="mailto:sales@hyalineenviro.com">sales@hyalineenviro.com</a>
//         </>
//       ),
//     },
//   ];

//   return (
//     <div className="bg-white">
//       {/* HERO */}
//       <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl font-bold"
//         >
//           Contact Us
//         </motion.h1>
//         <p className="mt-3 text-blue-100">
//           Let’s discuss your engineering requirements
//         </p>
//       </section>

//       {/* MAIN */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
//           {/* LEFT FORM */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="bg-white border p-8 rounded-2xl shadow-xl"
//           >
//             <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

//             {success && (
//               <p className="mb-4 text-green-600">
//                Message sent successfully!
//               </p>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* INPUT COMPONENT STYLE */}
//               {[
//                 { name: "name", icon: User, placeholder: "Full Name" },
//                 { name: "email", icon: Mail, placeholder: "Email Address" },
//                 { name: "phone", icon: Phone, placeholder: "Phone Number" },
//                 {
//                   name: "company",
//                   icon: Building2,
//                   placeholder: "Company Name",
//                 },
//               ].map(({ name, icon: Icon, placeholder }) => (
//                 <div key={name}>
//                   <div className="relative">
//                     <Icon className="absolute left-3 top-3 text-gray-400 w-5" />
//                     <input
//                       name={name}
//                       value={form[name]}
//                       onChange={handleChange}
//                       placeholder={placeholder}
//                       className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   {errors[name] && (
//                     <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
//                   )}
//                 </div>
//               ))}

//               {/* SELECTS */}
//               <select
//                 name="industry"
//                 value={form.industry}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-lg"
//               >
//                 <option value="">Select Industry</option>
//                 <option>Pharmaceutical</option>
//                 <option>Chemical</option>
//                 <option>Manufacturing</option>
//                 <option>Healthcare</option>
//               </select>

//               <select
//                 name="service"
//                 value={form.service}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-lg"
//               >
//                 <option value="">Service Required</option>
//                 <option>STP</option>
//                 <option>ETP</option>
//                 <option>RO</option>
//                 <option>ZLD</option>
//                 <option>Fabrication</option>
//               </select>

//               {/* MESSAGE */}
//               <div>
//                 <div className="relative">
//                   <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5" />
//                   <textarea
//                     name="message"
//                     value={form.message}
//                     onChange={handleChange}
//                     rows="4"
//                     placeholder="Your Message"
//                     className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 {errors.message && (
//                   <p className="text-red-500 text-sm mt-1">{errors.message}</p>
//                 )}
//               </div>

//               {/* BUTTON */}
//               <button
//                 disabled={loading}
//                 className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
//               >
//                 {loading ? "Sending..." : "Submit Inquiry"}
//               </button>
//             </form>
//           </motion.div>
//           {/* RIGHT CONTACT CARDS */}
//           {/* <div className="space-y-6">
//             {contactData.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 className="group bg-gray-50 border rounded-xl p-6 shadow-sm hover:shadow-lg transition"
//               >
//                 <div className="flex gap-4 items-start">
//                   <div className="bg-blue-100 text-blue-600 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1">
//                       {item.title}
//                     </h3>
//                     <div className="text-[var(--heading-text)] text-sm">
//                       {item.content}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div> */}

//           <div className="space-y-8">
//             {/* LOGO */}
//             <div className="flex justify-center">
//               <div className="relative w-100 h-80">
//                 <Image
//                   src="/logos/logo.png"
//                   alt="Hyaline Enviro Engineers"
//                   fill
//                   className="object-contain"
//                   priority
//                 />
//               </div>
//             </div>

//             {/* CONTACT CARDS */}
//             <div className="space-y-6">
//               {contactData.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.2 }}
//                   className="group bg-gray-50 border rounded-xl p-6 shadow-sm hover:shadow-lg transition"
//                 >
//                   <div className="flex gap-4 items-start">
//                     <div className="bg-blue-100 text-blue-600 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition">
//                       {item.icon}
//                     </div>
//                     <div>
//                       <h3 className="font-semibold mb-1">{item.title}</h3>
//                       <div className="text-[var(--heading-text)] text-md">
//                         {item.content}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* MAP */}
//       <section className="h-[400px]">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30440.332549674757!2d78.476794!3d17.505529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9beb1fd6bf87%3A0x909e3d9b5fad41e9!2sHYALINE%20ENVIRO%20ENGINEERS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1695463779641!5m2!1sen!2sin"
//           width="100%"
//           height="100%"
//           loading="lazy"
//           className="border-0"
//         ></iframe>
//       </section>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useState } from "react";

const SERVICES = [
  "Effluent Treatment Plant (ETP)",
  "Sewage Treatment Plant (STP)",
  "Water Treatment Plant (WTP)",
  "Zero Liquid Discharge (ZLD)",
  "Reverse Osmosis Systems",
  "Industrial Wastewater Management",
  "Operation & Maintenance Services",
  "Consultancy & Design",
  "Other / Custom Requirement",
];

function ContactCard({ type, icon, address, phones, email, gradient }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${gradient}`}
    >
      <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
        <svg
          viewBox="0 0 96 96"
          fill="currentColor"
          className="text-white w-full h-full"
        >
          <circle cx="96" cy="0" r="80" />
        </svg>
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            {icon}
          </div>
          <span className="text-white/80 text-xs font-bold uppercase tracking-widest">
            {type}
          </span>
        </div>
        <div className="flex gap-3 mb-5">
          <svg
            className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="text-white/90 text-sm leading-relaxed">{address}</p>
        </div>
        <div className="flex gap-3 mb-3">
          <svg
            className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <div className="flex flex-col gap-1">
            {phones.map((p, i) => (
              <a
                key={i}
                href={`tel:${p.replace(/\s/g, "")}`}
                className="text-white font-medium text-sm hover:text-cyan-200 transition-colors duration-200"
              >
                {p}
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <svg
            className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <a
            href={`mailto:${email}`}
            className="text-white font-medium text-sm hover:text-cyan-200 transition-colors duration-200 break-all"
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  );
}

function StatBadge({ value, label }) {
  return (
    <div className="flex flex-col items-center px-6 py-4 border-r border-white/10 last:border-r-0">
      <span className="text-2xl font-black text-white leading-none">
        {value}
      </span>
      <span className="text-xs text-white/50 mt-1 font-medium tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
}

export default function ContactPage() {
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

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="min-h-[70svh] bg-slate-50">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      {/* <section className="relative overflow-hidden bg-[#0a1628] py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0e2040] to-[#071222]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #00A3E022 0%, transparent 60%), radial-gradient(circle at 80% 20%, #0066aa18 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-cyan-400" />
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em]">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Let&apos;s Discuss
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Your Project
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              From feasibility studies to full-scale plant installation — our
              engineers are ready to deliver precision water treatment solutions
              for your facility.
            </p>
            <div className="inline-flex border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <StatBadge value="13+" label="Years Exp." />
              <StatBadge value="100+" label="Projects" />
              <StatBadge value="ISO" label="Certified" />
              <StatBadge value="24/7" label="Support" />
            </div>
          </div>
        </div>
      </section> */}
      <section className="relative overflow-hidden bg-[#0e2444] py-24 md:py-32">
        {/*Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/contact-bg.webp"
            alt="Contact Background"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>

        {/*Dark Gradient Overlay (keep this strong) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/40 via-[#0e2040]/20 to-transparent" />

        {/* Glow Effects */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #00A3E022 0%, transparent 60%), radial-gradient(circle at 80% 20%, #0066aa18 0%, transparent 50%)",
          }}
        />

        {/* Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-cyan-400" />
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em]">
                Get In Touch
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Let&apos;s Discuss
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Your Project
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              From feasibility studies to full-scale plant installation — our
              engineers are ready to deliver precision water treatment solutions
              for your facility.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <StatBadge value="13+" label="Years Exp." />
              <StatBadge value="500+" label="Projects" />
              <StatBadge value="ISO" label="Certified" />
              <StatBadge value="24/7" label="Support" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* ── CONTACT FORM ── */}
          <div className="lg:col-span-3">
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
                    Message Received!
                  </h3>
                  <p className="text-slate-500 text-sm max-w-xs">
                    Thank you for reaching out. One of our engineers will
                    contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
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
                      Your information is confidential and will never be shared
                      with third parties.
                    </span>
                  </div>

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

          {/* ── SIDEBAR ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Quick CTA */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-slate-900 text-sm mb-1">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">
                    For urgent project discussions or on-site emergencies, reach
                    us directly.
                  </p>
                  <div className="flex flex-col gap-2">
                    <a
                      href="tel:+917942818686"
                      className="flex items-center gap-2.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
                    >
                      <svg
                        className="w-4 h-4 text-[#00A3E0]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/917942818686"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#22c05e] rounded-xl px-4 py-3 text-sm font-bold text-white transition-all duration-200 hover:shadow-md hover:shadow-green-200"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Office Card */}
            <ContactCard
              type="Corporate Office"
              icon={
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              }
              address="Plot no: 61, Jayaram Bhavan, Ground Floor, Road no: 1, Green Park Avenue, Behind Chennai Shopping Mall, Suchitra Circle, Hyderabad – 500067"
              phones={["+91 7942818686", "+91 7981123366"]}
              email="sales@hyalineenviro.com"
              gradient="bg-gradient-to-br from-[#0a1e3c] to-[#0e2d5a]"
            />

            {/* Factory Card */}
            <ContactCard
              type="Factory & Works"
              icon={
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              }
              address="Plot No: 02, Survey No: 11, Pipeline Road, Beside MYUR Bar & Restaurant, Jeedimetla (V), Hyderabad – 500067"
              phones={["+91 93907 01234", "+91 93476 05167"]}
              email="info@hyalineenviro.com"
              gradient="bg-gradient-to-br from-[#0f3460] to-[#16213e]"
            />
          </div>
        </div>
      </section>

      {/* ─── MAP SECTION ──────────────────────────────────────── */}
      <section className="pb-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-8 py-6 border-b border-slate-100">
            <div>
              <h2 className="text-xl font-black text-slate-900">
                Our Location
              </h2>
              <p className="text-slate-500 text-sm mt-0.5">
                Suchitra Circle, Hyderabad, Telangana
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Suchitra+Circle+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg w-fit"
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Open in Maps
            </a>
          </div>
          <div className="relative h-80 md:h-96 bg-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30440.332549674757!2d78.476794!3d17.505529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9beb1fd6bf87%3A0x909e3d9b5fad41e9!2sHYALINE%20ENVIRO%20ENGINEERS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1695463779641!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA BANNER ────────────────────────────────── */}
      <section className="bg-[#0a1628] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white leading-snug">
                Ready to Start Your Water Treatment Project?
              </h2>
              <p className="text-slate-400 mt-2 text-sm">
                Trusted by industries across Telangana &amp; Andhra Pradesh.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="tel:+917942818686"
                className="inline-flex items-center gap-2.5 bg-[#00A3E0] hover:bg-[#0091c7] text-white font-bold px-7 py-3.5 rounded-xl text-sm uppercase tracking-widest transition-all duration-200 hover:shadow-lg hover:shadow-cyan-900/40 hover:-translate-y-0.5"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Us Now
              </a>
              <a
                href="mailto:sales@hyalineenviro.com"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-3.5 rounded-xl text-sm uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
