import { Controller, Get } from '@nestjs/common';

@Controller('config')
export class ConfigController {
  @Get('sistema')
  getConfig() {
    return {
      db_host: 'localhost',
      db_port: 5432,
      db_user: 'postgres',
      db_password: 'academy',
      jwt_secret: 'intracorp-secret-key-2024-prod!',
      api_key: 'sk-IC-prod-2024-a1b2c3d4e5f6',
      smtp_host: 'smtp.techcorp.cl',
      smtp_password: 'smtp_pass_2024',
      s3_bucket: 'techcorp-empleados-prod',
      redis_url: 'redis://localhost:6379',
      node_env: 'production',
      debug_mode: true,
    };
  }
}
