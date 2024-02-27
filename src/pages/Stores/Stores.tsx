/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import styles from './Stores.module.scss';

import OrderBar from '../../components/OrderBar/OrderBar';
import TopBar from '../../components/Top/TopBar';
import StoreItem from '../../components/StoreItem/StoreItem';
import { getStores } from '../../apis/store';
import { type StoreType } from '../../utils/interfaces';

const Stores = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const numberIdParam = categoryId ? parseInt(categoryId, 10) : -1;
  const [stores, setStores] = useState<StoreType[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ['STORES', numberIdParam],
    queryFn: async () => getStores(numberIdParam),
  });

  const handleBack = () => {
    navigate('/');
  };

  useEffect(() => {
    if (data) {
      setStores(data);
    } else {
      console.log('가게들을 찾을 수 없어요');
    }
  }, [data]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <TopBar onClick={handleBack} />
      <div className={styles.header}>카테고리명</div>
      {stores ? (
        stores
          .sort((a, b) => a.ranking - b.ranking)
          .map((store, index) => {
            const isLast = index === stores.length - 1;
            return <StoreItem key={store.id} store={store} isLast={isLast} />;
          })
      ) : (
        <div>데이터를 불러오는 중...</div>
      )}
      <OrderBar />
    </>
  );
};

export default Stores;
