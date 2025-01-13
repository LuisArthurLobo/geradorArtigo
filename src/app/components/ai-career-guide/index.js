import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';
import TypingAnimation from './TypingAnimation';
import renderMarkdown from './markdownRenderer';
import InputSection from './InputSection';
import DotsNavigation from './DotsNavigation';
import VersionInfo from './VersionInfo';

const AICareerGuide = () => {
  const [topic, setTopic] = useState('');
  const [messages, setMessages] = useState([]);
  const [currentProcessing, setCurrentProcessing] = useState(null);
  const [error, setError] = useState(null);
  const messagesContainerRef = useRef(null);

  const suggestions = [
    { text: "Desenvolvimento pessoal", color: "orange" },
    { text: "UI para mobile", color: "pink" },
    { text: "InVision", color: "blue" },
    { text: "Priorização", color: "red" },
    { text: "Testes A/B", color: "yellow" }
  ];

  const handleSuggestionClick = (suggestion) => {
    setTopic(suggestion);
    generateContent();
  };

  const generateContent = async () => {
    if (!topic.trim()) return;
    
    setError(null);
    setCurrentProcessing({
      question: topic,
      state: 'thinking'
    });
    
    try {
      const response = await fetch('/api/generate-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic: topic.trim() }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to generate content');
      }

      const data = await response.json();
      
      setCurrentProcessing(prev => ({
        ...prev,
        state: 'typing',
        answer: data.content
      }));

      setTopic('');
    } catch (err) {
      setError(err.message || 'Failed to generate content. Please try again.');
      setCurrentProcessing(null);
    }
  };

  const handleTypingComplete = () => {
    if (currentProcessing) {
      setMessages(prev => [...prev, {
        answer: currentProcessing.answer
      }]);
    }
    setCurrentProcessing(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Vou te ajudar a acelerar sua carreira</h1>
        </div>
        <div className={styles.subtitleContainer}>
          <p className={styles.subtitle}>Sendo na área de produtos digitais, conte comigo ツ</p>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.searchSection}>
          <InputSection
            topic={topic}
            setTopic={setTopic}
            onSubmit={generateContent}
            currentProcessing={currentProcessing}
            error={error}
          />

          <div className={styles.topicsContainer}>
            <span className={styles.topicsText}>As perguntas mais comuns agora são</span>
            <button
              className={styles.topicTag}
              data-color="orange"
              onClick={() => handleSuggestionClick("Desenvolvimento pessoal")}
            >
              <span>Desenvolvimento pessoal</span>
            </button>
            <button
              className={styles.topicTag}
              data-color="pink"
              onClick={() => handleSuggestionClick("UI para mobile")}
            >
              <span>UI para mobile</span>
            </button>
            <span className={styles.topicConnector}>e</span>
            <button
              className={styles.topicTag}
              data-color="blue"
              onClick={() => handleSuggestionClick("InVision")}
            >
              <span>InVision</span>
            </button>
          </div>
        </div>

        <div className={styles.messagesContainer} ref={messagesContainerRef}>
          {messages.map((message, index) => (
            <div key={index} className={styles.messageContainer}>
              <div className={`${styles.markdownContent} prose prose-xl dark:prose-invert max-w-none ai-text`}>
                {renderMarkdown(message.answer)}
              </div>
            </div>
          ))}
          
          {currentProcessing && (
            <div className={styles.messageContainer}>
              {currentProcessing.state === 'thinking' ? (
                <div className={styles.thinkingState}>
                  <div className={styles.thinkingDots}>
                    <span>Thinking</span>
                    <span className={styles.dot}>.</span>
                    <span className={styles.dot}>.</span>
                    <span className={styles.dot}>.</span>
                  </div>
                </div>
              ) : currentProcessing.state === 'typing' ? (
                <div className={`${styles.markdownContent} prose prose-xl dark:prose-invert max-w-none ai-text`}>
                  <TypingAnimation 
                    text={currentProcessing.answer}
                    onComplete={handleTypingComplete}
                  />
                </div>
              ) : null}
            </div>
          )}
        </div>
        <DotsNavigation messagesContainerRef={messagesContainerRef} />
        <div className={styles.versionInfo}>
          <VersionInfo />
        </div>
      </div>
    </div>
  );
};

export default AICareerGuide;
