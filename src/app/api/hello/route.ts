import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({
    hola: 'Mundo',
  });
}
export async function POST(request: Request) {
  return NextResponse.json({
    hola: 'Mundo',
  });
}
export async function PUT(request: Request) {
  return NextResponse.json({
    hola: 'Mundo',
  });
}
