/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/';

type TopUp = {
  id: string;
  client: string;
  phoneNumber: string;
  amount: number;
  processingState: string;
  userId: string;
  code: string;
  createdAt: string;
  updatedAt: string;
};

const getTopups = async (token: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const { data } = await axios.get(`${baseUrl}GetTopups`, config);
  return data as {
    topups: TopUp[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
  };
};
const createTopup = async (token: string, amount: number, phone: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const { data } = await axios.post(
    `${baseUrl}CreateTopup`,
    {
      client: phone,
      amount,
      phone,
    },
    config,
  );
  return data as TopUp;
};

export default { getTopups, createTopup };
