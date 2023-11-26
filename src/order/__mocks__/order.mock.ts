import { paymentMock } from '../../payment/__mocks__/payment.mock';
import { userEntityMock } from '../../user/__mocks__/user.mock';
import { OrderEntity } from '../entities/order.entity';

export const orderMock: OrderEntity = {
  numMesa: 1,
  createdAt: new Date(),
  date: new Date(),
  id: 453543,
  paymentId: paymentMock.id,
  updatedAt: new Date(),
  userId: userEntityMock.id,
};
