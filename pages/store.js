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

export default class StorePage extends React.Component {
  state = {
    stores: []
  };

  componentWillMount() {
    callApi('/stores').then(result => {      
      this.setState({ stores: result });
    });
  }

  render() {
    const list = this.state.stores.map((store, index) => (
      <ListItem key={index} primaryText={store.name} secondaryText={store.description} />
    ));
    return (
      <Layout>
        <Card>
          <CardTitle title='Stores' />
          <CardText>
            <List className='md-paper md-paper--1'>
            {list}  
          </List>   
          </CardText>
        </Card>
      </Layout>);
  }
};