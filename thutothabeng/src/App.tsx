import { useState, useEffect, useRef } from 'react';
import './App.css';
import logo from "./assets/Logo.png";
// Gallery images imports
import gallery1 from "./assets/Gallery/1.png";
import gallery2 from "./assets/Gallery/2.png";
import gallery3 from "./assets/Gallery/3.png";
import gallery4 from "./assets/Gallery/4.png";
import gallery5 from "./assets/Gallery/5.png";
import gallery6 from "./assets/Gallery/6.png";
import gallery7 from "./assets/Gallery/7.png";
import gallery8 from "./assets/Gallery/8.png";
import emailjs from '@emailjs/browser';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    "Home",
    "About Us",
    "Courses",
    "Grades",
    "Achievements",
    "Contact",
  ];

  useEffect(() => {
    const sections = navItems.map((item) =>
      item.toLowerCase().replace(/\s+/g, "-"),
    );

    const observers = sections.map((section) => {
      const element = document.getElementById(section);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setActiveSection(section);
          }
        },
        { threshold: 0.6 },
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, [navItems]);

  return (
    <div className="min-h-screen font-sans bg-navy">
      {/* Navbar */}
      <nav className="bg-navy border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <img
                src={logo}
                alt="Thuto Thabeng Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white">
              Thuto Thabeng Learning Center
            </span>
          </div>

          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const sectionId = item.toLowerCase().replace(/\s+/g, "-");
              const isActive = activeSection === sectionId;

              return (
                <li key={item}>
                  <a
                    href={`#${sectionId}`}
                    className={`font-medium transition-colors duration-300
                      ${
                        isActive
                          ? "text-cyan-500 underline-color-cyan-950"
                          : "text-gray-200 hover:text-yellow-400"
                      }
                    `}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            className="md:hidden text-white hover:text-yellow-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-navy border-t border-gray-700">
            <ul className="container mx-auto px-4 py-2 space-y-1">
              {navItems.map((item) => {
                const sectionId = item.toLowerCase().replace(/\s+/g, "-");
                const isActive = activeSection === sectionId;

                return (
                  <li key={item}>
                    <a
                      href={`#${sectionId}`}
                      className={`block font-medium py-1 px-2 rounded text-sm
                        ${
                          isActive
                            ? "text-cyan-500 bg-gray-800"
                            : "text-gray-200 hover:text-yellow-400 hover:bg-gray-800"
                        }
                      `}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="hero-gradient h-[90vh] flex items-center justify-center text-center text-navy brightness-70"
        style={{ backgroundImage: `url(${gallery7})` }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-yellow-400">
              Excellence in Education{" "}
              <span className="text-white">Grades 7-12</span>
            </h1>
            <p className="text-lg mt-6 text-gray-100 max-w-lg">
              Empowering students to achieve academic excellence and prepare for university success through innovative teaching methods and personalized support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-400 hover:bg-cyan-500 text-navy font-semibold px-6 py-3 rounded-md transition"
              >
                Book a Session
              </button>
              <button 
                onClick={() => document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-400 hover:bg-cyan-500 text-navy font-semibold px-6 py-3 rounded-md transition"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center" >
            <div className="w-full max-w-md">
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-xl border border-yellow-400 hover:shadow-yellow-400/30 transition">
                <div className="text-center space-y-4">
                  <div className="w-14 h-14 bg-navy rounded-lg flex items-center justify-center mx-auto shadow-md">
                    <img src={logo} alt="Thuto Thabeng Logo" className="w-10 h-10 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-400">Thuto Thabeng</h3>
                  <p className="text-white text-sm tracking-wide">
                    Excellence in Education
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about-us" className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "95%", label: "Pass Rate 2023", color: "text-blue-600" },
              { value: "6", label: "Grade Levels", color: "text-green-600" },
              { value: "15+", label: "Subjects Offered", color: "text-yellow-500" },
              { value: "4", label: "Years of Excellence", color: "text-red-600" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-3xl font-bold text-yellow-400">{stat.value}</div>
                <div className="text-white text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
            About Thuto Thabeng Learning Center
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Dedicated to providing quality education and nurturing future leaders through comprehensive academic programs from Grade 7 to Grade 12.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <img
              src={gallery5}
              alt="Students studying in our library"
              className="rounded-xl shadow-lg w-full md:w-1/2 object-cover"
            />

            <div className="md:w-1/2 space-y-6">
              {[
                {
                  title: "Qualified Educators",
                  icon: "bi bi-mortarboard",
                  desc: "Our experienced teachers are passionate about student success and use innovative teaching methods.",
                  color: "bg-blue-600",
                },
                {
                  title: "Proven Results",
                  icon: "bi bi-trophy",
                  desc: "Consistently high pass rates and university acceptance records demonstrate our commitment to excellence.",
                  color: "bg-green-600",
                },
                {
                  title: "Small Class Sizes",
                  icon: "bi bi-people",
                  desc: "Personalized attention ensures every student receives the support they need to succeed.",
                  color: "bg-yellow-400",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div
                    className={`${item.color} text-white p-2 w-10 h-10 flex items-center justify-center rounded-md shadow-md`}
                  >
                    <i className={`${item.icon} text-lg`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-yellow-400">{item.title}</h3>
                    <p className="text-gray-200">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
            Courses & Subjects Offered
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Comprehensive curriculum designed to prepare students for university entrance and future career success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Core Subjects",
                color: "bg-purple-600",
                icon: "bi bi-book",
                list: [
                  "Mathematics",
                  "Agricultural Sciences",
                  "Physical Sciences",
                  "Life Sciences",
                  "History",
                  "Geography",
                  "Mathematical Literacy",
                  "Natural Sciences",
                  "Technology"
                ],
              },
              {
                title: "Additional Classes",
                color: "bg-green-600",
                icon: "bi bi-laptop",
                list: [
                  "Basic Computing",
                  "Basic Programming",
                  "Digital Literacy"
                ],
              },
              {
                title: "Guidance & Support",
                color: "bg-yellow-400",
                icon: "bi bi-people",
                list: [
                  "Career Guidance",
                  "Psychological Support",
                  "Study Skills Workshops"
                ],
              },
            ].map((course, index) => (
              <div
                key={index}
                className={`${course.color} text-white p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <div className="text-3xl mb-4">
                  <i className={`${course.icon} text-white`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4">{course.title}</h3>
                <ul className="space-y-2">
                  {course.list.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <i className="bi bi-check-circle-fill text-cyan-500 me-2 text-lg"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grades Section */}
      <section id="grades" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
            Grade Levels We Serve
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Comprehensive education pathway from Grade 7 through Grade 12, preparing students for university and beyond.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Grades 7-8",
                subtitle: "Foundation Phase - Building essential skills and knowledge",
                color: "border-blue-600",
                items: ["Core subject introduction", "Study skills development", "Creative exploration"],
              },
              {
                title: "Grades 9-10",
                subtitle: "Intermediate Phase - Subject specialization begins",
                color: "border-yellow-400",
                items: ["Subject choice guidance", "Career exploration", "Advanced skill building"],
              },
              {
                title: "Grades 11-12",
                subtitle: "Senior Phase - University preparation focus",
                color: "border-red-600",
                items: ["Matric examination prep", "University application support", "Career counseling"],
              },
            ].map((grade, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl shadow-lg border-l-4 ${grade.color} bg-gray-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{grade.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{grade.subtitle}</p>
                <ul className="space-y-3">
                  {grade.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-100">
                      <i className="bi bi-check-circle-fill text-green-400 me-2 text-lg"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
            Grade 12 Academic Excellence
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Consistently outstanding results that open doors to universities, colleges, and careers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { year: "2025", passRate: "--", bachelors: "--", diplomas: "--", higherCertificate: "--", State: "In Progress" },
              { year: "2024", passRate: "98%", bachelors: "76%", diplomas: "18%", higherCertificate: "4%", State: "Done" },
              { year: "2023", passRate: "98%", bachelors: "76%", diplomas: "18%", higherCertificate: "4%", State: "Done" },
              { year: "2022", passRate: "95%", bachelors: "70%", diplomas: "20%", higherCertificate: "5%", State: "Done" },
              { year: "2021", passRate: "93%", bachelors: "65%", diplomas: "22%", higherCertificate: "6%", State: "Done" },
            ].map((result, index) => (
              <div
                key={index}
                className="p-6 border border-gray-700 rounded-xl bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-yellow-400 font-bold text-xl mb-4 text-center">
                  📅 {result.year}
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-700">
                    <span className="text-gray-300">Pass Rate</span>
                    <span className="font-bold text-white">{result.passRate}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-700">
                    <span className="text-gray-300">Bachelor's</span>
                    <span className="font-bold text-green-400">{result.bachelors}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-700">
                    <span className="text-gray-300">Diploma</span>
                    <span className="font-bold text-blue-400">{result.diplomas}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-300">Higher Cert</span>
                    <span className="font-bold text-yellow-300">{result.higherCertificate}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-300">State</span>
                    <span className="font-bold text-yellow-300">{result.State}</span>
                  </div>
                </div>
                <div className="text-center mt-5">
                  <i className="bi bi-trophy-fill text-yellow-500 opacity-30"></i>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 text-gray-400 text-sm">
            <p>Results verified annually. Bachelor’s pass qualifies for university entrance.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
            Our Learning Environment
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Take a look at our modern facilities and learning spaces designed for student success.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: gallery1, alt: "Classroom environment" },
              { src: gallery2, alt: "Students studying" },
              { src: gallery3, alt: "Library facility" },
              { src: gallery4, alt: "Computer lab" },
              { src: gallery8, alt: "Science laboratory" },
              { src: gallery6, alt: "School exterior" },
            ].map((image, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Contact Section */}
      <section id="contact" className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">Get In Touch</h2>
          <p className="text-center text-white mb-12 max-w-3xl mx-auto">
            Have questions about enrollment, courses, or schedules? Reach out to us!
          </p>

          {(() => {
            // Using environment variables from Replit Secrets
            const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
            const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
            const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

            const [isSent, setIsSent] = useState(false);
            const [isError, setIsError] = useState(false);
            const [isLoading, setIsLoading] = useState(false);
           const formRef = useRef<HTMLFormElement>(null); // 

            const sendEmail = (e: { preventDefault: () => void; }) => {
              e.preventDefault();
              setIsLoading(true);
              setIsSent(false);
              setIsError(false);

              // Debug logging
              console.log("Environment variables:", {
                SERVICE_ID,
                TEMPLATE_ID,
                PUBLIC_KEY: PUBLIC_KEY ? "***" + PUBLIC_KEY.slice(-4) : "empty"
              });

              // Check if all required fields are present
              if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
                console.error("Missing EmailJS configuration:", {
                  hasServiceId: !!SERVICE_ID,
                  hasTemplateId: !!TEMPLATE_ID,
                  hasPublicKey: !!PUBLIC_KEY
                });
                setIsLoading(false);
                setIsError(true);
                setTimeout(() => setIsError(false), 5000);
                return;
              }

              emailjs
                .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, {
                  publicKey: PUBLIC_KEY,
                })
                .then(
                  () => {
                    console.log("Email sent successfully!");
                    setIsLoading(false);
                    setIsSent(true);
                    setTimeout(() => setIsSent(false), 5000);
                    formRef.current!.reset();
                  },
                  (error) => {
                    console.error("EmailJS Error:", error);
                    console.error("Error details:", error.text || error.message);
                    setIsLoading(false);
                    setIsError(true);
                    setTimeout(() => setIsError(false), 5000);
                  }
                );
            };

            return (
              <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
                {isSent && (
                  <div className="mb-6 p-4 bg-green-600 text-white text-center rounded-md">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {isError && (
                  <div className="mb-6 p-4 bg-red-600 text-white text-center rounded-md">
                    Failed to send message. Please try again.
                  </div>
                )}

                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-yellow-400 font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-700 text-white"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-yellow-400 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-700 text-white"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-yellow-400 font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-700 text-white"
                      required
                    >
                      <option value="">Choose a topic</option>
                      <option value="Admissions">Admissions</option>
                      <option value="Courses">Course Inquiry</option>
                      <option value="Tutoring">Private Tutoring</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-yellow-400 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-700 text-white"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full font-semibold py-3 px-6 rounded-md transition
                        ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-yellow-400 hover:bg-yellow-500'} text-navy`}
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Thuto Thabeng Learning Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


export default App;