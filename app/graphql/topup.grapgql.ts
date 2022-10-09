import { gql } from '@apollo/client';

export const TOPUPS = gql`
  query ListTopupsRecords($input: TopupsInput) {
    listTopupsRecords(input: $input) {
      totalDocs
      limit
      totalPages
      docs {
        id
        userId
        product {
          id
          price
          receiveValue
          name
        }
        status
        client
        phone
        commissionRate
        code
        staff {
          id
        }
        description
        createdAt
        updatedAt
      }
    }
  }
`;

export const TOPUPS_AVAILABLES = gql`
  query ListTopupsAvailables($input: TopupsAvailablesInput) {
    listTopupsAvailables(input: $input) {
      totalDocs
      limit
      totalPages
      docs {
        id
        userId
        product {
          id
          receiveValue
          name
        }
        status
        client
        phone
        commissionRate
        code
        staff {
          id
        }
        description
        createdAt
        updatedAt
      }
    }
  }
`;

export const TOPUPS_ASSIGNED = gql`
  query ListTopupsAssigned($input: TopupsAssignedInput) {
    listTopupsAssigned(input: $input) {
      totalDocs
      limit
      totalPages
      docs {
        id
        userId
        product {
          id
          skuCode
          category
          name
          description
          sendValue
          receiveValue
          price
          commissionRate
        }
        status
        client
        phone
        commissionRate
        code
        staff {
          id
          name
          email
        }
        description
        createdAt
        updatedAt
      }
    }
  }
`;

//Mutation
export const ASSIGN_TOPUP = gql`
  mutation AssignTopup($id: String!) {
    assignTopup(id: $id) {
      code
      success
      message
      topup {
        id
      }
    }
  }
`;

export const CANCEL_TOPUP = gql`
  mutation CancelTopup($id: String!) {
    cancelTopup(id: $id) {
      code
      success
      message
      topup {
        id
      }
    }
  }
`;

export const COMPLETE_TOPUP = gql`
  mutation CompleteTopup($id: String!) {
    completeTopup(id: $id) {
      code
      success
      message
      topup {
        id
      }
    }
  }
`;

export const REASSIGN_TOPUP = gql`
  mutation ReAssignTopup($id: String!) {
    reAssignTopup(id: $id) {
      code
      success
      message
      topup {
        id
      }
    }
  }
`;

export const CREATE_TOPUP = gql`
  mutation SendTopup($input: TopupInput!) {
    sendTopup(input: $input) {
      code
      success
      message
      topup {
        id
        userId
        status
        client
        phone
        commissionRate
        code
        staff {
          id
          email
          name
        }
        description
        createdAt
        updatedAt
        product {
          id
          skuCode
          category
          name
          description
          sendValue
          receiveValue
          price
          commissionRate
        }
      }
    }
  }
`;
