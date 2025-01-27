export const dynamic = 'force-dynamic';
export const revalidate = 0;

import prisma from '@/lib/prisma';
import { NewTodo } from '@/todos/components/NewTodo';
import { TodosGrid } from '@/todos/components/TodosGrid';

export const metadata = {
  title: 'Listado de TODOS',
  description: 'Listado de TODOS',
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });

  return (
    <>
      <div className='w-full px-3 mx-5 mb-5'>
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </>
  );
}
