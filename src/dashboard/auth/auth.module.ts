import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Admin, adminSchema } from '../../models/admin/admin.schema';
import { AdminRepository } from '../../models/admin/admin.repository';
import { AdminFactoryService } from './factory';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from '../../models/common/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: userSchema,
        discriminators: [{ name: Admin.name, schema: adminSchema }],
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AdminRepository, AdminFactoryService, AuthService],
})
export class AuthModule {}
