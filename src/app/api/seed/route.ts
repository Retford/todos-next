import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function GET(request: Request) {
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      email: 'test1@gmail.com',
      name: 'test-user',
      password: bcrypt.hashSync('123456'),
      roles: ['admin', 'client', 'super-user'],
      todos: {
        create: [
          { description: 'Piedra del Alma', complete: true },
          { description: 'Piedra del Poder' },
          { description: 'Piedra del Tiempo' },
          { description: 'Piedra del Espacio' },
          { description: 'Piedra del Realidad' },
        ],
      },
    },
  });

  // await prisma.todo.createMany({
  //   data: [
  //     { description: 'Piedra del Alma', complete: true },
  //     { description: 'Piedra del Poder' },
  //     { description: 'Piedra del Tiempo' },
  //     { description: 'Piedra del Espacio' },
  //     { description: 'Piedra del Realidad' },
  //   ],
  // });

  return NextResponse.json({
    msg: 'Seed Executed',
  });
}
