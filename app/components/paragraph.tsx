import type { Paragraph } from '../types/paragraph';

type ParagraphProps = {
	paragraph: Paragraph;
};

export const ParagraphItem = ({ paragraph }: ParagraphProps) => {
	return (
		<div>
			<h2 className='font-bold'>{paragraph.title}</h2>
			<p className='text-sm'>{paragraph.content}</p>
		</div>
	);
};
