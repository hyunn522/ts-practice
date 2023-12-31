import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
      <div className="heading1">오늘은 무엇을 먹을까요?</div>
      <div className="heading2">한남중앙로 40길 (한남 빌리지)(으)로 배달</div>
      <div className={styles.homeMenuContainer}>menus</div>
    </>
  );
};

export default Home;
