# Development

Pasos para levantar la app en desarrollo

1. Levantar la base de datos

```docker
docker compose up -d
```

2. Crear una copia del archivo .env.template y renombrarlo a .env
3. Reemplazar las variables de entorno
4. Ejecutar el comando ```npm install``` para instalar todas las dependencias
5. Ejecutar el comando ```npm run dev```
6. Ejecutar estos comandos de prisma:

```prisma
npx prisma migrate dev
npx prisma generate
```

7. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)

## Nota: Usuario por defecto

__usuario:__  <test1@google.com>
__password:__ 123456

## Prisma commands

```prisma
npx prisma init
npx prisma migrate dev
npx prisma generate
```
