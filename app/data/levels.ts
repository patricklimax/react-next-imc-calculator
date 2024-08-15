import type { Level } from '../types/level';

export const levels: Level[] = [
	{
		title: 'Magreza',
		colorBg: '#1d4fd8',
		colorText: '#eff6ff',
		icon: 'down',
		imc: [0, 18.5],
		description:
			'Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.'
	},
	{
		title: 'Normal',
		colorBg: '#258d4b',
		colorText: '#f0fdf4',
		icon: 'up',
		imc: [18.6, 24.9],
		description:
			'Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.'
	},
	{
		title: 'Sobrepeso',
		colorBg: '#e6b319',
		colorText: '#fffde5',
		icon: 'down',
		imc: [25, 29.9],
		description:
			'Uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de entrar na faixa da obesidade pra valer.'
	},
	{
		title: 'Obesidade',
		colorBg: '#ef4444',
		colorText: '#ffd0d0',
		icon: 'down',
		imc: [30, 99.9],
		description:
			'Sinal de alerta! Chegou na hora de se cuidar. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.'
	}
];
