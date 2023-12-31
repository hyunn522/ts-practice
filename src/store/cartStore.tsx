import { create, createStore } from 'zustand';

interface cartStore {
  cartStore: string;
  cartMenus: [];
  cartSum: number;
}

// const initialCart = [
//     store: '없음',
//     menus: [],
//     sum: 0,
// ]
