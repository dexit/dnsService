import { AuditWhereUniqueInput } from "./AuditWhereUniqueInput";
import { AuditUpdateInput } from "./AuditUpdateInput";

export type UpdateAuditArgs = {
  where: AuditWhereUniqueInput;
  data: AuditUpdateInput;
};
