import { Module } from '@nestjs/common';
import { BusquedaController } from './busqueda.controller.js';

@Module({
  controllers: [BusquedaController],
})
export class BusquedaModule {}
