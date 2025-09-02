import { useState, useEffect } from 'react';
import './App.css';
import logo from "./assets/Logo.png";
import bgImage from "./assets/Gallery/1.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Default

  const navItems = ['Home', 'About Us', 'Courses', 'Grades', 'Achievements', 'Contact'];

  useEffect(() => {
    const sections = navItems.map(item =>
      item.toLowerCase().replace(/\s+/g, '-')
    );

    const observers = sections.map((section) => {
      const element = document.getElementById(section);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setActiveSection(section);
          }
        },
        { threshold: 0.6 } // 60% visibility
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
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <img src={logo} alt="Thuto Thabeng Logo" className="w-10 h-10 object-contain" />
            </div>
            <span className="text-xl font-bold text-white">Thuto Thabeng Learning Center</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const sectionId = item.toLowerCase().replace(/\s+/g, '-');
              const isActive = activeSection === sectionId;

              return (
                <li key={item}>
                  <a
                    href={`#${sectionId}`}
                    className={`font-medium transition-colors duration-300
                      ${isActive 
                        ? 'text-cyan-500' 
                        : 'text-gray-200 hover:text-yellow-400'
                      }
                    `}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-navy border-t border-gray-700">
            <ul className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => {
                const sectionId = item.toLowerCase().replace(/\s+/g, '-');
                const isActive = activeSection === sectionId;

                return (
                  <li key={item}>
                    <a
                      href={`#${sectionId}`}
                      className={`block font-medium py-2
                        ${isActive 
                          ? 'text-cyan-500' 
                          : 'text-gray-200 hover:text-yellow-400'
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
        className="relative bg-navy text-white py-20 bg-cover bg-center bg-no-repeat hero-gradient"
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
              <button className="bg-yellow-400 hover:bg-cyan-500  text-navy font-semibold px-6 py-3 rounded-md transition">
                Book a Session
              </button>
              <button className="bg-yellow-400 hover:bg-cyan-500 font-semibold px-6 py-3 rounded-md transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
  <div className="w-full max-w-md">
  <div
    className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-xl border border-yellow-400 hover:shadow-yellow-400/30 transition"
    style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="text-center space-y-4">
      
      {/* Logo inside container */}
      <div className="w-14 h-14 bg-navy rounded-lg flex items-center justify-center mx-auto shadow-md">
        <img
          src={logo}
          alt="Thuto Thabeng Logo"
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Title + Tagline */}
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
<section className="py-16 bg-gray-900">
  <div className="container mx-auto px-4">
    {/* Section Heading */}
    <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
      About Thuto Thabeng Learning Center
    </h2>
    <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
      Dedicated to providing quality education and nurturing future leaders through comprehensive academic programs from Grade 7 to Grade 12.
    </p>

    {/* Content: Image + Features */}
    <div className="flex flex-col md:flex-row items-center gap-12">
      {/* Image */}
      <img
        src="./src/assets/Gallery/1.png"
        alt="Students studying in our library"
        className="rounded-xl shadow-lg w-full md:w-1/2 object-cover"
      />

      {/* Feature List */}
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
            {/* Icon Badge */}
            <div
              className={`${item.color} text-white p-2 w-10 h-10 flex items-center justify-center rounded-md shadow-md`}
            >
              <i className={`${item.icon} text-lg`}></i>
            </div>

            {/* Text Content */}
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
    {/* Section Heading */}
    <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
      Courses & Subjects Offered
    </h2>
    <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
      Comprehensive curriculum designed to prepare students for university entrance and future career success.
    </p>

    {/* Cards Grid */}
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
          {/* Icon */}
          <div className="text-3xl mb-4">
            <i className={`${course.icon} text-white`}></i>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-4">{course.title}</h3>

          {/* List */}
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
    {/* Section Heading */}
    <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
      Grade Levels We Serve
    </h2>
    <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
      Comprehensive education pathway from Grade 7 through Grade 12, preparing students for university and beyond.
    </p>

    {/* Cards Grid */}
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

    {/* Achievements / Grade 12 Results */}
<section id="achievements" className="py-16 bg-navy">
  <div className="container mx-auto px-4">
    {/* Section Heading */}
    <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
      Grade 12 Academic Excellence
    </h2>
    <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
      Consistently outstanding results that open doors to universities, colleges, and careers.
    </p>

    {/* Results Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          year: "2025",
          passRate: "--",
          bachelors: "--",
          diplomas: "--",
          higherCertificate: "--",
          State: "In Progress",
        },
        {
          year: "2024",
          passRate: "98%",
          bachelors: "76%",
          diplomas: "18%",
          higherCertificate: "4%",
          State: "Done",
        },
        {
          year: "2023",
          passRate: "98%",
          bachelors: "76%",
          diplomas: "18%",
          higherCertificate: "4%",
           State: "Done",
        },
        {
          year: "2022",
          passRate: "95%",
          bachelors: "70%",
          diplomas: "20%",
          higherCertificate: "5%",
           State: "Done",
        },
        {
          year: "2021",
          passRate: "93%",
          bachelors: "65%",
          diplomas: "22%",
          higherCertificate: "6%",
           State: "Done",
        },
      ].map((result, index) => (
        <div
          key={index}
          className="p-6 border border-gray-700 rounded-xl bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          {/* Year Badge */}
          <div className="text-yellow-400 font-bold text-xl mb-4 text-center">
            📅 {result.year}
          </div>

          {/* Stats */}
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

          {/* Decorative Icon */}
          <div className="text-center mt-5">
            <i className="bi bi-trophy-fill text-yellow-500 opacity-30"></i>
          </div>
        </div>
      ))}
    </div>

    {/* Summary Note */}
    <div className="text-center mt-10 text-gray-400 text-sm">
      <p>Results verified annually. Bachelor’s pass qualifies for university entrance.</p>
    </div>
  </div>
</section>

      {/* 3D Gallery Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">Our Learning Environment</h2>
          <p className="text-center text-white mb-12 max-w-3xl mx-auto">
            Take a virtual tour of our modern facilities and see where excellence happens.
          </p>

          <div className="gallery-container">
            <div className="gallery-track">
              {[
  {
    id: 1,
    title: "Modern Classrooms",
    description: "State-of-the-art learning spaces designed for engagement",
    image: "./src/assets/Gallery/1.png"
  },
  {
    id: 2,
    title: "Science Laboratory",
    description: "Fully equipped labs for hands-on scientific exploration",
    image: "./src/assets/Gallery/2.png"
  },
  {
    id: 3,
    title: "Library & Study Areas",
    description: "Quiet spaces for focused learning and research",
    image: "./src/assets/Gallery/3.png"
  },
  {
    id: 4,
    title: "Computer Lab",
    description: "Modern technology for digital literacy and coding",
    image: "./src/assets/Gallery/4.png"
  },
  {
    id: 5,
    title: "Sports Facilities",
    description: "Active learning spaces for physical education",
    image: "./src/assets/Gallery/5.png"
  },
  {
    id: 6,
    title: "Art Studio",
    description: "Creative spaces for artistic expression and development",
    image: "./src/assets/Gallery/6.png"
  }
]
.map((item) => (
                <div key={item.id} className="gallery-card">
                  <div className="gallery-card-inner">
                    <div className="gallery-card-front">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="gallery-overlay">
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      </div>
                    </div>
                    <div className="gallery-card-back">
                      <div className="p-6 h-full flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-yellow-400 mb-4">{item.title}</h3>
                        <p className="text-white text-sm leading-relaxed">{item.description}</p>
                        <div className="mt-4">
                          <button className="bg-yellow-400 text-navy px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

          <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-yellow-400 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-700 text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-yellow-400 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-700 text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-yellow-400 font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-700 text-white"
                >
                  <option value="">Choose a topic</option>
                  <option value="admissions">Admissions</option>
                  <option value="courses">Course Inquiry</option>
                  <option value="tutoring">Private Tutoring</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-yellow-400 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-700 text-white"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-navy font-semibold py-3 px-6 rounded-md transition"
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