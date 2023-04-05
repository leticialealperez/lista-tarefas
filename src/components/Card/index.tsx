import React from 'react';
import CardStyled from './CardStyled';

interface CardProps {
	title: string;
	date: string;
}

const Card: React.FC<CardProps> = ({ title, date }) => {
	return (
		<CardStyled>
			<strong>{title}</strong>
			<small>{date}</small>
		</CardStyled>
	);
};

export default Card;
