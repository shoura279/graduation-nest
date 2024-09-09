import { Module } from '@nestjs/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: "./.env", isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    DashboardModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
