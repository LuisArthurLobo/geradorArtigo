import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import renderMarkdown from './markdownRenderer';
import LoremButton from '../lorem-button';
import FontLoader from './FontLoader';

const TypingAnimation = ({ text, onComplete, typingSpeed = { delay: 100 } }) => {
  const [displayedParagraphs, setDisplayedParagraphs] = useState([]);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isFading, setIsFading] = useState(false);

  // Animate paragraphs one by one
  const animateParagraphs = useCallback(async (paragraphs) => {
    setIsAnimating(true);
    
    for (let i = 0; i < paragraphs.length; i++) {
      await new Promise(resolve => setTimeout(resolve, typingSpeed.delay));
      setDisplayedParagraphs(prev => [...prev, paragraphs[i]]);
      setCurrentParagraphIndex(i);
    }

    setIsAnimating(false);
    
    // Start fade out transition
    setIsFading(true);
    
    // Wait for fade out, then complete
    setTimeout(() => {
      setIsComplete(true);
      // Wait a bit, then fade in markdown
      setTimeout(() => {
        setIsFading(false);
        onComplete?.();
      }, 300);
    }, 500);
  }, [typingSpeed.delay, onComplete]);

  // Handle text changes
  useEffect(() => {
    if (!text) return;

    // Reset state
    setDisplayedParagraphs([]);
    setCurrentParagraphIndex(0);
    setIsAnimating(false);
    setIsComplete(false);
    setIsFading(false);

    // Split text into paragraphs and start animation
    const paragraphs = text.split(/(?=#{1,3}\s|\n---|\n\n)/g).filter(p => p.trim());
    animateParagraphs(paragraphs);
  }, [text, animateParagraphs]);

  const handleLoremGenerate = useCallback((loremText) => {
    if (!isAnimating && !isFading) {
      setDisplayedParagraphs([]);
      setCurrentParagraphIndex(0);
      setIsComplete(false);
      setIsFading(false);
      onComplete?.(loremText);
    }
  }, [isAnimating, isFading, onComplete]);

  return (
    <>
      <FontLoader />
      <div className={styles.typingContainer}>
        {displayedParagraphs.map((paragraph, index) => (
          <div 
            key={index} 
            className={styles.paragraphWrapper}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div 
              className={`
                ${styles.paragraph} 
                ${isComplete ? styles.completedText : styles.animatingText}
                ${isFading ? styles.fadeOut : styles.fadeIn}
              `}
            >
              {isComplete ? renderMarkdown(paragraph) : paragraph}
            </div>
          </div>
        ))}
        <div className={styles.buttonContainer}>
          <LoremButton onGenerateText={handleLoremGenerate} />
        </div>
      </div>
    </>
  );
};

TypingAnimation.propTypes = {
  text: PropTypes.string.isRequired,
  onComplete: PropTypes.func,
  typingSpeed: PropTypes.shape({
    delay: PropTypes.number
  })
};

export default TypingAnimation;
