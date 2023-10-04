import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AuditModuleBase } from "./base/audit.module.base";
import { AuditService } from "./audit.service";
import { AuditController } from "./audit.controller";
import { AuditResolver } from "./audit.resolver";

@Module({
  imports: [AuditModuleBase, forwardRef(() => AuthModule)],
  controllers: [AuditController],
  providers: [AuditService, AuditResolver],
  exports: [AuditService],
})
export class AuditModule {}
