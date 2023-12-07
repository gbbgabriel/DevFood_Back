import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOrderDTO {
  @IsNumber()
  num_mesa: number;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsNumber()
  amountPayments?: number;

  @IsOptional()
  @IsString()
  codePix?: string;

  @IsOptional()
  @IsString()
  datePayment?: string;
}
