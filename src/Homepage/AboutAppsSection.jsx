import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import Container from "@/Shared/Container";
import { FiDownload, FiX, FiExternalLink } from 'react-icons/fi';
import { FaGooglePlay } from 'react-icons/fa';

import cricketIcon from '../assets/cricekt.png';
import divinityIcon from '../assets/divinityOfIslam.png';
import loanIcon from '../assets/loan.png';
import muslimSalatIcon from '../assets/muslimSalat.png';
import economTimeIcon from '../assets/eonocoTime.png';
import whaChallengeIcon from '../assets/whCh.png';
import cricket1 from '../assets/Cricket1.png';
import cricket2 from '../assets/Cricket2.png';
import cricket3 from '../assets/cricket3.png';
import islamSs1 from '../assets/islam1.png';
import islamSs2 from '../assets/islam2.png';
import islamSs3 from '../assets/islam3.png';
import loanSs1 from '../assets/loan1.png';
import loanSs2 from '../assets/loan2.png';
import loanSs3 from '../assets/loan3.png';
import salatSs1 from '../assets/salat1.png';
import salatSs2 from '../assets/salat2.png';
import salatSs3 from '../assets/salat3.png';
import economSs1 from '../assets/econo1.png';
import economSs2 from '../assets/econo2.png';
import economSs3 from '../assets/econo3.png';
import challengeSs1 from '../assets/challenge1.png';
import challengeSs2 from '../assets/challenge2.png';
import challengeSs3 from '../assets/challege3.png';

