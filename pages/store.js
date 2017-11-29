import React from 'react';
import Layout from '../components/Layout/Layout';
import {
  Card,
  CardTitle,
  CardText,
  List,
  ListItem,
  Paper,
} from 'react-md';
import { callApi } from '../utils/apiUtils';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import StoreList from '../components/StoreList/StoreList';

const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjajtbhy21ici01610h7cbuel' });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

class StorePage extends React.Component {
  state = {
    stores: []
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <Layout>
          <Card>
            <CardTitle title='Stores' />
            <CardText>
              <StoreList />
            </CardText>
          </Card>
        </Layout>
      </ApolloProvider>);
  }
};

export default StorePage;