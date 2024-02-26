/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import styles from './Stores.module.scss';

import OrderBar from '../../components/OrderBar/OrderBar';
import TopBar from '../../components/Top/TopBar';
import StoreItem from '../../components/StoreItem/StoreItem';
import { getStores } from '../../apis/store';
import { type StoreType } from '../../utils/interfaces';

const Stores = () => {
  const navigate = useNavigate();
  const [stores, setStores] = useState<StoreType[] | undefined>(undefined);

  const { data, isLoading } = useQuery({
    queryKey: ['STORES'],
    queryFn: async () => getStores(),
  });
  const handleBack = () => {
    navigate('/');
  };

  useEffect(() => {
    getStores()
      .then((value: StoreType[]) => {
        setStores(value);
      })
      .catch((err) => {
        console.error('Error fetching data: ', err);
      });
  }, []);

  if (stores === undefined) {
    return <div>로딩 중...</div>;
  }

  if (stores === null) {
    return <div>가게를 찾을 수 없어요</div>;
  }

  return (
    <>
      <TopBar onClick={handleBack} />
      <div className={styles.header}>카테고리명</div>
      {stores.map((store) => {
        return <StoreItem store={store} />;
      })}
      <OrderBar />
    </>
  );
};

export default Stores;
