import Button from '../Button/Button';
import styles from './OrderBar.module.scss';

const OrderBar = () => {
  return (
    <div className={styles.barContainer}>
      <div className={styles.priceContainer}>
        <span className={styles.priceLabel}>총 주문금액</span>
        <span className={styles.price}>원</span>
      </div>
      <Button className={styles.barBtn}>주문하기</Button>
    </div>
  );
};

export default OrderBar;
