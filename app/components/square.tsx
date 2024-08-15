import {
	HandThumbDownIcon,
	HandThumbUpIcon
} from '@heroicons/react/24/outline';
import type { Level } from '../types/level';

type Props = {
	item: Level;
};

export const Square = ({ item }: Props) => {
	return (
		<div
			className='flex flex-1 flex-col items-center justify-center gap-3 rounded-md p-4'
			style={{ backgroundColor: item.colorBg, color: item.colorText }}>
			<div className='rounded-full border-0 bg-white p-5'>
				{item.icon === 'down' ? (
					<HandThumbDownIcon className='h-10 w-10 text-red-500' />
				) : (
					<HandThumbUpIcon className='h-10 w-10 text-emerald-600' />
				)}
			</div>
			<div className='text-2xl font-bold'>{item.title}</div>
			<div className='text-xs font-bold'>{`IMC entre ${item.imc[0]} e ${item.imc[1]}`}</div>
			{item.yourImc && (
				<div className='flex flex-col items-center gap-5'>
					<div className='mt-5 rounded-md bg-black/10 p-2 px-5 text-center text-base font-bold'>
						Seu IMC é {item.yourImc} Kg/m²
					</div>
					<p className='text-sm text-justify'>{item.description}</p>
				</div>
			)}
		</div>
	);
};
