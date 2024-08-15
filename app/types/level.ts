export type Level = {
	title: string;
	colorBg: string;
	colorText: string;
	icon: 'down' | 'up';
	imc: number[] | string;
	yourImc?: number | string;
	description: string;
};
