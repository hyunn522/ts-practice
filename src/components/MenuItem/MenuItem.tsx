import { type MenuType } from '../../utils/interfaces';
import Button from '../Button/Button';
import styles from './MenuItem.module.scss';

interface MenuProps {
  menu: MenuType;
  isLast: boolean;
}

const MenuItem = ({ menu, isLast }: MenuProps) => {
  // const isLast = menu === '9';

  return (
    <div className={` ${styles.menu} ${isLast ? styles.lastMargin : ''}`}>
      <div className={styles.menuInfo}>
        <image />
        <div className={styles.menuText}>
          {menu.isBest ? (
            <div>
              <span>{menu.name}</span>
              <span className={styles.best}>BEST</span>
            </div>
          ) : (
            <span>{menu.name}</span>
          )}
          <span className={styles.menuBody}>{menu.price}원</span>
          <span className={`${styles.menuBody} ${styles.maxLimit}`}>
            {menu.ingredients}
          </span>
        </div>
      </div>
      <Button className={styles.addBtn}>담기</Button>
    </div>
  );
};

export default MenuItem;
