import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get('take') ?? '10');
  const skip = Number(searchParams.get('skip') ?? '0');

  if (isNaN(take)) {
    return NextResponse.json(
      { msg: 'Take tiene que ser un número' },
      { status: 400 }
    );
  }

  if (isNaN(skip)) {
    return NextResponse.json(
      { msg: 'Skip tiene que ser un número' },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({ take: take, skip: skip });
  return NextResponse.json(todos);
}