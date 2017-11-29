import React from 'react';
import Layout from '../components/Layout/Layout';
import {
  Card,
  CardTitle,
  CardText,
} from 'react-md';
import EntityList from '../components/EntityList/EntityList';
import withApollo from '../HOCs/withApollo';

class EntityPage extends React.Component {
  render() {
    return (
      <Layout>
        <Card>
          <CardTitle title='Entities' />
          <CardText>
            <EntityList storeId={this.props.url.query.storeId} />
          </CardText>
        </Card>
      </Layout>);
  }
};

export default withApollo(EntityPage);