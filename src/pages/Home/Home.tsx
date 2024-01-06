import { useEffect, useState } from 'react';
import Category from '../../components/Category/Category';
import OrderBar from '../../components/OrderBar/OrderBar';
import styles from './Home.module.scss';
import { getCategories } from '../../apis/store';

import {
  HomePizza,
  HomeSalad,
  HomeBurger,
  HomeHansik,
  HomeBunsik,
  HomeChicken,
  HomeSushi,
  HomeSandwich,
  HomePasta,
  HomeDessert,
  HomeCoffee,
  HomeMore,
} from '../../assets/img/index';

interface CategoryType {
  id: number;
  name: string;
}

const Home = () => {
  const [categories, setCategories] = useState<CategoryType[] | undefined>(
    undefined,
  );

  const icons = [
    HomePizza,
    HomeSalad,
    HomeBurger,
    HomeHansik,
    HomeBunsik,
    HomeChicken,
    HomeSushi,
    HomeSandwich,
    HomePasta,
    HomeDessert,
    HomeCoffee,
    HomeMore,
  ];

  useEffect(() => {
    getCategories()
      .then((value: CategoryType[]) => {
        setCategories(value);
      })
      .catch((err) => {
        console.error('Error fetching data: ', err);
      });
  }, []);

  if (categories === undefined) {
    return <div>로딩 중...</div>;
  }

  if (categories === null) {
    return <div>카테고리를 찾을 수 없어요</div>;
  }

  return (
    <div className={styles.home}>
      <div className={styles.header}>오늘은 무엇을 먹을까요?</div>
      <div className={styles.subHeader}>
        한남중앙로 40길 (한남 빌리지)(으)로 배달
      </div>
      <div className={styles.categoryContainer}>
        {categories.map((category) => {
          return (
            <Category
              key={category.id}
              category={category}
              icon={icons[category.id - 1]}
            />
          );
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Home;
