import { Controller, Get, Query } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Controller('busqueda')
export class BusquedaController {
  constructor(private dataSource: DataSource) {}

  @Get()
  async buscar(@Query('q') q: string) {
    if (!q) {
      return { message: 'Proporcione un término de búsqueda con ?q=termino' };
    }

    const result = await this.dataSource.query(
      `SELECT * FROM empleados WHERE nombre LIKE '%${q}%' OR cargo LIKE '%${q}%' OR departamento LIKE '%${q}%'`,
    );

    return {
      termino: q,
      resultados: result.length,
      empleados: result,
    };
  }
}
