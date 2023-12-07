import { paymentPixMock } from '../../payment/__mocks__/payment-pix.mock';
import { CreateOrderDTO } from '../dtos/create-order.dto';
import { paymentCreditCardMock } from '../../payment/__mocks__/payment-credit-card.mock';

export const createOrderPixMock: CreateOrderDTO = {
  num_mesa: 1,
  description: 'description',
  codePix: paymentPixMock.code,
  datePayment: '2020-01-01',
};

export const createOrderCreditCardMock: CreateOrderDTO = {
  num_mesa: 1,
  description: 'description',
  amountPayments: paymentCreditCardMock.amountPayments,
};
