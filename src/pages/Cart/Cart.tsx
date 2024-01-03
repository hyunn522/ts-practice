import TopBar from '../../components/Top/TopBar';
import styles from './Cart.module.scss';

import { CartWarning } from '../../assets/img/index';
import CartItem from '../../components/CartItem/CartItem';
import Button from '../../components/Button/Button';

const Cart = () => {
  const cartMenus: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const isEnough = false;

  return (
    <>
      <TopBar>주문취소</TopBar>
      <div className={styles.line} />
      <div className={styles.cartHeader}>
        <div>가게이름</div>
        {isEnough ? (
          <div />
        ) : (
          <div>
            <span>최소금액 미달</span>
            <CartWarning />
          </div>
        )}
      </div>
      {cartMenus.map((menu) => {
        return <CartItem menu={menu} />;
      })}
      <div className={styles.cartAdd}>더 담기 +</div>
      <div className={styles.line} />
      <div className={styles.cartPrice}>
        <div>
          <span>주문금액</span>
          <span>원</span>
        </div>
        <div>
          <span>배달요금</span>
          <span>원</span>
        </div>
        <div>
          <span>총 결제금액</span>
          <span>원</span>
        </div>
      </div>
      {isEnough ? (
        <div className={styles.cartBottom}>
          <Button className={styles.cartBtn}>원 결제하기</Button>
        </div>
      ) : (
        <div className={styles.cartBottom}>
          <span>최소 주문금액 원</span>
          <Button className={`${styles.cartBtn} ${styles.fadeOut}`}>
            원 결제하기
          </Button>
        </div>
      )}
    </>
  );
};

export default Cart;
