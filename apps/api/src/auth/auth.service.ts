import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

type AuthInput = {username: string; password: string}
type SignInData = {userId: string; username: string}
type AuthResult = {accessToken: string; userId: string; username: string}

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    async authenticate (input: AuthInput): Promise<AuthResult> {
        const user = await this.validateUser(input);

        if(!user) {
            throw new UnauthorizedException()
        }

        return {
            accessToken: 'fake-access',
            userId: user.userId,
            username: user.username
        }
    }

    async validateUser(input: AuthInput): Promise<SignInData | null>  {
        const user = await this.usersService.findByUsername(input.username)

        if (user && user.password === input.password) {
            return {
                userId: user.id,
                username: user.username
            }
        }

        return null;
    } 

} 
 