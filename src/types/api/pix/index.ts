export interface PixTransaction {
    Id?: string;
    UserId: string;
    txid?: string;
    Amount: number;
    Payer: Array<[]>;
    Status: 'PENDING' | 'PAID' | 'FAILED' | 'EXPIRED' | 'REFUNDED ';
    CreatedAt: string;
    UpdatedAt: string;
    Taxa: number;
    ExpiresAt: string;
  }
  
  export interface CreatePixRequest {
    amount: number;
    recipientKey: string;
    description?: string;
  }