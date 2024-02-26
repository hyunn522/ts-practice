/* eslint-disable no-alert */
import axios from 'axios';
import { type StoreType, type CategoryType } from '../utils/interfaces';

export const getCategories = async <T = CategoryType[],>(): Promise<T> => {
  try {
    const res = await axios.get<T>('http://localhost:8080/categories');
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('error code : ', err.message);
    }
    alert('카테고리 패칭 실패');
    return [] as T; // error 발생 시 빈 배열 반환
  }
};

export const getStores = async <T = StoreType[],>(): Promise<T> => {
  try {
    const res = await axios.get<T>(
      'http://localhost:8080/categories?id=2&resource=stores',
    );
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('error code : ', err.message);
    }
    alert();
    return [] as T;
  }
};

// export const getStore;