const apps = [
  {
    title: "Live Cricket Score 2025",
    appName: "Live Cricket Score",
    description: "Get real-time cricket scores and updates for 2025 matches.",
    detailedDescription: "Stay updated with live scores, match statistics, player profiles, and tournament schedules for all major cricket events worldwide. Get push notifications for wickets, boundaries, and match results.",
    icon: cricketIcon,
    installLink: "https://play.google.com/store/apps/details?id=com.livescore.cricketupdates.scoreline",
    features: [
      "Live ball-by-ball commentary",
      "Comprehensive match statistics",
      "Player performance analysis",
      "Tournament schedules and standings",
      "Customizable notifications"
    ],
    screenshots: [cricket1, cricket2, cricket3],
    info: {
      version: "1.2.5",
      size: "15 MB",
      downloads: "10,000+",
      rating: "4.8 ★",
      lastUpdated: "May 21, 2025",
      developer: "Blackly"
    }
  },
  {
    title: "Divinity of Islam",
    appName: "Divinity of Islam",
    description: "Explore Islamic teachings, prayers, and spiritual content.",
    detailedDescription: "A comprehensive Islamic app featuring Quran with translations, prayer times, Qibla direction, Hadith collections, and Islamic calendar. Perfect for daily spiritual guidance and learning.",
    icon: divinityIcon,
    installLink: "https://play.google.com/store/apps/details?id=com.prayer.islamichub",
    features: [
      "Complete Quran with translations",
      "Accurate prayer times",
      "Qibla compass",
      "99 Names of Allah",
      "Islamic supplications"
    ],
    screenshots: [islamSs1, islamSs2, islamSs3],
    info: {
      version: "2.0.1",
      size: "20 MB",
      downloads: "5,000+",
      rating: "4.7 ★",
      lastUpdated: "May 21, 2025",
      developer: "Blackly"
    }
  },
  {
    title: "Loan EMI Calculator",
    appName: "Loan EMI Calculator",
    description: "Calculate your loan EMI with ease and accuracy.",
    detailedDescription: "A simple yet powerful tool to calculate your loan EMI, compare interest rates, and plan your finances. Supports multiple loan types and provides detailed amortization schedules.",
    icon: loanIcon,
    installLink: "https://play.google.com/store/apps/details?id=com.calculatorfinance.emiapp.loancalculator",
    features: [
      "Calculate EMI for various loan types",
      "Compare interest rates",
      "Detailed amortization schedules",
      "Support for home, car, and personal loans",
      "Export results as PDF"
    ],
    screenshots: [loanSs1, loanSs2, loanSs3],
    info: {
      version: "1.1.0",
      size: "10 MB",
      downloads: "8,000+",
      rating: "4.6 ★",
      lastUpdated: "May 21, 2025",
      developer: "Blackly"
    }
  },
  {
    title: "Muslim Salat",
    appName: "Muslim Salat",
    description: "Prayer times and Islamic calendar for Muslims worldwide.",
    detailedDescription: "Get accurate prayer times, Qibla direction, and Islamic calendar events. Includes reminders for Salah, fasting times during Ramadan, and a collection of daily Duas.",
    icon: muslimSalatIcon,
    installLink: "https://play.google.com/store/apps/details?id=com.ramadan_times.salat",
    features: [
      "Accurate prayer timings",
      "Qibla direction finder",
      "Islamic calendar with events",
      "Ramadan fasting schedule",
      "Daily Duas and reminders"
    ],
    screenshots: [salatSs1, salatSs2, salatSs3],
    info: {
      version: "1.5.3",
      size: "18 MB",
      downloads: "7,500+",
      rating: "4.9 ★",
      lastUpdated: "May 21, 2025",
      developer: "Blackly"
    }
  },
  {
    title: "EconomTime",
    appName: "EconomTime",
    description: "Stay updated with global economic news and trends.",
    detailedDescription: "Your go-to app for global economic news, market updates, and financial insights. Features real-time data, expert analysis, and personalized news feeds for investors and professionals.",
    icon: economTimeIcon,
    installLink: "https://play.google.com/store/apps/details?id=com.quotidian.economtime",
    features: [
      "Real-time economic news updates",
      "Market data and stock prices",
      "Expert financial analysis",
      "Personalized news feed",
      "Currency exchange rates"
    ],
    screenshots: [economSs1, economSs2, economSs3],
    info: {
      version: "3.0.2",
      size: "25 MB",
      downloads: "12,000+",
      rating: "4.5 ★",
      lastUpdated: "May 21, 2025",
      developer: "Blackly"
    }
  },
  {
    title: "Wha Challanna",
    appName: "Wha Challenge",
    description: "Engage in fun challenges and interactive games.",
    detailedDescription: "A fun and engaging app where users can participate in daily challenges, compete with friends, and win rewards. Features a variety of games, quizzes, and social challenges.",
    icon: whaChallengeIcon,
    installLink: "https://play.google.com/store/apps/details?id=com.nifaron.whachallenge",
    features: [
      "Daily interactive challenges",
      "Multiplayer games and quizzes",
      "Compete with friends",
      "Earn rewards and badges",
      "Social sharing features"
    ],
    screenshots: [challengeSs1, challengeSs2, challengeSs3],
    info: {
      version: "1.0.8",
      size: "30 MB",
      downloads: "3,000+",
      rating: "4.4 ★",
      lastUpdated: "May 21, 2025",
      developer: "Blackly"
    }
  }
];
const AboutAppsSection = () => {
  const [selectedApp, setSelectedApp] = useState(null);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const openModal = (app) => {
    setSelectedApp(app);
    setCurrentScreenshot(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedApp(null);
    document.body.style.overflow = 'auto';
  };

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => 
      prev === selectedApp.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => 
      prev === 0 ? selectedApp.screenshots.length - 1 : prev - 1
    );
  };

  return (
    <div id="apps" className="bg-[#111722] py-16">
      <Helmet>
       
        <meta
          name="description"
          content="Explore our collection of innovative apps including Live Cricket Score, Divinity of Islam, Loan EMI Calculator, Muslim Salat, EconomTime, and Wha Challenge."
        />
      </Helmet>

      <Container>
        <div className="text-center mb-16 w-[95%] lg:w-[60%] mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 mb-5">
            Discover Our <span className="text-white">Innovative Apps</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Premium mobile experiences designed to enhance your daily life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl p-6 border border-[#334155] hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group"
            >
              <div className="relative overflow-hidden rounded-lg mb-6 h-48">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={app.icon}
                  alt={app.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">{app.appName}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{app.title}</h3>
                <p className="text-gray-400">{app.description}</p>
              </div>
              
              <div className="flex justify-between gap-3 mt-auto">
                <button
                  onClick={() => openModal(app)}
                  className="flex-1 bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500/10 transition-colors duration-300 py-2 px-4 rounded-lg flex items-center justify-center gap-2"
                >
                  Learn More
                </button>
                <button
                  onClick={() => window.open(app.installLink, "_blank")}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 py-2 px-4 rounded-lg flex items-center justify-center gap-2"
                >
                  <FaGooglePlay /> Install
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* App Details Modal */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div 
            className="relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#334155] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-[#1e293b] rounded-full p-2 z-10"
            >
              <FiX size={24} />
            </button>
            
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <div className="relative h-64 lg:h-[550px] rounded-xl overflow-hidden mb-4">
                    <img
                      src={selectedApp.screenshots[currentScreenshot]}
                      alt={`${selectedApp.title} screenshot`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={prevScreenshot}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      &lt;
                    </button>
                    <button
                      onClick={nextScreenshot}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      &gt;
                    </button>
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                      {selectedApp.screenshots.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentScreenshot(idx)}
                          className={`w-2 h-2 rounded-full ${currentScreenshot === idx ? 'bg-white' : 'bg-white/50'}`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <button
                      onClick={() => window.open(selectedApp.installLink, "_blank")}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-colors duration-300"
                    >
                      <FaGooglePlay size={20} />
                      Install on Google Play
                    </button>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedApp.title}</h3>
                  <p className="text-gray-300 mb-6">{selectedApp.detailedDescription}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {selectedApp.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-400 mr-2">✓</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-[#1e293b] rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-white mb-3">For Info:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-400 text-sm">Version</p>
                        <p className="text-white">{selectedApp.info.version}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Size</p>
                        <p className="text-white">{selectedApp.info.size}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Downloads</p>
                        <p className="text-white">{selectedApp.info.downloads}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Rating</p>
                        <p className="text-white">{selectedApp.info.rating}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Last Updated</p>
                        <p className="text-white">{selectedApp.info.lastUpdated}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Developer</p>
                        <p className="text-white">{selectedApp.info.developer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutAppsSection;