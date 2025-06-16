import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 5000,
});

export const fetchProducts = async () => {
  try {
    const response = await apiClient.get("/products");
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des produits :", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération du produit :", error);
    throw error;
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await apiClient.post("/auth/login", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    throw error;
  }
};
