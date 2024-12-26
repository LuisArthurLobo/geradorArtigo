import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const GenerativeText = ({ children, isGenerating }) => {
  return (
    <span className={`${styles.generativeText} ${isGenerating ? styles.generating : ''}`}>
      {children}
    </span>
  );
};

GenerativeText.propTypes = {
  children: PropTypes.node.isRequired,
  isGenerating: PropTypes.bool,
};

GenerativeText.defaultProps = {
  isGenerating: false,
};

export default GenerativeText;
