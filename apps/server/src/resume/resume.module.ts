// TODO: MASOOD

import { Module, forwardRef } from "@nestjs/common";

import { AuthModule } from "@/server/auth/auth.module";
import { PrinterModule } from "@/server/printer/printer.module";

import { StorageModule } from "../storage/storage.module";
import { ResumeController } from "./resume.controller";
import { ResumeService } from "./resume.service";
import { UserModule } from "../user/user.module";

@Module({
  imports: [forwardRef(() => AuthModule.register()), PrinterModule, StorageModule, UserModule],
  controllers: [ResumeController],
  providers: [ResumeService],
  exports: [ResumeService],
})
export class ResumeModule { }
