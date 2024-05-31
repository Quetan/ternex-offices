import { cn } from '@/shared/lib/utils';
import type { FC } from 'react';

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
		className={cn('relative rounded-lg border bg-card p-6', className)}
		{...props}>
		<h2 className='mb-2 text-2xl font-semibold'>{title}</h2>
		<p className='pb-4 leading-tight text-muted-foreground'>{description}</p>
		<Icon className='absolute bottom-4 right-4 h-8 w-8 text-muted-foreground' />
	</div>
);

export default InstallationStep;
