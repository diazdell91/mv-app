/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios';
import tokeService from '../context/sessionService';
const baseUrl = 'https://conexen-production.up.railway.app/api/';

type Product = {
  id: string;
  type: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  commissionRate: string;
  code: string;
  createdAt: string;
  updatedAt: string;
};

const getProducts = async () => {
  const session = await tokeService.getSession();
  const config = {
    headers: { Authorization: `Bearer ${session?.token}` },
  };
  const { data } = await axios.get(`${baseUrl}GetProducts`, config);
  return data as {
    products: Product[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
  };
};

export default { getProducts };
