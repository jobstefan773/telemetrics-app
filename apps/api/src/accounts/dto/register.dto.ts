export class RegisterDto {
    //user fields
    username: string;
    password: string;
    phoneNumber: string;
    email?: string;

    //account fields
    firstName: string;
    lastName: string;
}