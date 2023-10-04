import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuditServiceBase } from "./base/audit.service.base";

@Injectable()
export class AuditService extends AuditServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
