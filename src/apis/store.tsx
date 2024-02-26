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

export const getStores = async <T = StoreType[],>(id: number): Promise<T> => {
  try {
    const res = await axios.get<T>(
      `http://localhost:8080/stores?categoryId=${id}`,
    );
    // 해당 카테고리의 가게들만 data로 return
    const filteredData = (res.data as StoreType[]).filter(
      (item: StoreType) => item.categoryId === id,
    );
    return filteredData as T;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('error code : ', err.message);
    }
    alert();
    return [] as T;
  }
};

// export const getStore;
