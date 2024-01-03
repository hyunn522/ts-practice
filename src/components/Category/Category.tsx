import { useEffect, useState } from 'react';
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

interface CategoryType {
  id: number;
  name: string;
}

interface CategoryProps {
  category: CategoryType;
  // handleClick: () => any;
}

const Category = ({ category }: CategoryProps) => {
  const [index, setIndex] = useState<number>(category.id - 1);

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
  const Icon = icons[index];

  useEffect(() => {
    setIndex(category.id - 1);
  }, [category.id]);

  return (
    <div className={styles.category}>
      <Icon />
      <p>
        {category.name}
        {category.id - 1}
      </p>
    </div>
  );
};

export default Category;
