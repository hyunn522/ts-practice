import React from 'react';

interface CategoryProps {
  key: number;
  store: string;
}

const Category = ({ key, store }: CategoryProps) => {
  return <div>{store}</div>;
};

export default Category;
