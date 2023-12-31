import styles from './Category.module.scss';

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

interface CategoryProps {
  key: number;
  store: string;
}

const Category = ({ key, store }: CategoryProps) => {
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
  const index = 0;
  const Icon = icons[index];

  return (
    <div className={styles.item}>
      <Icon />
      <p className={styles.name}>피자</p>
    </div>
  );
};

export default Category;
