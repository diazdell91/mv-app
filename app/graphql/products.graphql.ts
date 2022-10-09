import { gql } from '@apollo/client';

export const PRODUCTS = gql`
  query Products($input: ProductsInput) {
    products(input: $input) {
      limit
      totalPages
      totalDocs
      docs {
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
`;
