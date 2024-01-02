import TopBar from '../../components/Top/TopBar';
import styles from './Cart.module.scss';

const Cart = () => {
  return (
    <>
      <TopBar>주문취소</TopBar>
      <div className={styles.line} />
    </>
  );
};

export default Cart;
