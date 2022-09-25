/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios';
import tokeService from '../context/sessionService';
const baseUrl = 'https://conexen-production.up.railway.app/api/';

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

const getTopups = async ({ size = 25, page = 0, startOfDate, endOfDate, processingState }) => {
  console.log('ON SERVICE', startOfDate, endOfDate, processingState);
  const session = await tokeService.getSession();
  const config = {
    headers: { Authorization: `Bearer ${session?.token}` },
    params: {
      startOfDate,
      endOfDate,
      processingState,
      size,
      page,
    },
  };
  const { data } = await axios.get(`${baseUrl}GetTopups`, config);
  return data as {
    topups: TopUp[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
  };
};
const createTopup = async (phone: string, amountCup: number, amountUsd: number) => {
  const session = await tokeService.getSession();
  const config = {
    headers: { Authorization: `Bearer ${session?.token}` },
  };
  const { data } = await axios.post(
    `${baseUrl}CreateTopup`,
    {
      client: phone,
      phone,
      amountCup,
      amountUsd,
    },
    config,
  );
  return data as TopUp;
};

export default { getTopups, createTopup };
