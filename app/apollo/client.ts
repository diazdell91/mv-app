/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import sessionService from '../context/sessionService';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/',
});

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists

  const session = await sessionService.getSession();
  const token = session?.tokens?.token;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;
