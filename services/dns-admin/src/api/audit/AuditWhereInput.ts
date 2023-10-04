import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AuditWhereInput = {
  customer?: CustomerWhereUniqueInput;
  dns?: JsonFilter;
  domain?: StringNullableFilter;
  id?: StringFilter;
  screenshot?: StringNullableFilter;
  ssl?: JsonFilter;
  website?: StringNullableFilter;
  whois?: JsonFilter;
};
