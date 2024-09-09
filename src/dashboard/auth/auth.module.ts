import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { Admin, AdminRepository, adminSchema } from "src/models";
import { AdminFactoryService } from "./factory";
import { MongooseModule } from "@nestjs/mongoose";
import { User, userSchema } from "src/models/common/user.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: userSchema, discriminators: [{ name: Admin.name, schema: adminSchema }] }])],
    controllers: [AuthController],
    providers: [AdminRepository, AdminFactoryService, AuthService]
})
export class AuthModule {

}