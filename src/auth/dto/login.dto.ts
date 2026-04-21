export class LoginDto {
  email: string;
  password: string;
}

export class RegisterDto {
  nombre: string;
  email: string;
  password: string;
  rol?: string;
}
