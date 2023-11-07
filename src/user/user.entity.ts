import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger/dist';
import { User as UserModel, UserRole } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsString,
  IsUrl,
  IsOptional,
  IsUUID,
  IsEmail,
  IsEnum,
  Length,
} from 'class-validator';
import { OrganizationEntity } from 'src/organization/organization.entity';

export class UserEntity implements UserModel {
  @ApiPropertyOptional({
    description: 'UUID generated',
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'User full name',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'User email',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User Password',
  })
  @Length(6)
  password: string;

  @ApiPropertyOptional({
    description: 'User profile photo URL',
  })
  @IsOptional()
  @IsUrl()
  avatarUrl: string;

  @ApiProperty({
    description: 'User Role',
    enum: UserRole,
  })
  @IsEnum(UserRole, {})
  role: UserRole;

  @ApiPropertyOptional({
    description: 'User organizarion UUID',
  })
  @IsUUID()
  @IsOptional()
  organizationId: string;

  @ApiPropertyOptional({
    description: 'User organizarion object',
    type: () => OrganizationEntity,
  })
  @Type(() => OrganizationEntity)
  @IsOptional()
  organization?: OrganizationEntity;
}
