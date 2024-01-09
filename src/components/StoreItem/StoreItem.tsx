import { type StoreType } from '../../utils/interfaces';
import styles from './StoreItem.module.scss';

interface IStore {
  store: StoreType;
}
const StoreItem = ({ store }: IStore) => {
  // const isLast = store === '9';
  const isLast = false;

  return (
    <div className={`${styles.store} ${isLast ? styles.lastMargin : ''}`}>
      <image />
      <div>
        <span className={styles.heading}>위</span>
        <span className={styles.heading} style={{ marginTop: '2px' }}>
          가게이름
        </span>
        <span className={styles.body}>⭐ 별점 (리뷰갯수)</span>
        <span className={styles.body}>분~분 • 배달비 원</span>
      </div>
    </div>
  );
};

export default StoreItem;
