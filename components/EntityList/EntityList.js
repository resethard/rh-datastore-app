import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { List, ListItem } from 'react-md';

const EntityList = ({ storeId, allEntitiesQuery }) => {  
  if (allEntitiesQuery && allEntitiesQuery.loading) {
    return <div>Loading</div>
  }

  if (allEntitiesQuery && allEntitiesQuery.error) {
    return <div>Error</div>
  }

  const list = allEntitiesQuery.allEntities.map((entity, index) => (
    <ListItem key={index} primaryText={entity.name} secondaryText={entity.description} />
  ));

  return (
    <List className='md-paper md-paper--1'>
      {list}
    </List>);
}

const ALL_STORE_QUERY = gql`
# 2
query AllEntitiesQuery($storeId: ID!) {
  allEntities(filter: {
    store: {id: $storeId}
  }) {
    id
    name
    description
  }
}`;

export default graphql(ALL_STORE_QUERY, {
  name: 'allEntitiesQuery',
  options: ({ storeId }) => ({ variables: { storeId } }),
}) (EntityList);