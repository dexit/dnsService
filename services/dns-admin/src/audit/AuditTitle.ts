import { Audit as TAudit } from "../api/audit/Audit";

export const AUDIT_TITLE_FIELD = "domain";

export const AuditTitle = (record: TAudit): string => {
  return record.domain?.toString() || String(record.id);
};
