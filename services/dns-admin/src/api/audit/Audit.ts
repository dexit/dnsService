import { Customer } from "../customer/Customer";
import { JsonValue } from "type-fest";

export type Audit = {
  createdAt: Date;
  customer?: Customer | null;
  dns: JsonValue;
  domain: string | null;
  id: string;
  screenshot: string | null;
  ssl: JsonValue;
  updatedAt: Date;
  website: string | null;
  whois: JsonValue;
};
