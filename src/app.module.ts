import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { PrismaService } from './prisma/prisma.service';
import { AnnouncementsModule } from './announcements/announcements.module';

@Module({
    imports: [UsersModule, AuthModule, AnnouncementsModule],
    controllers: [AppController],
    providers: [AppService, PrismaService],
})
export class AppModule {}
