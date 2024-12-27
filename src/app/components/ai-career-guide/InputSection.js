import React from 'react';
import styles from './styles.module.css';


const InputSection = ({ 
  topic, 
  setTopic, 
  generateContent, 
  currentProcessing,
}) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="O que você gostaria de aprender?"
          className={styles.input}
          onKeyPress={(e) => e.key === 'Enter' && generateContent()}
        />
        <button 
          onClick={generateContent}
          className={styles.button}
          disabled={!topic.trim() || currentProcessing}
        >
          {currentProcessing?.state === 'thinking' ? 'Pensando...' : 
           currentProcessing?.state === 'typing' ? 'Gerando...' : 
           'Perguntar'}
        </button>
      </div>
   
    </div>
  );
};

export default InputSection;
