# API REST TechCorp - Portal de Empleados

> **ADVERTENCIA: Este proyecto contiene vulnerabilidades de seguridad INTENCIONALMENTE PLANTADAS para fines educativos. NUNCA desplegar en produccion.**

API REST desarrollada con NestJS como material de practica para el curso de **Desarrollo Seguro Avanzado**. Contiene 13 vulnerabilidades basadas en OWASP Top 10 (2021) que los estudiantes deben identificar, explotar y remediar.

## Stack Tecnico

- **Framework:** NestJS
- **Lenguaje:** TypeScript
- **ORM:** TypeORM
- **Base de datos:** SQLite en memoria (sql.js) — no requiere instalar nada adicional
- **Autenticacion:** JWT
- **Puerto:** 3000

## Requisitos Previos

- Node.js >= 18
- npm

> No se necesita instalar PostgreSQL ni ningun motor de base de datos. La BD se crea automaticamente en memoria al iniciar la aplicacion y se puebla con datos de prueba.

## Instalacion y arranque

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar la aplicacion (el seed se ejecuta automaticamente al arrancar)
npm run start:dev
```

Listo. Al iniciar veras en consola:

```
🌱 Sembrando base de datos en memoria...
✅ Seed completado: 4 usuarios, 8 empleados
API TechCorp corriendo en http://localhost:3000
```

> **Nota:** Como la base de datos es en memoria, los datos se reinician cada vez que reinicias la aplicacion. Esto es intencional para el ejercicio.

## Endpoints Disponibles

### Auth
| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| POST | `/auth/login` | Login con email y password |
| POST | `/auth/register` | Registro de usuario |
| GET | `/auth/profile` | Perfil del usuario autenticado |
| POST | `/auth/logout` | Logout (solo cliente) |

### Empleados
| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/empleados` | Listar todos los empleados |
| GET | `/empleados/:id` | Detalle de empleado por ID |
| POST | `/empleados` | Crear empleado |
| PUT | `/empleados/:id` | Actualizar empleado |
| DELETE | `/empleados/:id` | Eliminar empleado |

### Admin
| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/admin/usuarios` | Listar usuarios del sistema |
| GET | `/admin/logs` | Logs de actividad |
| POST | `/admin/reset-password` | Reset de contrasena |

### Busqueda
| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/busqueda?q=termino` | Buscar empleados |

### Config
| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/config/sistema` | Configuracion del sistema |

## Usuarios de Prueba

| Email | Contrasena | Rol |
|-------|------------|-----|
| admin@techcorp.cl | admin123 | admin |
| empleado@techcorp.cl | empleado123 | empleado |
| rrhh@techcorp.cl | rrhh2024 | rrhh |
| gerencia@techcorp.cl | gerencia456 | gerencia |

## Ejemplo de Login

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@techcorp.cl", "password": "admin123"}'
```

## Vulnerabilidades Plantadas

Este proyecto contiene **13 vulnerabilidades** intencionalmente plantadas, identificadas con el formato `[VULN-XX]` en los comentarios del codigo fuente. Estan basadas en las categorias de **OWASP Top 10 (2021)**:

- **A01:2021** - Broken Access Control
- **A02:2021** - Cryptographic Failures
- **A03:2021** - Injection
- **A05:2021** - Security Misconfiguration
- **A07:2021** - Identification and Authentication Failures
- **A08:2021** - Software and Data Integrity Failures
- **A09:2021** - Security Logging and Monitoring Failures

### Ejercicio para Estudiantes

1. **Identificar** cada vulnerabilidad buscando los comentarios `[VULN-XX]`
2. **Explotar** cada vulnerabilidad con herramientas como cURL, Postman o Burp Suite
3. **Documentar** el impacto y riesgo de cada una
4. **Remediar** cada vulnerabilidad aplicando las mejores practicas de seguridad

## Licencia

Uso exclusivamente educativo. No usar en produccion.
