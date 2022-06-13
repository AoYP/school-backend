import { Controller, Post, Request, UseGuards, Get } from '@nestjs/common'
import { AuthenticatedGuard } from 'src/auth/auth.guard'
import { LocalAuthGuard } from 'src/auth/local.auth.guard'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    login(@Request() request) {
        return { user: request.user, msg: 'Logged in' }
    }

    @UseGuards(AuthenticatedGuard)
    @Get('/protected')
    getHello(@Request() request) {
        return request.user
    }

    @Get('/logout')
    logout(@Request() request) {
        request.session.destroy()

        return { status: 200 }
    }
}
