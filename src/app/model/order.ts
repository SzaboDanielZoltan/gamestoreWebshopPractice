export class Order {
  id: number = 0;
  orderdate: Date = new Date();
  userName: string = '';
  userEmail: string = '';
  newsletter: boolean = false;
  shippingAddress: string = '';
  productId: number = 0;
  amount: number = 1
}
