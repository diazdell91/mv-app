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

export const PRODUCT_CATEGORYS = gql`
  query Query {
    productsCategorys
  }
`;

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: ProductInput!) {
    createProduct(input: $input) {
      code
      success
      message
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($input: UpdateProductInput!) {
    updateProduct(input: $input) {
      code
      success
      message
    }
  }
`;
