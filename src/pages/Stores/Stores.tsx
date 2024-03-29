/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
  const categoryIdParam = categoryId ? parseInt(categoryId, 10) : -1;

  const location = useLocation();
  const { categoryName } = location.state;

  const [stores, setStores] = useState<StoreType[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ['STORES', categoryIdParam],
    queryFn: async () => getStores(categoryIdParam),
  });

  const handleBack = () => {
    navigate(-1);
  };

  const handleStore = (id: number) => {
    navigate(`/store/${id}`);
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
      <div className={styles.header}>{categoryName}</div>
      {stores ? (
        stores
          .sort((a, b) => a.ranking - b.ranking)
          .map((store, index) => {
            const storeId = store.id;
            const isLast = index === stores.length - 1;
            return (
              <StoreItem
                key={storeId}
                store={store}
                isLast={isLast}
                onClick={handleStore}
              />
            );
          })
      ) : (
        <div>데이터를 불러오는 중...</div>
      )}
      <OrderBar />
    </>
  );
};

export default Stores;
