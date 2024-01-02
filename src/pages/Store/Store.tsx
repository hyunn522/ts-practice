import MenuItem from '../../components/MenuItem/MenuItem';
import OrderBar from '../../components/OrderBar/OrderBar';
import TopBar from '../../components/Top/TopBar';
import styles from './Store.module.scss';

const Store = () => {
  const menus: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return (
    <>
      <TopBar />
      <div className={styles.storeHeader}>
        <div className={styles.header}>가게명</div>
        <div className={styles.review}>
          <span>⭐ 별점</span>
          <span>리뷰 리뷰갯수</span>
        </div>
      </div>
      <div className={styles.storeSubHeader}>
        <div>
          <span>결제방법</span>
          <span>토스결제만 현장결제 안됨</span>
        </div>
        <div>
          <span>최소주문</span>
          <span>원</span>
        </div>
        <div>
          <span>배달시간</span>
          <span>약 -분</span>
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.category}>카테고리</div>
      {menus.map((menu) => {
        return <MenuItem menu={menu} />;
      })}
      <OrderBar />
    </>
  );
};

export default Store;
