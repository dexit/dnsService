/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateAuditArgs } from "./CreateAuditArgs";
import { UpdateAuditArgs } from "./UpdateAuditArgs";
import { DeleteAuditArgs } from "./DeleteAuditArgs";
import { AuditCountArgs } from "./AuditCountArgs";
import { AuditFindManyArgs } from "./AuditFindManyArgs";
import { AuditFindUniqueArgs } from "./AuditFindUniqueArgs";
import { Audit } from "./Audit";
import { Customer } from "../../customer/base/Customer";
import { AuditService } from "../audit.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Audit)
export class AuditResolverBase {
  constructor(
    protected readonly service: AuditService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Audit",
    action: "read",
    possession: "any",
  })
  async _auditsMeta(
    @graphql.Args() args: AuditCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Audit])
  @nestAccessControl.UseRoles({
    resource: "Audit",
    action: "read",
    possession: "any",
  })
  async audits(@graphql.Args() args: AuditFindManyArgs): Promise<Audit[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Audit, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Audit",
    action: "read",
    possession: "own",
  })
  async audit(
    @graphql.Args() args: AuditFindUniqueArgs
  ): Promise<Audit | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Audit)
  @nestAccessControl.UseRoles({
    resource: "Audit",
    action: "create",
    possession: "any",
  })
  async createAudit(@graphql.Args() args: CreateAuditArgs): Promise<Audit> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        customer: args.data.customer
          ? {
              connect: args.data.customer,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Audit)
  @nestAccessControl.UseRoles({
    resource: "Audit",
    action: "update",
    possession: "any",
  })
  async updateAudit(
    @graphql.Args() args: UpdateAuditArgs
  ): Promise<Audit | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          customer: args.data.customer
            ? {
                connect: args.data.customer,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Audit)
  @nestAccessControl.UseRoles({
    resource: "Audit",
    action: "delete",
    possession: "any",
  })
  async deleteAudit(
    @graphql.Args() args: DeleteAuditArgs
  ): Promise<Audit | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Customer, {
    nullable: true,
    name: "customer",
  })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  async resolveFieldCustomer(
    @graphql.Parent() parent: Audit
  ): Promise<Customer | null> {
    const result = await this.service.getCustomer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
