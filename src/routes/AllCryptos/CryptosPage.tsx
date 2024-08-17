import { useNavigate } from 'react-router-dom';
import { useFetchCryptos } from '../../api/actions/useFetchCryptos';
import { FlattenedCrypto } from '../../api/types/CryptoApi';
import { useAppDispatch } from '../../state/hooks';
import { actions } from '../../state/actions';
import { useSearchCryptos } from '../../api/actions/useSearchCryptos';
import Table from '../../components/Table';
import styles from './CryptosPage.module.css';

const CryptosPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { cryptoRates, loading, error } = useFetchCryptos({
    cryptoName: 'usd'
  });
  const { searchTerm, filteredCryptos, handleSearchChange } = useSearchCryptos({
    cryptos: cryptoRates,
  });

  const handleRowClick = (row: { [key: string]: any }) => {
    const selectedCrypto = row as FlattenedCrypto;
    dispatch(actions.crypto.setSelectedCrypto(selectedCrypto));
    navigate(`/${selectedCrypto.name}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.wrapper}>
      <h1>Cryptocurrency Rates (USD)</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
          onChange={handleSearchChange}
          value={searchTerm}
        />
      </div>
      <div className={styles.table}>
        <Table data={filteredCryptos} handleRowClick={handleRowClick} />
      </div>
    </div>
  );
};

export default CryptosPage;
