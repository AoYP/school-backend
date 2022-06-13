import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async getUser(username: string) {
        const user = await this.prisma.user.findFirst({
            where: {
                username: username,
            },
        })

        return user
    }
}
