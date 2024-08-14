import type { Level } from '../types/level';

export const levels: Level[] = [
	{ title: 'Magreza', color: '#E2E8F0', icon: 'down', imc: [0, 18.5] },
	{ title: 'Normal', color: '#22C55E', icon: 'up', imc: [18.6, 24.9] },
	{ title: 'Sobrepeso', color: '#EAB308', icon: 'down', imc: [25, 29.9] },
	{ title: 'Obesidade', color: '#EF4444', icon: 'down', imc: [30, 99.9] }
];
