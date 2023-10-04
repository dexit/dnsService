import { AuditWhereInput } from "./AuditWhereInput";
import { AuditOrderByInput } from "./AuditOrderByInput";

export type AuditFindManyArgs = {
  where?: AuditWhereInput;
  orderBy?: Array<AuditOrderByInput>;
  skip?: number;
  take?: number;
};
