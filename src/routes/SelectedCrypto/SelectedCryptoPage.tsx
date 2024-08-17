import React from 'react';
import { useAppSelector } from '../../state/hooks';
import { selectedCryptoSelector } from '../../state/selectors/CryptoSelector';
import styles from './SelectedCryptoPage.module.css';

const SelectedCryptoPage: React.FC = () => {
  const crypto = useAppSelector(selectedCryptoSelector);

  return (
    <div className={styles.wrapper}>
      {crypto ? (
        <>
          <h1 className={styles.pageTitle}>Selected cryptocurrency:</h1>
          <div className={styles.container}>
            <h2 className={styles.title}>{crypto.name}</h2>
            <p className={styles.item}>
              <strong>Rate:</strong> ${crypto.rate.toFixed(4)}
            </p>
            <p className={styles.item}>
              <strong>Ask:</strong> ${crypto.ask.toFixed(4)}
            </p>
            <p className={styles.item}>
              <strong>Bid:</strong> ${crypto.bid.toFixed(4)}
            </p>
            <p className={`${styles.item} ${styles.change}`}>
              <strong>24h Change:</strong> {crypto.diff24h.toFixed(4)}
            </p>
          </div>
        </>
      ) : (
        <div>Error, no crypto was selected!</div>
      )}
    </div>
  );
};

export default SelectedCryptoPage;
