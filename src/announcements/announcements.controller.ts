import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { AuthenticatedGuard } from 'src/auth/auth.guard'
import { AnnouncementDto } from './announcement.dto'
import { AnnouncementsService } from './announcements.service'

@Controller('announcements')
export class AnnouncementsController {
    constructor(private readonly announcementsService: AnnouncementsService) {}

    @Get('/')
    getAnnouncements() {
        return this.announcementsService.getAll()
    }

    @UseGuards(AuthenticatedGuard)
    @Post('/add')
    addAnnouncement(@Body() announcementDto: AnnouncementDto) {
        return this.announcementsService.add(announcementDto)
    }
}
