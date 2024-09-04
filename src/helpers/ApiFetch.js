const url = "https://fakestoreapi.com/products";
const limite = 10;

export const getProducts = async () => {
  const response = await fetch(url + "?limit=" + limite);
  const data = await response.json();
  return data;
};

export const getProduct = async (id) => {
  try {
    const response = await fetch(url + "/" + id);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Algo salió mal");
  }
};
