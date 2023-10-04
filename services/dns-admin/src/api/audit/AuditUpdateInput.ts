import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type AuditUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  dns?: InputJsonValue;
  domain?: string | null;
  screenshot?: string | null;
  ssl?: InputJsonValue;
  website?: string | null;
  whois?: InputJsonValue;
};
