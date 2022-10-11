import { gql } from '@apollo/client';

export const TRANSFERS = gql`
  query TransfersRecords($input: TransferInput) {
    transfersRecords(input: $input) {
      totalDocs
      limit
      totalPages
      docs {
        id
        walletId
        amount
        type
        description
        balanceBefore
        balanceAfter
        createdAt
        updatedAt
      }
    }
  }
`;
