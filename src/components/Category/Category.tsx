import { useEffect, useState } from 'react';
import styles from './Category.module.scss';

interface CategoryType {
  id: number;
  name: string;
}

interface CategoryProps {
  category: CategoryType;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  // handleClick: () => any;
}

const Category = ({ category, icon: Icon }: CategoryProps) => {
  return (
    <div className={styles.category}>
      <Icon />
      <p>{category.name}</p>
    </div>
  );
};

export default Category;
