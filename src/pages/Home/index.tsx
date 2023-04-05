import React from 'react';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import Button from '../../components/Button';
import tasks from '../../database';
import Card from '../../components/Card';

const Home: React.FC = () => {
	return (
		<Container display="flex" flexDirection="column" alignItems="center">
			<Heading>Lista de Tarefas</Heading>
			<Input type="text" placeholder="Descreva a tarefa..." />
			<Button>Adicionar</Button>

			{tasks.map((item) => (
				<Card
					key={item.id}
					title={item.description}
					date={item.createdAt}
				/>
			))}
		</Container>
	);
};

export default Home;
