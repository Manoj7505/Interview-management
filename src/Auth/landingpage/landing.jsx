import React, { useState } from "react";
import heroMan from "../../assets/landing/heroman.png";
import heroWoman from "../../assets/landing/herowomen.png";
import logo from "../../assets/logo/logo.png";
import card1 from "../../assets/landing/card1.png";
import card2 from "../../assets/landing/card2.png";
import card3 from "../../assets/landing/card3.png";
import { Link, useNavigate } from "react-router-dom";
 

const Landing = () => {
      const navigate = useNavigate(); // ✅ Add this
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <>
      {/* ================= Hero Section ================= */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 overflow-hidden">
        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-6 z-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-35 h-12 mr-2" />
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-8">
            <a
              href="#home"
              className="text-gray-700 font-medium hover:text-indigo-600 transition-colors cursor-pointer"
            >
              Home
            </a>
            <Link
              to="/Login"
              className="text-gray-700 font-medium hover:text-indigo-600 transition-colors cursor-pointer"
            >
              Login
            </Link>
            <Link
              to="/Signin"
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer"
            >
              Signup
            </Link>
          </div>
        </nav>

        {/* Main Content Container */}
        <div className="relative z-10 flex items-center min-h-screen pt-16">
          {/* Left Content */}
          <div className="flex-1 px-8 lg:px-16">
            <div className="max-w-2xl">
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
                  Make Your Professional Journey With Us
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
                Be <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 underline decoration-indigo-400">Smarter</span>,{" "}
                <br />
                And <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Harder</span>
              </h1>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Our platform helps you to achieve your goal in your Life and make you professional.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
<button
  onClick={() => navigate("/Signin")}
  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer text-lg"
>
  Get Started
</button>

                <button className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-all cursor-pointer text-lg">
                  Online And Offline Interview
                </button>
              </div>

              <div className="flex items-center gap-3 text-gray-500">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-lg">Interview Within Two Days</p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 relative h-screen flex items-center justify-center">
            {/* Background Decorative Elements */}
            <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 right-32 w-64 h-64 bg-gradient-to-br from-pink-300 to-orange-400 rounded-full blur-2xl opacity-25"></div>

            <div className="absolute bottom-32 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl transform -rotate-12 hover:-rotate-6 transition-transform z-10 border border-purple-100">
              <div className="w-32 h-40">
                <div className="h-4 bg-purple-300 rounded-lg mb-3"></div>
                <div className="h-3 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded mb-3"></div>
                <div className="h-3 bg-purple-200 rounded mb-2"></div>
                <div className="h-2 bg-gray-100 rounded mb-1"></div>
                <div className="h-2 bg-gray-100 rounded"></div>
              </div>
            </div>

            <div className="absolute top-1/2 right-40 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-2xl transform rotate-6 hover:rotate-3 transition-transform z-10 border border-green-100">
              <div className="w-28 h-36">
                <div className="h-3 bg-green-300 rounded-lg mb-3"></div>
                <div className="h-2 bg-gray-200 rounded mb-2"></div>
                <div className="h-2 bg-gray-200 rounded mb-2"></div>
                <div className="h-2 bg-gray-200 rounded mb-3"></div>
                <div className="h-2 bg-green-200 rounded mb-2"></div>
                <div className="h-2 bg-gray-100 rounded mb-1"></div>
                <div className="h-2 bg-gray-100 rounded"></div>
              </div>
            </div> 

            {/* Hero Images */}
            <div className="relative w-full h-full">
              {/* Woman */}
              <div className="absolute top-10 right-10 w-80 h-96">
                <div className="absolute inset-0 bg-blue-600 rounded-3xl z-0"></div>
                <div className="absolute top-90 left-0 w-80 h-80 overflow-hidden z-0">
                  <div className="w-80 h-80 bg-blue-600 rounded-full absolute -top-40"></div>
                </div>
                <img
                  src={heroMan}
                  alt="Hero Woman"
                  className="relative top-20 z-10 w-80 h-96 object-contain drop-shadow-2xl"
                />
              </div>

              {/* Man */}
              <div className="absolute bottom-10 right-[400px] w-72 h-80">
                <div className="absolute inset-0 bg-orange-400 rounded-3xl z-0"></div>
                <div className="absolute bottom-70 left-0 w-72 h-36 overflow-hidden z-0">
                  <div className="w-72 h-72 bg-orange-400 rounded-full absolute -top-0"></div>
                </div>
                <img
                  src={heroWoman}
                  alt="Hero Man"
                  className="relative z-10 w-72 h-80 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Card Section ================= */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-purple-50/50"></div>
        <div className="relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
            Learn from the Experts of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Roriri IT Park</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 lg:px-20 max-w-7xl mx-auto">
            {/* Card 1 */}
            <div className="group bg-gradient-to-br from-emerald-100 via-emerald-200 to-emerald-600 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative -mt-20 mb-6">
                <div className="w-40 h-40 bg-white rounded-full p-2 shadow-xl">
                  <img
                    src={card1}
                    alt="Expert 1"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Software Engineer
              </h3>
              <p className="text-gray-800 mb-6 text-lg leading-relaxed">
                5 years of experience in Fullstack Development at Roriri IT Park.
              </p>
              <button
                onClick={() => toggleExpand(1)}
                className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all shadow-lg cursor-pointer"
              >
                {expandedCard === 1 ? "Close" : "Know More"}
              </button>

              <div
                className={`mt-6 w-full overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedCard === 1 ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-700 leading-relaxed">
                    💻 Expert in <span className="font-semibold text-emerald-600">React, Node.js</span>, and <span className="font-semibold text-emerald-600">Cloud Solutions</span>. Loves mentoring juniors and building scalable apps.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-gradient-to-br from-pink-100 via-pink-200 to-pink-600 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative -mt-20 mb-6">
                <div className="w-40 h-40 bg-white rounded-full p-2 shadow-xl">
                  <img
                    src={card2}
                    alt="Expert 2"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Marketing Specialist
              </h3>
              <p className="text-gray-800 mb-6 text-lg leading-relaxed">
                3 years of experience in Digital Marketing at Roriri IT Park.
              </p>
              <button
                onClick={() => toggleExpand(2)}
                className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all shadow-lg cursor-pointer"
              >
                {expandedCard === 2 ? "Close" : "Know More"}
              </button>

              <div
                className={`mt-6 w-full overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedCard === 2 ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-700 leading-relaxed">
                    📈 Skilled in <span className="font-semibold text-pink-600">SEO, Ads Strategy</span>, and <span className="font-semibold text-pink-600">Brand Growth</span>. Passionate about creating impactful campaigns.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-gradient-to-br from-indigo-100 via-indigo-200 to-indigo-600 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative -mt-20 mb-6">
                <div className="w-40 h-40 bg-white rounded-full p-2 shadow-xl">
                  <img
                    src={card3}
                    alt="Expert 3"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Finance Manager</h3>
              <p className="text-gray-800 mb-6 text-lg leading-relaxed">
                7 years of expertise in Financial Planning at Roriri IT Park.
              </p>
              <button
                onClick={() => toggleExpand(3)}
                className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all shadow-lg cursor-pointer"
              >
                {expandedCard === 3 ? "Close" : "Know More"}
              </button>

              <div
                className={`mt-6 w-full overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedCard === 3 ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-700 leading-relaxed">
                    💰 Specialist in <span className="font-semibold text-indigo-600">Budgeting, Auditing</span>, and <span className="font-semibold text-indigo-600">Investment Planning</span>. Helps businesses grow sustainably.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Features Section ================= */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 overflow-hidden">
        <div className="text-center py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            We make your <span className="text-purple-600">interviews</span> easy!
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Managing interviews could take a lot of time and effort. But not when you are using our platform!
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-4 gap-10 px-8">
          {[
            { icon: '✅', title: 'Automated Reminders', text: 'Automated interview reminders and notifications' },
            { icon: '🔒', title: 'Secure Conferencing', text: 'Secure video conferencing with recording' },
            { icon: '⏰', title: 'Scheduling Updates', text: 'Real-time scheduling updates and conflicts detection' },
            { icon: '📈', title: 'Analytics Dashboard', text: 'Performance analytics dashboard with insights' },
            { icon: '💬', title: 'Collaborative Feedback', text: 'Collaborative feedback and evaluation system' },
            { icon: '📱', title: 'Mobile Access', text: 'Mobile app for on-the-go access' },
            { icon: '🔔', title: 'Custom Workflows', text: 'Customizable interview workflows and stages' },
            { icon: '🌐', title: 'Global Support', text: 'Multi-language and timezone support' }
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transform transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-4xl text-purple-500 mb-4">{feature.icon}</span>
              <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Footer ================= */}
      <section className="bg-black">
        <p className="text-white text-center py-6">
          CopyRights For Roriri Software@2025 
        </p>
      </section>
    </>
  );
};

export default Landing;
