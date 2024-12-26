import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { loremSamples } from './loremData';

const LoremButton = ({ onGenerateText }) => {
  const generateRandomLorem = () => {
    const randomIndex = Math.floor(Math.random() * loremSamples.length);
    const selectedSample = loremSamples[randomIndex];
    // Pass the raw markdown text
    onGenerateText(selectedSample.text);
  };

  return (
    <button
      type="button"
      className={styles.loremButton}
      onClick={generateRandomLorem}
      aria-label="Generate Lorem Ipsum"
    >
      Generate Lorem Ipsum
    </button>
  );
};

LoremButton.propTypes = {
  onGenerateText: PropTypes.func.isRequired,
};

export default LoremButton;
