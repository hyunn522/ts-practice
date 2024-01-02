import Button from '../Button/Button';
import styles from './MenuItem.module.scss';

interface MenuProps {
  menu: string;
}

const MenuItem = ({ menu }: MenuProps) => {
  const isLast = menu === '9';
  const isBest = true;

  return (
    <div className={` ${styles.menu} ${isLast ? styles.lastMargin : ''}`}>
      <div className={styles.menuInfo}>
        <image />
        <div className={styles.menuText}>
          {isBest ? (
            <div>
              <span>메뉴이름</span>
              <span className={styles.best}>BEST</span>
            </div>
          ) : (
            <span>메뉴이름</span>
          )}
          <span className={styles.menuBody}>가격</span>
          <span className={styles.menuBody}>재료</span>
        </div>
      </div>
      <Button className={styles.addBtn}>담기</Button>
    </div>
  );
};

export default MenuItem;
