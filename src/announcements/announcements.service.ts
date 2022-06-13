import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { AnnouncementDto } from './announcement.dto'

@Injectable()
export class AnnouncementsService {
    constructor(private readonly prisma: PrismaService) {}

    getAll() {
        return this.prisma.announcement.findMany({})
    }

    add(announcementDto: AnnouncementDto) {
        this.prisma.announcement
            .create({
                data: {
                    title: announcementDto.title,
                    content: announcementDto.content,
                },
            })
            .catch((error) => {
                throw error
            })

        return { status: 400 }
    }
}
