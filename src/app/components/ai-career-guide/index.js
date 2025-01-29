import React, { useState, useRef, useEffect } from 'react';
import Script from 'next/script';
import styles from './styles.module.css';
import TypingAnimation from './TypingAnimation';
import renderMarkdown from './markdownRenderer';
import InputSection from './InputSection';
import DotsNavigation from './DotsNavigation';
import VersionInfo from './VersionInfo';
import ThinkingAnimation from './ThinkingAnimation';

const AICareerGuide = () => {
  const [topic, setTopic] = useState('');
  const [messages, setMessages] = useState([]);
  const [currentProcessing, setCurrentProcessing] = useState(null);
  const [error, setError] = useState(null);
  const [contentReady, setContentReady] = useState(false);
  const [suggestions, setSuggestions] = useState([
    { text: "Desenvolvimento pessoal", color: "orange" },
    { text: "UI para mobile", color: "pink" },
    { text: "InVision", color: "blue" }
  ]);
  const messagesContainerRef = useRef(null);

  const logEvent = (eventName, eventProperties = {}) => {
    if (typeof window !== 'undefined' && window.amplitude) {
      window.amplitude.track(eventName, eventProperties);
    }
  };

  const allSuggestions = [
    { text: "Desenvolvimento pessoal", color: "orange" },
    { text: "UI para mobile", color: "pink" },
    { text: "InVision", color: "blue" },
    { text: "Priorização", color: "orange" },
    { text: "Testes A/B", color: "pink" },
    { text: "Design System", color: "blue" },
    { text: "Gestão de produto", color: "orange" },
    { text: "UX Research", color: "pink" },
    { text: "Metodologias ágeis", color: "blue" }
  ];

  useEffect(() => {
    // Shuffle and pick 3 random suggestions
    const shuffled = [...allSuggestions].sort(() => Math.random() - 0.5);
    setSuggestions([
      { ...shuffled[0], color: "orange" },
      { ...shuffled[1], color: "pink" },
      { ...shuffled[2], color: "blue" }
    ]);

    // Log page view
    logEvent('page_view', { page: 'ai_career_guide' });
  }, []); // Empty dependency array means this runs once on mount

  const handleSuggestionClick = (suggestion) => {
    logEvent('suggestion_clicked', { suggestion });
    setTopic(suggestion);
    generateContent();
  };

  const generateContent = async () => {
    if (!topic.trim()) return;
    
    logEvent('generate_content_started', { topic: topic.trim() });
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

      logEvent('generate_content_success', { topic: topic.trim() });
      setTopic('');
    } catch (err) {
      logEvent('generate_content_error', { 
        topic: topic.trim(),
        error: err.message 
      });
      setError(err.message || 'Failed to generate content. Please try again.');
      setCurrentProcessing(null);
    }
  };

  const handleTypingComplete = () => {
    if (currentProcessing) {
      logEvent('typing_animation_complete');
      setMessages(prev => [...prev, {
        answer: currentProcessing.answer
      }]);
      setContentReady(true);
    }
    setCurrentProcessing(null);
  };

  return (
    <div className={styles.container}>
      <script src="https://cdn.amplitude.com/script/501af040b85c78a72f7df04158ed9273.js" />
      <script dangerouslySetInnerHTML={{
        __html: `
          window.amplitude.add(window.sessionReplay.plugin({sampleRate: 1}));
          window.amplitude.init('501af040b85c78a72f7df04158ed9273', {"fetchRemoteConfig":true,"autocapture":true});
        `
      }} />
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
              onClick={() => handleSuggestionClick(suggestions[0].text)}
            >
              <span>{suggestions[0].text}</span>
            </button>
            <button
              className={styles.topicTag}
              data-color="pink"
              onClick={() => handleSuggestionClick(suggestions[1].text)}
            >
              <span>{suggestions[1].text}</span>
            </button>
            <span className={styles.topicConnector}>e</span>
            <button
              className={styles.topicTag}
              data-color="blue"
              onClick={() => handleSuggestionClick(suggestions[2].text)}
            >
              <span>{suggestions[2].text}</span>
            </button>
          </div>
        </div>

        <div className={styles.messagesContainer} ref={messagesContainerRef}>
          {messages.map((message, index) => (
            <div key={index} className={styles.messageContainer}>
              <div className="prose prose-xl dark:prose-invert max-w-none ai-text" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word' }}>
                {renderMarkdown(message.answer)}
              </div>
            </div>
          ))}
          
          {currentProcessing && (
            <div className={styles.messageContainer}>
              {currentProcessing.state === 'thinking' ? (
                <ThinkingAnimation />
              ) : currentProcessing.state === 'typing' ? (
                <div className="prose prose-xl dark:prose-invert max-w-none ai-text" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word' }}>
                  <TypingAnimation 
                    text={currentProcessing.answer}
                    onComplete={handleTypingComplete}
                  />
                </div>
              ) : null}
            </div>
          )}
        </div>
        <DotsNavigation messagesContainerRef={messagesContainerRef} contentReady={contentReady} />
        <div className={styles.versionInfo}>
          <VersionInfo />
        </div>
      </div>
    </div>
  );
};

export default AICareerGuide;
