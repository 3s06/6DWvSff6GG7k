import EfiPay from 'sdk-typescript-apis-efi';

export const efiPay = new EfiPay({
  sandbox: process.env.EFI_SANDBOX === 'true',
  client_id: process.env.EFI_CLIENT_ID!,
  client_secret: process.env.EFI_CLIENT_SECRET!,
  pix_cert: process.env.EFI_PIX_CERT!,
});