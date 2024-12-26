import React from 'react';
import styles from './styles.module.css';
import LoremButton from '../lorem-button';

const InputSection = ({ 
  topic, 
  setTopic, 
  generateContent, 
  currentProcessing,
  onLoremGenerate 
}) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Ask about your career..."
          className={styles.input}
          onKeyPress={(e) => e.key === 'Enter' && generateContent()}
        />
        <button 
          onClick={generateContent}
          className={styles.button}
          disabled={!topic.trim() || currentProcessing}
        >
          {currentProcessing?.state === 'thinking' ? 'Thinking...' : 
           currentProcessing?.state === 'typing' ? 'Generating...' : 
           'Ask'}
        </button>
      </div>
      <LoremButton onGenerateText={onLoremGenerate} />
    </div>
  );
};

export default InputSection;
