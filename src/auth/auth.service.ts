import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from 'src/users/users.service'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    async validateUser(username: string, password: string) {
        const user = await this.usersService.getUser(username)

        if (!user) {
            throw new UnauthorizedException()
        }

        const passwordValid = await bcrypt.compare(password, user.password)

        if (user && passwordValid) {
            return {
                id: user.id,
                username: user.username,
            }
        }

        return null
    }
}
