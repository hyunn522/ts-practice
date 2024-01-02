import TopBar from '../../components/Top/TopBar';
import styles from './Store.module.scss';

const Store = () => {
  return (
    <>
      <TopBar />
      <div className={styles.header} />
    </>
  );
};

export default Store;
