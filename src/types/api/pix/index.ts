export interface PixTransaction {
    $id?: string;
    userId: string;
    txid?: string;
    amount: number;
    recipientKey: string;
    description?: string;
    status: 'PENDING' | 'COMPLETED' | 'FAILED';
    createdAt: string;
  }
  
  export interface CreatePixRequest {
    amount: number;
    recipientKey: string;
    description?: string;
  }