import { v4 as generateId } from 'uuid';
import { Task } from '../types';

const tasks: Task[] = [
	{
		id: generateId(),
		description: 'Estudar React com Typescript',
		createdAt: new Date().toLocaleDateString('pt-br', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		}),
	},
	{
		id: generateId(),
		description: 'Entregar atividade final do modulo',
		createdAt: new Date().toLocaleDateString('pt-br', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		}),
	},
	{
		id: generateId(),
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ipsum id sem rutrum efficitur. Suspendisse venenatis condimentum eros, id interdum risus imperdiet et. Donec condimentum a urna vel posuere. Integer dignissim enim turpis, semper venenatis quam maximus sed.',
		createdAt: new Date().toLocaleDateString('pt-br', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		}),
	},
];

export default tasks;
