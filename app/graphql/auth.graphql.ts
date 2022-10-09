import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      code
      success
      message
      user {
        id
        name
        email
        role
      }
      tokens {
        token
        refeshToken
      }
    }
  }
`;
