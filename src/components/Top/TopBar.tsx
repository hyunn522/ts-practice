import { TopBack } from '../../assets/img/index';
import styles from './TopBar.module.scss';

const TopBar = ({ children }: any) => {
  return (
    <div className={styles.topBar}>
      <TopBack className={styles.backBtn} />
      <span className={styles.cancelBtn}>{children}</span>
    </div>
  );
};

export default TopBar;
