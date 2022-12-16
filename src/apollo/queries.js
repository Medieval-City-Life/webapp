import gql from 'graphql-tag';

export const myUser = gql`
  query {
    myUser {
      _id
      name
    }
  }
`;

export const getInventory = gql`
  query {
    getInventory {
      items {
        amount
        category
        name
      }
    }
  }
`;
