import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { AuditListRelationFilter } from "../audit/AuditListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type CustomerWhereInput = {
  address?: AddressWhereUniqueInput;
  audits?: AuditListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  phone?: StringNullableFilter;
};
