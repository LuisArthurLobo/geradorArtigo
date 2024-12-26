import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const DotsNavigation = ({ messagesContainerRef }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      // Find all H2 and H3 elements
      const h2Elements = messagesContainerRef.current.querySelectorAll(`.${styles.markdownH2}`);
      const h3Elements = messagesContainerRef.current.querySelectorAll(`.${styles.markdownH3}`);
      
      // Create section objects with type and reference
      const allSections = [];
      
      h2Elements.forEach(h2 => {
        allSections.push({
          type: 'h2',
          element: h2,
          title: h2.textContent.trim()
        });
        
        // Find all H3s that come after this H2 and before the next H2
        let nextH2 = h2.nextElementSibling;
        while (nextH2 && !nextH2.classList.contains(styles.markdownH2)) {
          if (nextH2.classList.contains(styles.markdownH3)) {
            allSections.push({
              type: 'h3',
              element: nextH2,
              title: nextH2.textContent.trim()
            });
          }
          nextH2 = nextH2.nextElementSibling;
        }
      });
      
      setSections(allSections);

      const handleScroll = () => {
        const container = messagesContainerRef.current;
        const scrollPosition = container.scrollTop + container.clientHeight / 3;

        for (let i = 0; i < allSections.length; i++) {
          const section = allSections[i];
          const elementTop = section.element.offsetTop;
          const elementBottom = elementTop + section.element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
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
    }
  }, [messagesContainerRef]);

  const scrollToSection = (index) => {
    if (sections[index]) {
      const container = messagesContainerRef.current;
      const targetElement = sections[index].element;
      const startPosition = container.scrollTop;
      const targetPosition = targetElement.offsetTop - 20;
      const distance = targetPosition - startPosition;
      const duration = 500;
      let start = null;

      const animation = (currentTime) => {
        if (!start) start = currentTime;
        const progress = currentTime - start;
        const easeProgress = easeInOutCubic(Math.min(progress / duration, 1));
        
        container.scrollTop = startPosition + (distance * easeProgress);

        if (progress < duration) {
          window.requestAnimationFrame(animation);
        } else {
          setActiveSection(index);
        }
      };

      window.requestAnimationFrame(animation);
    }
  };

  const easeInOutCubic = (t) => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  if (!sections.length) return null;

  return (
    <nav className={styles.dotsNavigation} aria-label="Section navigation">
      {sections.map((section, index) => (
        <button
          key={index}
          className={`${styles.dotItem} ${section.type === 'h3' ? styles.subSection : ''} ${index === activeSection ? styles.dotActive : ''}`}
          onClick={() => scrollToSection(index)}
          aria-label={`Go to ${section.title}`}
          aria-current={index === activeSection ? 'true' : 'false'}
        >
          <span className={styles.dot} />
          <span className={styles.dotLabel}>{section.title}</span>
        </button>
      ))}
    </nav>
  );
};

export default DotsNavigation;
