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
    // Originais
    { text: "Transição de carreira", color: "orange" },
    { text: "Melhorar currículo", color: "pink" },
    { text: "Entrevistas", color: "blue" },
    { text: "Negociar salário", color: "red" },
    { text: "Equilíbrio vida/trabalho", color: "yellow" },

    // UX/UI
    { text: "Design systems", color: "orange" },
    { text: "Prototipação", color: "pink" },
    { text: "Pesquisa UX", color: "blue" },
    { text: "UI para mobile", color: "red" },
    { text: "Acessibilidade", color: "yellow" },
    { text: "Usabilidade", color: "orange" },
    { text: "Arquitetura da Informação", color: "pink" },
    { text: "Design de Interação", color: "blue" },
    { text: "Wireframes", color: "red" },
    { text: "Testes A/B", color: "yellow" },


    // Produtos
    { text: "Discovery", color: "orange" },
    { text: "Métricas", color: "pink" },
    { text: "Roadmap", color: "blue" },
    { text: "MVP", color: "red" },
    { text: "OKRs", color: "yellow" },
    { text: "Priorização", color: "orange" },
    { text: "Análise de dados", color: "pink" },
    { text: "Growth Hacking", color: "blue" },
    { text: "Product backlog", color: "red" },
    { text: "Visão de produto", color: "yellow" },

    // Ferramentas
    { text: "Figma", color: "orange" },
    { text: "Miro", color: "pink" },
    { text: "Maze", color: "blue" },
    { text: "UserTesting", color: "red" },
    { text: "Optimal Workshop", color: "yellow" },
    { text: "Sketch", color: "pink" },
    { text: "InVision", color: "blue" },
    { text: "Axure", color: "red" },
    { text: "Framer", color: "yellow" },


    // Carreira
    { text: "Portfólio", color: "orange" },
    { text: "Freelancer", color: "pink" },
    { text: "Mentoria", color: "blue" },
    { text: "Certificações", color: "red" },
    { text: "Networking", color: "yellow" },
    { text: "Estágios", color: "orange" },
    { text: "Trabalho remoto", color: "pink" },
    { text: "Comunidades online", color: "blue" },
    { text: "Eventos", color: "red" },
    { text: "Desenvolvimento pessoal", color: "yellow" }
];

  // Initialize with default values to avoid hydration mismatch
  const [randomSuggestions, setRandomSuggestions] = useState([
    suggestions[0].text,
    suggestions[1].text,
    suggestions[2].text,
    suggestions[3].text,
    suggestions[4].text
  ]);

  // Randomize suggestions after initial render on client side
  useEffect(() => {
    const randomized = Array(5).fill(null).map(() => {
      const randomIndex = Math.floor(Math.random() * suggestions.length);
      return suggestions[randomIndex].text;
    });
    setRandomSuggestions(randomized);
  }, []);

  const handleSuggestionClick = (suggestion) => {
    setTopic(suggestion);
    generateContent();
  };

  const generateContent = async () => {
    if (!topic.trim()) return;
    
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
        body: JSON.stringify({ topic }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate content');
      }

      const data = await response.json();
      
      setCurrentProcessing(prev => ({
        ...prev,
        state: 'typing',
        answer: data.content
      }));

      setTopic('');
    } catch (err) {
      setError('Failed to generate content. Please try again.');
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

  const handleLoremGenerate = () => {
    // Lorem generate logic here
  };

  return (
    <div className={styles.container}>
      {messages.length === 0 && !currentProcessing && (
        <>
          <div className={styles.suggestionsContainer}>
            <h2 className={styles.suggestionsTitle}>Vou te ajudar a acelerar sua carreira</h2>
            <h3 className={styles.markdownH3}>Sendo na área de produtos digitais, conte comigo 		ツ.</h3>
            <p className={styles.suggestionsText}>
              <br/> As perguntas mais comuns agora são 
              <span className={`${styles.bubble} ${styles.orange}`} onClick={() => handleSuggestionClick(randomSuggestions[0])}>
                {randomSuggestions[0]}
              </span>
              <span className={`${styles.bubble} ${styles.pink}`} onClick={() => handleSuggestionClick(randomSuggestions[1])}>
                {randomSuggestions[1]}
              </span>
              <span className={`${styles.bubble} ${styles.blue}`} onClick={() => handleSuggestionClick(randomSuggestions[2])}>
                {randomSuggestions[2]}
              </span>
              <span className={`${styles.bubble} ${styles.red}`} onClick={() => handleSuggestionClick(randomSuggestions[3])}>
                {randomSuggestions[3]}
              </span>
              e
              <span className={`${styles.bubble} ${styles.yellow}`} onClick={() => handleSuggestionClick(randomSuggestions[4])}>
                {randomSuggestions[4]}
              </span>
              
            </p>
          </div>
        
        </>
      )}
      
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
      <InputSection
        topic={topic}
        setTopic={setTopic}
        generateContent={generateContent}
        currentProcessing={currentProcessing}
        onLoremGenerate={handleLoremGenerate}
      />
      <VersionInfo />
    </div>
  );
};

export default AICareerGuide;
