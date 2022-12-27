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
      amount
      itemDef {
        category
        name
        img
      }
    }
  }
`;

export const getMyCommunity = gql`
  query {
    getMyCommunity {
      name
      owner {
        name
      }
      crest
      level
      memberCount
    }
  }
`;

export const getBuildings = gql`
  query {
    getBuildings {
        name
        level
        owner {
            name
        }
        products {
            itemDef {
                name
            }
            last_collected
            rate
        }
    }
}
`