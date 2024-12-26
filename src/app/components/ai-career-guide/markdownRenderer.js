import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styles from './styles.module.css';
import { heading, subheading, paragraph } from '../../styles/fonts';

const MarkdownComponents = {
  // Title styling with Fahkwang font
  h1: ({ children }) => {
    const text = React.Children.toArray(children)
      .map(child => typeof child === 'string' ? child.replace(/\s+/g, ' ').trim() : '')
      .filter(Boolean)
      .join(' ');
    
    const words = text.split(/(\s+)/).filter(Boolean);
    
    return (
      <h1 className={`${styles.markdownH1} ${heading.className}`}>
        {words.map((word, index) => (
          <span key={index} className={styles.markdownH1Word}>
            {word}
          </span>
        ))}
      </h1>
    );
  },

  // Handle special characters and dashes
  text: ({ children }) => {
    if (typeof children === 'string') {
      // Replace hyphens with em dashes
      const formattedText = children
        .replace(/--/g, '—')  // Replace double hyphen with em dash
        .replace(/(?<=[^\s])-(?=[^\s])/g, '–'); // Replace single hyphen between words with en dash
      
      return formattedText;
    }
    return children;
  },

  // Section headers with Kanit font
  h2: ({ children }) => (
    <h2 className={`${styles.markdownH2} ${subheading.className}`}>
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className={`${styles.markdownH3} ${subheading.className}`}>
      {children}
    </h3>
  ),

  // Paragraphs with Shippori Mincho B1 font
  p: ({ children, className }) => {
    if (className?.includes('lead')) {
      return (
        <p className={`${styles.markdownParagraphLead} ${paragraph.className}`}>
          {children}
        </p>
      );
    }
    // Use H3 style for AI-generated text
    if (className?.includes('ai-text')) {
      return (
        <p className={styles.markdownH3}>
          {children}
        </p>
      );
    }

    // Handle text with em dashes
    if (typeof children === 'string') {
      const parts = children.split(/(–[^–]+–)/g);
      return (
        <p className={`${styles.markdownParagraph} ${paragraph.className}`}>
          {parts.map((part, index) => {
            if (part.startsWith('–') && part.endsWith('–')) {
              return <em key={index} className={styles.markdownEmphasis}>{part.slice(1, -1)}</em>;
            }
            return part;
          })}
        </p>
      );
    }

    return (
      <p className={`${styles.markdownParagraph} ${paragraph.className}`}>
        {children}
      </p>
    );
  },

  // Lists with custom bullets
  ul: ({ children }) => (
    <ul className={styles.markdownList}>
      {children}
    </ul>
  ),

  // List items with square bullets
  li: ({ children }) => (
    <li className={styles.markdownListItem}>
      <span className={styles.markdownListBullet}></span>
      {children}
    </li>
  ),

  // Emphasis styles
  strong: ({ children }) => (
    <strong className={`${styles.markdownStrong} ${subheading.className}`}>
      {children}
    </strong>
  ),

  em: ({ children }) => (
    <em className={`${styles.markdownEmphasis} ${subheading.className}`}>
      {children}
    </em>
  ),

  // Code blocks with syntax highlighting
  code: ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={atomDark}
        language={match[1]}
        PreTag="div"
        className={styles.markdownCodeBlock}
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={styles.markdownCode} {...props}>
        {children}
      </code>
    );
  },

  // Links with external indicator
  a: ({ node, children, href, ...props }) => (
    <a 
      href={href}
      className={styles.markdownLink}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  ),

  // Blockquotes with distinctive styling
  blockquote: ({ children }) => (
    <blockquote className={styles.markdownBlockquote}>
      <div className={styles.markdownBlockquoteContent}>
        {children}
      </div>
    </blockquote>
  )
};

const renderMarkdown = (content) => {
  return (
    <ReactMarkdown
      components={MarkdownComponents}
      children={content}
      remarkPlugins={[]}
      rehypePlugins={[]}
    />
  );
};

export default renderMarkdown;