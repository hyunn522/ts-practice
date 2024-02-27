/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  type ReactNode,
  useEffect,
  useState,
  type JSXElementConstructor,
} from 'react';
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
  const icons = [
    <HomePizza key={0} />,
    <HomeSalad key={1} />,
    <HomeBurger key={2} />,
    <HomeHansik key={3} />,
    <HomeBunsik key={4} />,
    <HomeChicken key={5} />,
    <HomeSushi key={6} />,
    <HomeSandwich key={7} />,
    <HomePasta key={8} />,
    <HomeDessert key={9} />,
    <HomeCoffee key={10} />,
    <HomeMore key={11} />,
  ];

  const [categoryIcon, setCategoryIcon] = useState<ReactNode>();

  useEffect(() => {
    setCategoryIcon(icons[category.id - 1]);
  }, []);

  return (
    <div className={styles.category}>
      {categoryIcon}
      <p>{category.name}</p>
    </div>
  );
};

export default Category;
