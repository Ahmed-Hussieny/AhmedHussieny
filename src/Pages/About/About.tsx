import { useState, useEffect } from 'react';
import NavComp from '../../Components/NavComp/NavComp';
import gitHubIcon from '../../assets/Icons/icons8-github.svg';
import LinkedInIcon from '../../assets/Icons/icons8-linkedin.svg';
import TwitterIcon from '../../assets/Icons/icons8-twitter.svg';
import InstgramIcon from '../../assets/Icons/icons8-instagram.svg';
import GmailIcon from '../../assets/Icons/icons8-gmail-logo.svg';
import './About.css';

const About = () => {
  const [activeSection, setActiveSection] = useState('ABOUT');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['About', 'Experience', 'PROJECTS'];
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom >= 0) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click and set active section
  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="text-start d-flex flex-column aboutCont justify-content-between">
      <div>
        <div className="pb-4">
          <h4 className="fw-bold m-0 " style={{ fontSize: '60px' }}>Ahmed Hussieny</h4>
          <h4 className="fw-bold my-3" style={{ fontSize: '25px' }}>Software Engineer</h4>
          <p className="w-50">I build accessible, pixel-perfect digital experiences for the web.</p>
        </div>
        <div className="my-5 d-none d-lg-block">
          <a href="#About" className="text-decoration-none" onClick={() => handleNavClick('About')}>
            <NavComp Text="ABOUT" isActive={activeSection === 'About'} />
          </a>
          <div className="my-4">
            <a href="#Experience" className="text-decoration-none" onClick={() => handleNavClick('Experience')}>
              <NavComp Text="EXPERIENCE" isActive={activeSection === 'Experience'} />
            </a>
          </div>
          <a href="#PROJECTS" className="text-decoration-none" onClick={() => handleNavClick('PROJECTS')}>
            <NavComp Text="PROJECTS" isActive={activeSection === 'PROJECTS'} />
          </a>
        </div>
      </div>
      <div className="mt-5 icons d-flex">
        <a href="https://github.com/Ahmed-Hussieny" rel="noopener" target="_blank">
          <img src={gitHubIcon} alt="gitHubIcon" />
        </a>
        <a href="https://www.linkedin.com/in/ahmed-hussieny-9941a2245" rel="noopener" target="_blank">
          <img className="mx-3" src={LinkedInIcon} alt="LinkedInIcon" />
        </a>
        <a href="https://x.com/ahmed0hussieny?s=21" rel="noopener" target="_blank">
          <img src={TwitterIcon} alt="TwitterIcon" />
        </a>
        <a href="https://www.instagram.com/ahmed__hussieny/" rel="noopener" target="_blank">
          <img className="mx-3" src={InstgramIcon} alt="InstgramIcon" />
        </a>
        <a href="mailto:ahmedhuseeny1@gmail.com" rel="noopener" target="_blank">
          <img src={GmailIcon} alt="GmailIcon" />
        </a>
      </div>
    </div>
  );
};

export default About;
