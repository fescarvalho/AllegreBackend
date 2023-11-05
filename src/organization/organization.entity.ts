import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger/dist';
import { Organization as OrganizationModel } from '@prisma/client';
import { IsString, IsUrl, IsOptional, Length, IsUUID } from 'class-validator';

export class OrganizationEntity implements OrganizationModel {
  @ApiPropertyOptional({
    description: 'UUID generated',
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'Organization name',
  })
  @IsString()
  name: string;

  @ApiPropertyOptional({
    description: 'Organization logo url',
  })
  @IsOptional()
  @IsUrl()
  logoUrl: string;

  @ApiProperty({
    description: 'CNPJ number,without special characters',
  })
  @Length(14)
  @IsString()
  cnpj: string;

  @ApiPropertyOptional({
    description: 'Organization Phone,without special characters',
  })
  @Length(13)
  @IsOptional()
  @IsString()
  phone: string;
}
