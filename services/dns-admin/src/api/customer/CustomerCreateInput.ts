import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { AuditCreateNestedManyWithoutCustomersInput } from "./AuditCreateNestedManyWithoutCustomersInput";
import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: AddressWhereUniqueInput | null;
  audits?: AuditCreateNestedManyWithoutCustomersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  phone?: string | null;
};
