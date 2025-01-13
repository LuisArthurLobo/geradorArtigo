import React from 'react';
import styles from './styles.module.css';

const InputSection = ({ 
  topic, 
  setTopic, 
  onSubmit,
  currentProcessing,
  error
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedTopic = topic.trim();
    
    if (trimmedTopic && !currentProcessing) {
      try {
        await onSubmit();
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  const isSubmitDisabled = !topic.trim() || currentProcessing;
  const buttonText = currentProcessing?.state === 'thinking' 
    ? 'Pensando...' 
    : currentProcessing?.state === 'typing' 
      ? 'Gerando...' 
      : 'Perguntar';

  return (
    <form onSubmit={handleSubmit} className={styles.searchContainer}>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="O que você gostaria de aprender?"
        className={`${styles.searchInput} ${error ? styles.inputError : ''}`}
        disabled={currentProcessing}
        aria-label="Tópico de pesquisa"
      />
      <button 
        type="submit"
        className={`${styles.searchButton} ${isSubmitDisabled ? styles.buttonDisabled : ''}`}
        disabled={isSubmitDisabled}
        aria-label={buttonText}
      >
        {buttonText}
      </button>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </form>
  );
};

export default InputSection;
