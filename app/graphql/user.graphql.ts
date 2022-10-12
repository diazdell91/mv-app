import { gql } from '@apollo/client';

export const ME = gql`
  query Me {
    me {
      id
      name
      email
      phone
      lastTask
      disabled
      pushToken
      servicesAllowed {
        category
        commissionRate
      }
      role
      apiKey
      createdAt
      updatedAt
      wallet {
        id
        balance
        currency
      }
    }
  }
`;

export const USER = gql`
  query user($id: String) {
    user(id: $id) {
      id
      name
      email
      phone
      lastTask
      disabled
      pushToken
      servicesAllowed {
        category
        commissionRate
      }
      role
      apiKey
      createdAt
      updatedAt
      wallet {
        id
        balance
        currency
      }
    }
  }
`;

export const ALL_USERS = gql`
  query AllUsers($role: Role) {
    allUsers(role: $role) {
      id
      name
      email
      phone
      lastTask
      disabled
      pushToken
      servicesAllowed {
        category
        commissionRate
      }
      role
      apiKey
      createdAt
      updatedAt
      wallet {
        id
        balance
        createdAt
        currency
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($input: UserInput!) {
    createUser(input: $input) {
      code
      success
      message
      user {
        id
        name
        email
        phone
        lastTask
        disabled
        pushToken
        role
        apiKey
        wallet {
          id
          balance
          currency
        }
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      code
      success
      message
      user {
        id
        name
        email
        phone
        lastTask
        disabled
        pushToken
        servicesAllowed {
          category
          commissionRate
        }
        role
        apiKey
        createdAt
        updatedAt
      }
    }
  }
`;
