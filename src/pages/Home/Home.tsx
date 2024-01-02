import Category from '../../components/Category/Category';
import OrderBar from '../../components/OrderBar/OrderBar';
import styles from './Home.module.scss';

const Home = () => {
  const categories: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return (
    <div className={styles.home}>
      <div className={styles.header}>오늘은 무엇을 먹을까요?</div>
      <div className={styles.subHeader}>
        한남중앙로 40길 (한남 빌리지)(으)로 배달
      </div>
      <div className={styles.categoryContainer}>
        {categories.map((category) => {
          return <Category store={category} />;
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Home;
