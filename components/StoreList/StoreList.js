import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { List, ListItem } from 'react-md';
import Router from 'next/router';

class StoreList extends React.Component {
  handleOnItemClick(id) {
    Router.push(`/entity?storeId=${id}`);
  } 

  render() {
      if (this.props.allStoresQuery && this.props.allStoresQuery.loading) {
      return <div>Loading</div>
    }

    if (this.props.allStoresQuery && this.props.allStoresQuery.error) {
      return <div>Error</div>
    }

    const list = this.props.allStoresQuery.allStores.map((store, index) => (
      <ListItem key={index} primaryText={store.name} secondaryText={store.description} onClick={this.handleOnItemClick.bind(this, store.id)} />
    ));

    return (
      <List className='md-paper md-paper--1'>
        {list}
      </List>);
  }
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