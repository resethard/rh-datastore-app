import Layout from '../components/Layout/Layout';
import {
  Card,
  CardTitle,
  CardText,
} from 'react-md';

export default () => (
  <Layout>
    <Card>
      <CardTitle title='Home' />
      <CardText>
        { 'Welcome to Data Store App' }         
      </CardText>
    </Card>
  </Layout>
);