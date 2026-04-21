import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { AllExceptionsFilter } from './common/all-exceptions.filter.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 // Cors permisivo 
 // Permite cualquier origin 
 // un sitio malicioso puede hacer requests a esta API desde el navegador de la víctima sin restricciones
  app.enableCors({
    origin: '*',
    credentials: true,
    methods: '*',
  });
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(3000);
  console.log('API TechCorp corriendo en http://localhost:3000');
}
bootstrap();
