import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

type AuthInput = {username: string; password: string}
type SignInData = {userId: string; username: string}
type AuthResult = {accessToken: string; userId: string; username: string}

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    async authenticate (input: AuthInput): Promise<AuthResult> {
        const user = await this.validateUser(input);

        if(!user) {
            throw new UnauthorizedException()
        }

        return this.signIn(user)
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

    async signIn(user: SignInData): Promise<AuthResult> {
        const tokenPayload = {
            sub: user.userId,
            username: user.username
        }

        const accessToken = this.jwtService.sign(tokenPayload);

        return { accessToken, username: user.username, userId: user.userId }
    }
} 
 