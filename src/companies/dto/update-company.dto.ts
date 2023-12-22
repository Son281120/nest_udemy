import { IsNotEmpty } from 'class-validator';

export class UpdateCompanyDto {
  @IsNotEmpty({ message: 'Tên công ty không được để trống' })
  name: string;

  @IsNotEmpty({ message: 'Email công ty không được để trống' })
  address: string;

  @IsNotEmpty({ message: 'Mô tả công ty không được để trống' })
  description: string;
}
