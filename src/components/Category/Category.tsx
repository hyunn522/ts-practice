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
  store: string;
}

const Category = ({ store }: CategoryProps) => {
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
    <div className={styles.category}>
      <Icon />
      <p>피자</p>
    </div>
  );
};

export default Category;
