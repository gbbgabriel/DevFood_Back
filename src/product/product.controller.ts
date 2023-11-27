import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Pagination } from '../dtos/pagination.dto';
import { DeleteResult } from 'typeorm';
import { Roles } from '../decorators/roles.decorator';
import { UserType } from '../user/enum/user-type.enum';
import { CreateProductDTO } from './dtos/create-product.dto';
import { ReturnProduct } from './dtos/return-product.dto';
import { UpdateProductDTO } from './dtos/update-procut.dto';

import { ProductService } from './product.service';
import { ProductEntity } from './entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<ReturnProduct[]> {
    return (await this.productService.findAll([], true)).map(
      (product) => new ReturnProduct(product),
    );
  }

  @Get('/page')
  async findAllPage(
    @Query('search') search?: string,
    @Query('size') size?: number,
    @Query('page') page?: number,
  ): Promise<Pagination<ReturnProduct[]>> {
    return this.productService.findAllPage(search, size, page);
  }

  @Get('/:productId')
  async findProductById(@Param('productId') productId): Promise<ReturnProduct> {
    return new ReturnProduct(
      await this.productService.findProductById(productId, true),
    );
  }

  @Roles(UserType.Admin, UserType.Root)
  @UsePipes(ValidationPipe)
  @Post()
  async createProduct(
    @Body() createProduct: CreateProductDTO,
  ): Promise<ProductEntity> {
    return this.productService.createProduct(createProduct);
  }

  @Roles(UserType.Admin, UserType.Root)
  @Delete('/:productId')
  async deleteProduct(
    @Param('productId') productId: number,
  ): Promise<DeleteResult> {
    return this.productService.deleteProduct(productId);
  }

  @Roles(UserType.Admin, UserType.Root)
  @UsePipes(ValidationPipe)
  @Put('/:productId')
  async updateProduct(
    @Body() updateProduct: UpdateProductDTO,
    @Param('productId') productId: number,
  ): Promise<ProductEntity> {
    return this.productService.updateProduct(updateProduct, productId);
  }

  @Get('/category/:categoryId')
  async findProductByCategory(
    @Param('categoryId') categoryId: number,
  ): Promise<ReturnProduct[]> {
    return (
      await this.productService.findProductsByCategoryId(categoryId, true)
    ).map((product) => new ReturnProduct(product));
  }
}
