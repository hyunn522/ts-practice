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
}

const Category = ({ category }: CategoryProps) => {
  const [index, setIndex] = useState<number>(Number);

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
    setIndex(category.id - 1);
  });

  const Icon = icons[index];

  return (
    <div className={styles.category}>
      <Icon className={styles.icon} />
      <p>
        {category.name}
        {category.id - 1}
      </p>
    </div>
  );
};

export default Category;
