import {ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import ACCESS_TOKEN from '../../configClient';

export const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.github.com/graphql',
      headers: {
        authorization: `Bearer ${ACCESS_TOKEN}` // on production you need to store token in storage, for demonstration purposes we do this like that
      }
    }),
    cache: new InMemoryCache()
  });