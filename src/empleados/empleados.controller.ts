import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { EmpleadosService } from './empleados.service.js';

@Controller('empleados')
export class EmpleadosController {

  constructor(private readonly empleadosService: EmpleadosService) {}

  @Get()
  findAll() {
    return this.empleadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empleadosService.findOne(+id);
  }

  @Post()
  create(@Body() body: any) {
    return this.empleadosService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.empleadosService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empleadosService.remove(+id);
  }
}
