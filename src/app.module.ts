import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { AnnouncementsModule } from './announcements/announcements.module'

@Module({
    imports: [UsersModule, AuthModule, AnnouncementsModule],
})
export class AppModule {}
