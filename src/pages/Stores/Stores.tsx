/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
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
  const [stores, setStores] = useState<StoreType[] | undefined>(undefined);

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
      {stores
        ? stores
            .sort((a, b) => a.ranking - b.ranking)
            .map((store) => {
              return <StoreItem store={store} />;
            })
        : ''}
      <OrderBar />
    </>
  );
};

export default Stores;
