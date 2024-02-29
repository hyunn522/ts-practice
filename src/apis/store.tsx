/* eslint-disable no-alert */
import { type StoreType, type CategoryType } from '../utils/interfaces';

export const getCategories = async <T = CategoryType[],>(): Promise<T> => {
  const res = await fetch('http://localhost:8080/categories');

  if (!res.ok) {
    throw new Error('Failed to fetch Categories');
  }

  const data = await res.json();

  return data as T;
};

export const getStores = async <T = StoreType[],>(id: number): Promise<T> => {
  const res = await fetch(`http://localhost:8080/stores?categoryId=${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch Stores');
  }

  const data = await res.json();

  return data as T;
};

export const getStore = async <T = StoreType,>(id: number): Promise<T> => {
  const res = await fetch(`http://localhost:8080/stores?id=${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch Store');
  }

  const data = await res.json();

  return data[0] as T;
};
