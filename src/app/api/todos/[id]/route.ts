import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import * as yup from 'yup';

interface Segmentes {
  params: Promise<{ id: string }>;
}
export async function GET(request: Request, { params }: Segmentes) {
  const { id } = await params;

  const todo = await prisma.todo.findFirst({ where: { id: id } });

  if (!todo) {
    return NextResponse.json(
      { msg: `No existe un todo con ese id: ${id}` },
      { status: 404 }
    );
  }

  return NextResponse.json(todo);
}

const putSchema = yup.object({
  description: yup.string().optional(),
  complete: yup.boolean().optional(),
});

export async function PUT(request: Request, { params }: Segmentes) {
  const { id } = await params;

  const todo = await prisma.todo.findFirst({ where: { id: id } });

  if (!todo) {
    return NextResponse.json(
      { msg: `No existe un todo con ese id: ${id}` },
      { status: 404 }
    );
  }

  try {
    const { complete, description } = await putSchema.validate(
      await request.json()
    );

    const updatedTodo = await prisma.todo.update({
      where: { id: id },
      data: { complete, description },
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
