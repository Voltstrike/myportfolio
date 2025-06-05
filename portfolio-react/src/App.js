import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaSun, FaMoon, FaDownload } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Smooth fade-in animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle theme
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  // Smooth scroll to section
  const scrollToSection = (id, e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: ${darkMode ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f0f0f0'};
          color: ${darkMode ? '#f1f1f1' : '#222'};
          transition: background 0.5s ease, color 0.5s ease;
          line-height: 1.6;
        }
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
          background: ${darkMode ? 'rgba(0,0,0,0.5)' : 'white'};
          border-radius: 10px;
          box-shadow: ${darkMode ? '0 8px 16px rgba(0,0,0,0.25)' : '0 4px 12px rgba(0,0,0,0.15)'};
          transition: background 0.5s ease, box-shadow 0.5s ease;
        }
        header {
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
        }
        header h1 {
          margin: 0.3rem 0 0.5rem;
          font-size: 2.8rem;
          font-weight: 700;
          letter-spacing: 1px;
          user-select: none;
        }
        header p.title {
          font-size: 1.3rem;
          font-weight: 300;
          color: ${darkMode ? '#d5d5d5' : '#666'};
        }
        .profile-photo {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          object-fit: cover;
          margin: 0 auto 1.5rem auto;
          display: block;
          border: 3px solid ${darkMode ? '#ffb347' : '#764ba2'};
          box-shadow: ${darkMode ? '0 0 10px #ffb347' : '0 0 10px #764ba2'};
        }
        nav {
          background: ${darkMode ? '#5a4a99' : '#764ba2'};
          padding: 12px 0;
          margin-bottom: 2rem;
          border-radius: 8px;
          text-align: center;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 4px 6px rgba(0,0,0,0.2);
          user-select: none;
        }
        nav a {
          color: ${darkMode ? '#dfe6fd' : '#eee'};
          margin: 0 15px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: color 0.3s ease;
          cursor: pointer;
        }
        nav a:hover {
          color: #ffb347;
        }
        section {
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        h2 {
          border-bottom: 3px solid #ffb347;
          padding-bottom: 5px;
          margin-bottom: 1rem;
          font-weight: 600;
          font-size: 1.8rem;
          letter-spacing: 0.05em;
          color: #ffb347;
          user-select: none;
        }
        ul {
          list-style-type: none;
          padding-left: 0;
        }
        ul li {
          margin-bottom: 0.5rem;
        }
        .job {
          margin-bottom: 1rem;
        }
        .job h3 {
          margin: 0;
          font-weight: 700;
          font-size: 1.3rem;
          color: #d6c162;
        }
        .job span {
          font-style: italic;
          font-weight: 500;
          color: #c2b280;
          user-select: text;
        }
        .job p {
          margin: 0.3rem 0 0.5rem 0;
          font-weight: 400;
          color: ${darkMode ? '#ececec' : '#333'};
        }
        .skills-list, .certifications-list, .languages-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .skill-item, .cert-item, .lang-item {
          background: ${darkMode ? '#464060' : '#eee'};
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          user-select: none;
          transition: background 0.3s ease, color 0.3s ease;
          cursor: default;
          color: ${darkMode ? '#f1f1f1' : '#222'};
        }
        .skill-item:hover, .cert-item:hover, .lang-item:hover {
          background: #ffb347;
          color: #000;
        }
        footer {
          text-align: center;
          padding: 1.5rem 0 1rem 0;
          color: ${darkMode ? '#dcdcdccc' : '#555'};
          font-size: 0.9rem;
          border-top: 1px solid ${darkMode ? '#5551' : '#ccc'};
          margin-top: 3rem;
          user-select: none;
        }
        .contact-info {
          display: flex;
          justify-content: center;
          gap: 25px;
          margin-top: 15px;
          flex-wrap: wrap;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: ${darkMode ? '#c2c2c2' : '#444'};
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s ease;
          user-select: text;
        }
        .contact-item:hover {
          color: #ffb347;
        }
        a.contact-item svg {
          font-size: 21px;
        }
        .theme-toggle {
          position: fixed;
          top: 15px;
          right: 15px;
          background: ${darkMode ? '#764ba2' : '#667eea'};
          border: none;
          border-radius: 50%;
          color: #fff;
          width: 46px;
          height: 46px;
          cursor: pointer;
          font-size: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          transition: background 0.3s ease;
          user-select: none;
          z-index: 110;
        }
        .theme-toggle:hover {
          background: #ffb347;
          color: #000;
        }
        .download-resume {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffb347;
          color: #000;
          padding: 10px 18px;
          font-weight: 700;
          border-radius: 30px;
          text-decoration: none;
          margin-top: 1rem;
          transition: background 0.3s ease;
          user-select: none;
        }
        .download-resume:hover {
          background: #d19e2f;
        }
        @media (max-width: 600px) {
          .skills-list, .certifications-list, .languages-list {
            justify-content: center;
          }
          .contact-info {
            gap: 15px;
            flex-direction: column;
          }
          nav a {
            margin: 0 8px;
            font-size: 1rem;
          }
        }
      `}</style>

      <button
        aria-label="Toggle dark/light theme"
        className="theme-toggle"
        onClick={toggleDarkMode}
        title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      <div className="container" id="top">
        <header>
          <img
            src="https://avatars.githubusercontent.com/Voltstrike"
            alt="Mikail Crito Husada"
            className="profile-photo"
          />
          <h1>Mikail Crito Husada</h1>
          <p className="title">Data Professional & Application Developer</p>
          <div className="contact-info">
            <a className="contact-item" href="mailto:mikailhusada@gmail.com" title="Email">
              <FaEnvelope /> mikailhusada@gmail.com
            </a>
            <a className="contact-item" href="tel:+6285180002490" title="Phone">
              <FaPhone /> +62 851 8000 2490
            </a>
            <a className="contact-item" href="https://www.linkedin.com/in/mikail-crito-husada" target="_blank" rel="noreferrer" title="LinkedIn">
              <FaLinkedin /> LinkedIn
            </a>
            <a className="contact-item" href="https://github.com/Voltstrike" target="_blank" rel="noreferrer" title="GitHub">
              <FaGithub /> GitHub
            </a>
          </div>
          <a
            href="/CV_Mikail Crito Husada.pdf"
            download="CV_Mikail_Crito_Husada.pdf"
            className="download-resume"
            title="Download Resume"
          >
            <FaDownload /> Download Resume
          </a>
        </header>

        <nav>
          <a href="#about" onClick={(e) => scrollToSection('about', e)}>About</a>
          <a href="#experience" onClick={(e) => scrollToSection('experience', e)}>Experience</a>
          <a href="#education" onClick={(e) => scrollToSection('education', e)}>Education</a>
          <a href="#skills" onClick={(e) => scrollToSection('skills', e)}>Skills</a>
          <a href="#certifications" onClick={(e) => scrollToSection('certifications', e)}>Certifications</a>
          <a href="#languages" onClick={(e) => scrollToSection('languages', e)}>Languages</a>
        </nav>

        <section id="about">
          <h2>About Me</h2>
          <p>Data professional with 1.5 years in IT for securities applications and one year in research. Experienced in SQL, data validation, and database management to enhance data accuracy and efficiency. Proficient in data cleaning, reporting, and business insights to support decision-making.</p>
          <p>Published research in data modeling and sentiment analysis, contributing to digital transformation initiatives. Passionate about improving data quality and optimizing processes for supply chain digitization.</p>
        </section>

        <section id="experience">
          <h2>Professional Experience</h2>
          <div className="job">
            <h3>Database Back-End Application Developer</h3>
            <span>S21 Micro Piranti Computer, Jakarta, Indonesia — 2023 – Present</span>
            <ul>
              <li>Audited large datasets using SQL Server, ensuring 99% data accuracy.</li>
              <li>Developed automated reports, reducing issue resolution time by 30%.</li>
              <li>Collaborated with teams to resolve data quality issues, improving efficiency by 25%.</li>
              <li>Optimized workflows, reducing processing errors by 40%.</li>
              <li>Provided SQL training, enabling better client data management.</li>
            </ul>
          </div>
          <div className="job">
            <h3>Application Developer Intern</h3>
            <span>Binus University, Jakarta, Indonesia — 2022 – 2023</span>
            <ul>
              <li>Developed a 3D urban planning model using ArcGIS to support Jakarta’s digital transformation.</li>
              <li>Published a paper titled “Three-Dimensional (3D) Building Object Modelling in Monas and its Surroundings Area, Jakarta Indonesia” presented at Arab ICT Conference 2024 in Bahrain.</li>
              <li>The model is registered as intellectual property in Indonesia’s Directorate General of Intellectual Property with number 000422526.</li>
            </ul>
          </div>
        </section>

        <section id="education">
          <h2>Education</h2>
          <p><strong>Binus University, Jakarta, Indonesia — 2023</strong></p>
          <p>Bachelor of Computer Science</p>
          <p>Published a thesis titled <i>“Comparison of Naive Bayes and Decision Tree Algorithm to Perform Sentiment Analysis of Twitter Application Review on Google Play Store”</i> as a graduation requirement.</p>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <div className="skills-list">
            {[
              'SQL', 'Basic Python', 'Machine Learning', 'C#', 'HTML',
              'CSS', 'Basic Back-End', 'Data Visualization', 'Basic JavaScript',
              'Teamwork', 'Problem-Solving & Critical Thinking', 'Power-BI',
              'Analytical Mindset & Attention to Detail', 'Adaptability & Continuous Learning',
              'Communication & Stakeholder Collaboration'
            ].map(skill => (
              <span key={skill} className="skill-item">{skill}</span>
            ))}
          </div>
        </section>

        <section id="certifications">
          <h2>Certifications</h2>
          <div className="certifications-list">
            {[
              'Python for Beginner - Dicoding',
              'Machine Learning for Beginner - Dicoding',
              'Data Visualization - Dicoding',
              'Basic Javascript - Dicoding',
              'Back-End For Beginner - Dicoding'
            ].map(cert => (
              <span key={cert} className="cert-item">{cert}</span>
            ))}
          </div>
        </section>

        <section id="languages">
          <h2>Languages</h2>
          <div className="languages-list">
            {[
              'Indonesian - Native proficiency',
              'English - Professional proficiency',
              'Japanese - Basic proficiency'
            ].map(lang => (
              <span key={lang} className="lang-item">{lang}</span>
            ))}
          </div>
        </section>

        <footer>
          <p>© 2024 Mikail Crito Husada. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;

