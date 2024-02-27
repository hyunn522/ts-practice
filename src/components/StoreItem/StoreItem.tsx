import { type StoreType } from '../../utils/interfaces';
import styles from './StoreItem.module.scss';

interface IStore {
  store: StoreType;
  isLast: boolean;
}
const StoreItem = ({ store, isLast }: IStore) => {
  return (
    <div className={`${styles.store} ${isLast ? styles.lastMargin : ''}`}>
      <image />
      <div>
        <span className={styles.heading}>{store.ranking}위</span>
        <span className={styles.heading} style={{ marginTop: '2px' }}>
          {store.name}
        </span>
        <span className={styles.body}>
          ⭐ {store.rate} ({store.reviewCnt})
        </span>
        <span className={styles.body}>
          {store.minDeliveryTime}분~{store.maxDeliveryTime}분 • 배달비{' '}
          {store.deliveryFee}원
        </span>
      </div>
    </div>
  );
};

export default StoreItem;
