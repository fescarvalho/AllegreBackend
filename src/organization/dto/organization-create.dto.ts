import { PickType } from '@nestjs/swagger';
import { OrganizationEntity } from './../organization.entity';

export class OrganizationCreateDto extends PickType(OrganizationEntity, [
  'name',
  'cnpj',
  'logoUrl',
  'phone',
]) {}
