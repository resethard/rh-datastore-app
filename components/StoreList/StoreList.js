import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { List, ListItem } from 'react-md';

const StoreList = ({ allStoresQuery }) => {  
  if (allStoresQuery && allStoresQuery.loading) {
    return <div>Loading</div>
  }

  if (allStoresQuery && allStoresQuery.error) {
    return <div>Error</div>
  }

  const list = allStoresQuery.allStores.map((store, index) => (
    <ListItem key={index} primaryText={store.name} secondaryText={store.description} />
  ));

  return (
    <List className='md-paper md-paper--1'>
      {list}
    </List>);
}

const ALL_STORE_QUERY = gql`
# 2
query AllStoresQuery {
  allStores {
    id
    name
    description
  }
}`;

export default graphql(ALL_STORE_QUERY, { name: 'allStoresQuery' }) (StoreList);