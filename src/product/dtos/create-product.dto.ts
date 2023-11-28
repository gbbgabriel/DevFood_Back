import { IsNumber, IsString } from 'class-validator';

export class CreateProductDTO {
  @IsNumber()
  categoryId: number;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  image: string;
}
