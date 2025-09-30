interface IAccountNumberPerMessageOperatorResponse {
  accountNumberPerMessageOperatorId: string;
  userAccountId: string;
  messageOperator: string; // e.g., "57"
  messagingAccountNumber: string;
  transactionOperation: string;
}

export type { IAccountNumberPerMessageOperatorResponse };

