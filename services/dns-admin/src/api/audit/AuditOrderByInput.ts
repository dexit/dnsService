import { SortOrder } from "../../util/SortOrder";

export type AuditOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  dns?: SortOrder;
  domain?: SortOrder;
  id?: SortOrder;
  screenshot?: SortOrder;
  ssl?: SortOrder;
  updatedAt?: SortOrder;
  website?: SortOrder;
  whois?: SortOrder;
};
