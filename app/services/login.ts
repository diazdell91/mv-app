import axios from 'axios';

const baseUrl = 'https://conexen-production.up.railway.app/api/Login';

type User = {
  id: string;
  email: string;
  name: string;
  roles: string[];
};

const login = async (credentials: { email: string; password: string }) => {
  const { data } = await axios.post(baseUrl, credentials);
  return data as { user: User; token: string };
};

export default { login };
