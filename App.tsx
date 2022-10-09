import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloProvider } from '@apollo/client';
import { AuthProvider } from './app/context/auth/authProvider';
import useCachedResources from './app/hooks/useCachedResources';
import Navigation from './app/router';
import client from './app/apollo/client';

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ApolloProvider client={client}>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </ApolloProvider>
      </SafeAreaProvider>
    );
  }
}
