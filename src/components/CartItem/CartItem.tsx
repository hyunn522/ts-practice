import styles from './CartItem.module.scss';
import { CartMore } from '../../assets/img/index';

interface MenuProps {
  menu: string;
}

const CartItem = ({ menu }: MenuProps) => {
  const isLast = menu === '9';

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartMenuInfo}>
        <image />
        <div className={styles.cartMenuText}>
          <span className={styles.cartMenuName}>메뉴 이름</span>
          <span>선택옵션</span>
          <span>가격</span>
        </div>
      </div>
      <div className={styles.cartMenuCount}>
        <span>1개</span>
        <CartMore />
      </div>
    </div>
  );
};

export default CartItem;
