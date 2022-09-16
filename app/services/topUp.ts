/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/';

type TopUps = {
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
    topups: TopUps[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
  };
};

export default { getTopups };
