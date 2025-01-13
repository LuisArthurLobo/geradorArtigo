import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const ThinkingAnimation = () => {
  const [thoughtIndex, setThoughtIndex] = useState(0);
  const thoughts = [
    "Refletindo sobre sua jornada profissional...",
    "Analisando diferentes perspectivas...",
    "Considerando as melhores oportunidades...",
    "Organizando ideias para ajudar você..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setThoughtIndex((prev) => (prev + 1) % thoughts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.thinkingContainer}>
      <div className={styles.thoughtBubble}>
        <div className={styles.thinkingHeader}>
          <div className={styles.brainIcon}>🧠</div>
          <div className={styles.heartIcon}>💭</div>
        </div>
        <div className={styles.thinkingText}>
          {thoughts[thoughtIndex]}
        </div>
        <div className={styles.thinkingAnimation}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.empathyMessage}>
          Estou aqui para ajudar você a encontrar seu melhor caminho
        </div>
      </div>
    </div>
  );
};

export default ThinkingAnimation;
