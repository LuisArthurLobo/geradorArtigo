import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const DotsNavigation = ({ messagesContainerRef, contentReady }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (messagesContainerRef.current && contentReady) {
      // Wait a bit for the content to be fully rendered
      setTimeout(() => {
        // Find all markdown headings
        const h2Elements = messagesContainerRef.current.querySelectorAll(`.${styles.markdownH2}`);
        const h3Elements = messagesContainerRef.current.querySelectorAll(`.${styles.markdownH3}`);
        
        console.log('Found headings after content ready:', {
          h2Count: h2Elements.length,
          h3Count: h3Elements.length
        });
        
        // Create section objects with type and reference
        const allSections = [];
        
        h2Elements.forEach(h2 => {
          console.log('Processing H2:', h2.textContent);
          allSections.push({
            type: 'h2',
            element: h2,
            title: h2.textContent.trim()
          });
          
          // Find all H3s that come after this H2 and before the next H2
          let nextElement = h2.nextElementSibling;
          while (nextElement && !nextElement.classList.contains(styles.markdownH2)) {
            if (nextElement.classList.contains(styles.markdownH3)) {
              console.log('Found H3:', nextElement.textContent);
              allSections.push({
                type: 'h3',
                element: nextElement,
                title: nextElement.textContent.trim()
              });
            }
            nextElement = nextElement.nextElementSibling;
          }
        });
        
        console.log('Final sections:', allSections);
        setSections(allSections);

        const handleScroll = () => {
          const container = messagesContainerRef.current;
          const scrollPosition = container.scrollTop + container.clientHeight / 3;

          for (let i = allSections.length - 1; i >= 0; i--) {
            const section = allSections[i];
            const elementTop = section.element.offsetTop;

            if (scrollPosition >= elementTop) {
              setActiveSection(i);
              break;
            }
          }
        };

        messagesContainerRef.current.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
          if (messagesContainerRef.current) {
            messagesContainerRef.current.removeEventListener('scroll', handleScroll);
          }
        };
      }, 500); // Wait 500ms for content to be fully rendered
    }
  }, [messagesContainerRef, contentReady]);

  const scrollToSection = (index) => {
    if (sections[index]) {
      const container = messagesContainerRef.current;
      const targetElement = sections[index].element;
      container.scrollTo({
        top: targetElement.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  };

  if (sections.length === 0) return null;

  return (
    <div className={styles.dotsNavigation}>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`${styles.dot} ${section.type === 'h3' ? styles.h3 : ''} ${
            activeSection === index ? styles.active : ''
          }`}
          onClick={() => scrollToSection(index)}
          title={section.title}
        />
      ))}
    </div>
  );
};

export default DotsNavigation;
