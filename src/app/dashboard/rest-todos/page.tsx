export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { getUserSessionServer } from '@/auth/actions/auth-actions';
import prisma from '@/lib/prisma';
import { NewTodo } from '@/todos/components/NewTodo';
import { TodosGrid } from '@/todos/components/TodosGrid';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Listado de TODOS',
  description: 'Listado de TODOS',
};

export default async function RestTodosPage() {
  const user = await getUserSessionServer();

  if (!user) {
    redirect('/api/auth/signin');
  }
  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: { description: 'asc' },
  });

  return (
    <>
      <div className='w-full px-3 mx-5 mb-5'>
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </>
  );
}
