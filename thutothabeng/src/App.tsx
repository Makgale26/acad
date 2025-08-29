// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'About Us', 'Courses', 'Grades', 'Achievements', 'Contact'];

  return (
    <div className="min-h-screen font-sans bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-navy" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5V9.23L2 12v7.77z"/>
            </svg>
            <span className="text-xl font-bold text-navy">Thuto Thabeng Learning Center</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-sm">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-600 hover:text-yellow-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center z-60"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 absolute w-full left-0 top-16 z-50 shadow-lg">
            <ul className="container mx-auto px-4 py-4 space-y-4 text-sm">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="block text-gray-600 hover:text-yellow-400 transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-navy text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Excellence in Education{" "}
              <span className="text-yellow-400">Grades 7-12</span>
            </h1>
            <p className="text-lg mt-6 text-gray-100 max-w-lg">
              Empowering students to achieve academic excellence and prepare for university success through innovative teaching methods and personalized support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-navy font-semibold px-6 py-3 rounded-md transition">
                Book a Session
              </button>
              <button className="bg-white text-navy hover:bg-gray-100 font-semibold px-6 py-3 rounded-md transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://via.placeholder.com/600x400?text=Classroom"
              alt="Students learning at Thuto Thabeng"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about-us" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "95%", label: "Pass Rate 2023", color: "text-blue-600" },
              { value: "6", label: "Grade Levels", color: "text-green-600" },
              { value: "15+", label: "Subjects Offered", color: "text-yellow-500" },
              { value: "4", label: "Years of Excellence", color: "text-red-600" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy mb-6">About Thuto Thabeng Learning Center</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Dedicated to providing quality education and nurturing future leaders through comprehensive academic programs from Grade 7 to Grade 12.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <img
              src="https://via.placeholder.com/600x400?text=Library"
              alt="Students studying in our library"
              className="rounded-xl shadow-lg w-full md:w-1/2"
            />
            <div className="md:w-1/2 space-y-6">
              {[
                {
                  title: "Qualified Educators",
                  icon: "💻",
                  desc: "Our experienced teachers are passionate about student success and use innovative teaching methods.",
                  color: "bg-blue-600"
                },
                {
                  title: "Proven Results",
                  icon: "🏆",
                  desc: "Consistently high pass rates and university acceptance records demonstrate our commitment to excellence.",
                  color: "bg-green-600"
                },
                {
                  title: "Small Class Sizes",
                  icon: "👥",
                  desc: "Personalized attention ensures every student receives the support they need to succeed.",
                  color: "bg-yellow-400"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-10 h-10 ${item.color} text-white flex items-center justify-center rounded-md text-lg font-bold`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy mb-6">Courses & Subjects Offered</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive curriculum designed to prepare students for university entrance and future career success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Core Subjects",
                color: "bg-navy",
                icon: "📚",
                list: ["Mathematics", "English Language", "Physical Sciences", "Life Sciences", "History", "Geography"]
              },
              {
                title: "Languages",
                color: "bg-green-600",
                icon: "🌍",
                list: ["English First Language", "English Second Language", "Afrikaans", "isiZulu", "Sesotho"]
              },
              {
                title: "Technology & Arts",
                color: "bg-yellow-400",
                icon: "🎨",
                list: ["Computer Applications Technology", "Information Technology", "Visual Arts", "Dramatic Arts", "Music"]
              }
            ].map((course, index) => (
              <div
                key={index}
                className={`${course.color} text-white p-6 rounded-xl shadow-lg`}
              >
                <div className="text-2xl mb-4">{course.icon}</div>
                <h3 className="text-xl font-bold mb-4">{course.title}</h3>
                <ul className="space-y-2">
                  {course.list.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2">•</span>
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
      <section id="grades" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy mb-6">Grade Levels We Serve</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive education pathway from Grade 7 through Grade 12, preparing students for university and beyond.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Grades 7-8",
                subtitle: "Foundation Phase - Building essential skills and knowledge",
                color: "border-blue-600",
                items: ["Core subject introduction", "Study skills development", "Creative exploration"],
                icon: "✅"
              },
              {
                title: "Grades 9-10",
                subtitle: "Intermediate Phase - Subject specialization begins",
                color: "border-yellow-400",
                items: ["Subject choice guidance", "Career exploration", "Advanced skill building"],
                icon: "✅"
              },
              {
                title: "Grades 11-12",
                subtitle: "Senior Phase - University preparation focus",
                color: "border-red-600",
                items: ["Matric examination prep", "University application support", "Career counseling"],
                icon: "✅"
              }
            ].map((grade, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl shadow-lg border-l-4 ${grade.color} bg-gray-50`}
              >
                <h3 className="text-xl font-bold text-navy mb-2">{grade.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{grade.subtitle}</p>
                <ul className="space-y-2">
                  {grade.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-500">{grade.icon}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements / Testimonials */}
      <section id="achievements" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy mb-6">Student Success Stories</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Hear from our students and parents about how Thuto Thabeng Learning Center made a difference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The personalized support helped me raise my math grade from 60% to 92% in one term!",
                author: "Thandi M.",
                role: "Grade 11 Student"
              },
              {
                quote: "My daughter gained confidence and clarity about her future career path thanks to the counseling team.",
                author: "Mr. Nkosi",
                role: "Parent"
              },
              {
                quote: "The small class sizes allowed me to ask questions without fear — I finally understood science!",
                author: "James L.",
                role: "Grade 12 Graduate"
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="font-bold text-navy">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy mb-6">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Have questions about enrollment, courses, or schedules? Reach out to us!
          </p>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Choose a topic</option>
                  <option value="admissions">Admissions</option>
                  <option value="courses">Course Inquiry</option>
                  <option value="tutoring">Private Tutoring</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
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