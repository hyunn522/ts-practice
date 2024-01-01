import styles from './Stores.module.scss';

import OrderBar from '../../components/OrderBar/OrderBar';
import TopBar from '../../components/Top/TopBar';
import StoreItem from '../../components/StoreItem/StoreItem';

const Stores = () => {
  const stores: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return (
    <>
      <TopBar />
      <div className={styles.header}>카테고리명</div>
      {stores.map((store) => {
        return <StoreItem store={store} />;
      })}
      <OrderBar />
    </>
  );
};

export default Stores;
