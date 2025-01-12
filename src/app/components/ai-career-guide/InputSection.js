import React from 'react';
import styles from './styles.module.css';

const InputSection = ({ 
  topic, 
  setTopic, 
  onSubmit,
  currentProcessing,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (topic.trim() && !currentProcessing) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchContainer}>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="O que você gostaria de aprender?"
        className={styles.searchInput}
        disabled={currentProcessing}
      />
      <button 
        type="submit"
        className={styles.searchButton}
        disabled={!topic.trim() || currentProcessing}
      >
        {currentProcessing?.state === 'thinking' ? 'Pensando...' : 
         currentProcessing?.state === 'typing' ? 'Gerando...' : 
         'Perguntar'}
      </button>
    </form>
  );
};

export default InputSection;
