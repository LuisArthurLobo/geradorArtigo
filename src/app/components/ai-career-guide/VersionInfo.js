import React from 'react';
import styles from './styles.module.css';

const versionHistory = [
  {
    version: "1.0.0",
    date: "2023-12-23",
    changes: [
      "Initial release of AI Career Guide",
      "Added interactive career suggestion bubbles",
      "Implemented real-time AI responses",
      "Added markdown support for responses"
    ]
  },
  {
    version: "1.1.0",
    changes: [
      "Basicamente, tudo mudou :-)",
      "Improved UI responsiveness",
      "Fixed hydration issues with server-side rendering"
    ]
  }
];

const VersionInfo = () => {
  const latestVersion = versionHistory[versionHistory.length - 1];

  return (
    <div className={styles.versionInfo}>
      <div className={styles.versionHeader}>
        <span className={styles.versionText}>
          v{latestVersion.version}  ⚘  {latestVersion.changes[0]}
        </span>
      </div>
    </div>
  );
};

export default VersionInfo;
