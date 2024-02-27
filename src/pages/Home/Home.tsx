import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import Category from '../../components/Category/Category';
import OrderBar from '../../components/OrderBar/OrderBar';
import styles from './Home.module.scss';
import { getCategories } from '../../apis/store';

import { type CategoryType } from '../../utils/interfaces';

const Home = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ['CATEGORIES'],
    queryFn: async () => getCategories(),
  });

  useEffect(() => {
    if (data) {
      setCategories(data);
    } else {
      console.log('카테고리를 찾을 수 없어요');
    }
  }, [data]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className={styles.home}>
      <div className={styles.header}>오늘은 무엇을 먹을까요?</div>
      <div className={styles.subHeader}>
        한남중앙로 40길 (한남 빌리지)(으)로 배달
      </div>
      <div className={styles.categoryContainer}>
        {categories?.map((category) => {
          return (
            <Link
              to={`/category/${category.id}`}
              state={{ categoryName: category.name }}
            >
              <Category key={category.id} category={category} />
            </Link>
          );
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Home;
