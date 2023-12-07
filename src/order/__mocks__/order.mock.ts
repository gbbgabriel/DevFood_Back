import { paymentMock } from '../../payment/__mocks__/payment.mock';
import { userEntityMock } from '../../user/__mocks__/user.mock';
import { OrderEntity } from '../entities/order.entity';

export const orderMock: OrderEntity = {
  num_mesa: 1,
  description: 'description',
  createdAt: new Date(),
  date: new Date(),
  id: 453543,
  paymentId: paymentMock.id,
  updatedAt: new Date(),
  userId: userEntityMock.id,
};
