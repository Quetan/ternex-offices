import { cn } from '@/shared/lib/utils';
import type { FC } from 'react';
import grin_bg from '@/shared/assets/grain_bg.svg';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	description: string;
	Icon: React.ComponentType<React.SVGAttributes<SVGElement>>;
}

const InstallationStep: FC<IProps> = ({
	className,
	title,
	description,
	Icon,
	...props
}) => (
	<div
		className={cn(
			'relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:-translate-y-2 hover:shadow-lg dark:hover:drop-shadow-[0_0_120px_hsl(var(--primary))]',
			className
		)}
		{...props}>
		<img
			src={grin_bg}
			className='pointer-events-none absolute left-0 top-0 z-0 h-full w-full object-cover opacity-20'
		/>
		<h2 className='z-10 mb-2 text-xl font-semibold lg:text-2xl'>{title}</h2>
		<p className='pb-4 text-sm leading-tight text-muted-foreground lg:text-base'>
			{description}
		</p>
		<Icon className='absolute bottom-4 right-4 h-8 w-8 text-muted-foreground' />
	</div>
);

export default InstallationStep;
