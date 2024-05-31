import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '../lib/utils';
import { Title } from './title';

interface ISectionProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
	title?: string;
}

const Section: FC<ISectionProps> = ({
	children,
	className,
	title,
	...props
}) => {
	return (
		<section
			className={cn(
				'container min-h-96 w-full py-10 text-lg xl:py-24 xl:text-xl',
				className
			)}
			{...props}>
			{title && (
				<Title size='xl' className='relative mb-6 leading-none xl:mb-12'>
					{title}
				</Title>
			)}
			{children}
		</section>
	);
};

export default Section;
