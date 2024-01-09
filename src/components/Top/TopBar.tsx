import { TopBack } from '../../assets/img/index';
import styles from './TopBar.module.scss';

const TopBar = ({ children, onClick }: any) => {
  return (
    <div className={styles.topBar}>
      <TopBack className={styles.backBtn} onClick={onClick} />
      <span className={styles.cancelBtn}>{children}</span>
    </div>
  );
};

export default TopBar;
