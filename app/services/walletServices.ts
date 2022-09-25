/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios';
import tokeService from '../context/sessionService';
const baseUrl = 'https://conexen-production.up.railway.app/api/';

type Transaction = {
  _id: string;
  walletId: string;
  amount: number;
  type: string;
  description: string;
  balanceAfter: number;
  balanceBefore: number;
  createdAt: string;
  updatedAt: string;
};

type CreateTransaction = {
  email: string;
  name: string;
  password: string;
  roles: string[];
};

const getTransactions = async (size = 5, page = 0) => {
  const session = await tokeService.getSession();
  if (session) {
    const config = {
      headers: { Authorization: `Bearer ${session.token}` },
    };

    const QUERY = `?size=${size}&page=${page}`;

    const { data } = await axios.get(`${baseUrl}GetTransactions${QUERY}`, config);

    return data as {
      transactions: Transaction[];
      currentPage: number;
      totalPages: number;
      totalItems: number;
    };
  } else {
    return null;
  }
};

const getWallet = async () => {
  const session = await tokeService.getSession();
  if (session) {
    const config = {
      headers: { Authorization: `Bearer ${session.token}` },
    };

    const { data } = await axios.get(`${baseUrl}GetWallet`, config);

    return data as {
      _id: string;
      balance: number;
      currency: string;
      commissionRate: number;
      createdAt: string;
      updatedAt: string;
    };
  } else {
    return null;
  }
};

export default { getTransactions, getWallet };
