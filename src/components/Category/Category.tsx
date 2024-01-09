/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { type ReactNode, useEffect, useState } from 'react';
import styles from './Category.module.scss';

interface CategoryType {
  id: number;
  name: string;
}

interface CategoryProps {
  category: CategoryType;
  icon: ReactNode;
  onClick: (id: number) => any;
}

const Category = ({ category, icon, onClick }: CategoryProps) => {
  return (
    <div className={styles.category} onClick={() => onClick(category.id)}>
      {icon}
      <p>{category.name}</p>
    </div>
  );
};

export default Category;
