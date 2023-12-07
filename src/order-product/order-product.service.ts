import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { ReturnGroupOrder } from './dtos/return-group-order.dto';
import { OrderProductEntity } from './entities/order-product.entity';

@Injectable()
export class OrderProductService {
  constructor(
    @InjectRepository(OrderProductEntity)
    private readonly orderProductRepository: Repository<OrderProductEntity>,
  ) {}

  async createOrderProduct(
    productId: number,
    orderId: number,
    price: number,
    amount: number,
  ): Promise<OrderProductEntity> {
    return this.orderProductRepository.save({
      amount,
      orderId,
      price,
      productId,
    });
  }

  async findOrderProductByOrderId(
    orderId: number,
  ): Promise<OrderProductEntity[]> {
    return this.orderProductRepository.find({
      where: {
        orderId,
      },
    });
  }

  async findAmountProductsByOrderId(
    orderId: number[],
  ): Promise<ReturnGroupOrder[]> {
    return this.orderProductRepository
      .createQueryBuilder('order_product')
      .select('order_product.order_id, COUNT(*) as total')
      .where('order_product.order_id IN (:...ids)', { ids: orderId })
      .groupBy('order_product.order_id')
      .getRawMany();
  }

  async deleteOrderProductsByOrderId(orderId: number): Promise<void> {
    const orderProducts = await this.orderProductRepository.find({
      where: {
        order: { id: orderId },
      },
    });

    if (!orderProducts || orderProducts.length === 0) {
      throw new NotFoundException('Order products not found');
    }

    await this.orderProductRepository.remove(orderProducts);
  }
}
