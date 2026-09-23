import { Module } from '@nestjs/common';
import { BatchController } from './batch.controller';
import { BatchService } from './batch.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import Property from '../../nestar-api/src/libs/schemas/Property.model';
import Member from '../../nestar-api/src/libs/schemas/Member.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    ScheduleModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Property', schema: Property }]),
    MongooseModule.forFeature([{ name: 'Member', schema: Member }]),
  ],
  controllers: [BatchController],
  providers: [BatchService],
})
export class BatchModule {}