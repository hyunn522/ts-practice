import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import MenuItem from '../../components/MenuItem/MenuItem';
import OrderBar from '../../components/OrderBar/OrderBar';
import TopBar from '../../components/Top/TopBar';
import styles from './Store.module.scss';
import { getStore } from '../../apis/store';
import { type MenuType, type StoreType } from '../../utils/interfaces';

const Store = () => {
  const navigator = useNavigate();
  const { storeId } = useParams();
  const storeIdParam = storeId ? parseInt(storeId, 10) : -1;

  const [store, setStore] = useState<StoreType>();
  const [menus, setMenus] = useState<MenuType[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ['STORE', storeIdParam],
    queryFn: async () => getStore(storeIdParam),
  });

  const handleBack = () => {
    navigator(-1);
  };

  useEffect(() => {
    if (data) {
      setStore(data);
      setMenus(data.menus);
    }
  }, [data]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <TopBar onClick={handleBack} />
      <div className={styles.storeHeader}>
        <div className={styles.header}>{store?.name}</div>
        <div className={styles.review}>
          <span>⭐ {store?.rate}</span>
          <span>리뷰 {store?.reviewCnt}</span>
        </div>
      </div>
      <div className={styles.storeSubHeader}>
        <div>
          <span>결제방법</span>
          <span>토스결제만 현장결제 안됨</span>
        </div>
        <div>
          <span>최소주문</span>
          <span>{store?.minDeliveryPrice}원</span>
        </div>
        <div>
          <span>배달시간</span>
          <span>
            약 {store?.minDeliveryTime}-{store?.maxDeliveryTime}분
          </span>
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.category}>카테고리</div>
      {menus ? (
        menus.map((menu) => {
          const isLast = menu.id === menus.length;
          return <MenuItem menu={menu} isLast={isLast} />;
        })
      ) : (
        <div>데이터를 불러오는 중...</div>
      )}
      <OrderBar />
    </>
  );
};

export default Store;
