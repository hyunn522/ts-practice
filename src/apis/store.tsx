export const getCategories = async () => {
  const response = await fetch('http://localhost:8080/categories');
  const data = await response.json();
  return data;
};

export const getStores = async () => {
  const response = await fetch('http://localhost:8080/stores');
  const data = response.json();
  return data;
};

// export const getStore;
