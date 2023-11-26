import { paymentPixMock } from '../../payment/__mocks__/payment-pix.mock';
import { CreateOrderDTO } from '../dtos/create-order.dto';
import { paymentCreditCardMock } from '../../payment/__mocks__/payment-credit-card.mock';

export const createOrderPixMock: CreateOrderDTO = {
  numMesa: 1,
  codePix: paymentPixMock.code,
  datePayment: '2020-01-01',
};

export const createOrderCreditCardMock: CreateOrderDTO = {
  numMesa: 1,
  amountPayments: paymentCreditCardMock.amountPayments,
};
