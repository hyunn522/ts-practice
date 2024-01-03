export const getCategories = async () => {
  const response = await fetch('http://localhost:8080/categories');
  const data = response.json();
  return data;
};

// export const getStores;

// export const getStore;
