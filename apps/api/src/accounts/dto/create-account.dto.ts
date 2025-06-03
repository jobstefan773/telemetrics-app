import {IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class CreateAccountDto {

    @IsString()
    @IsOptional()
    firstName: string;

    @IsString()
    @IsOptional()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    userId: string;
}
