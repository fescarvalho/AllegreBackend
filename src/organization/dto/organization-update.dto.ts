import { PickType } from '@nestjs/swagger';
import { OrganizationEntity } from './../organization.entity';
import { ApiPropertyOptional } from '@nestjs/swagger/dist';
import { IsOptional, IsString, Length } from 'class-validator';

export class OrganizationUpdateDto extends PickType(OrganizationEntity, [
  'logoUrl',
  'phone',
]) {
  @ApiPropertyOptional({
    description: 'Organization name',
  })
  @IsString()
  @IsOptional()
  name: string;

  @ApiPropertyOptional({
    description: 'CNPJ number,without special characters',
  })
  @Length(14)
  @IsString()
  @IsOptional()
  cnpj: string;
}
