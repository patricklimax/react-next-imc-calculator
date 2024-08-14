import { levels } from '../data/levels';
import type { Level } from '../types/level';

export const calculateIMC = (height: number, weight: number) => {
	const imc = (weight / height ** 2).toFixed(2);

	for (const i in levels) {
		if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
			const levelCopy: Level = { ...levels[i] };

			levelCopy.yourImc = imc;

			return levelCopy;
		}
	}

	return null;
};
