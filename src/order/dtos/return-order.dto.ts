import { ReturnOrderProductDTO } from '../../order-product/dtos/return-order-product.dto';
import { ReturnPaymentDTO } from '../../payment/dtos/return-payment.dto';
import { ReturnUserDto } from '../../user/dtos/returnUser.dto';
import { OrderEntity } from '../entities/order.entity';

export class ReturnOrderDTO {
  id: number;
  date: string;
  userId: number;
  numMesa: number;
  paymentId: number;
  user?: ReturnUserDto;
  payment?: ReturnPaymentDTO;
  ordersProduct?: ReturnOrderProductDTO[];
  amountProducts?: number;

  constructor(order?: OrderEntity) {
    this.id = order?.id;
    this.date = order?.date.toString();
    this.userId = order?.userId;
    this.paymentId = order?.paymentId;
    this.user = order?.user ? new ReturnUserDto(order?.user) : undefined;
    this.payment = order?.payment
      ? new ReturnPaymentDTO(order?.payment)
      : undefined;
    this.ordersProduct = order?.ordersProduct
      ? order?.ordersProduct.map(
          (orderProduct) => new ReturnOrderProductDTO(orderProduct),
        )
      : undefined;
    this.amountProducts = order?.amountProducts;
  }
}
