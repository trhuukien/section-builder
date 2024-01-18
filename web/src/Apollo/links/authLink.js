import { setContext } from '@apollo/client/link/context';
import storage from '~/utils/storage';

export const authLink = () => {
  return setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists.
    const token = storage.getItem('x-xpify-token');
    if (!token) {
      return { headers };
    }

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        'x-xpify-token': token ? `Bearer ${token}` : '',
      },
    };
  });
};
