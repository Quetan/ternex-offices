import type { FC } from 'react';
import type { IProject } from '../api';
import { cn } from '@/shared/lib/utils';
import { Title } from '@/shared/ui/title';
import bg from '@/shared/assets/grain_bg.svg';

interface IProps {
	project: IProject;
	className?: string;
}

const ProjectsItem: FC<IProps> = ({
	project: { title, description, thumbnail },
	className
}) => (
	<article
		className={cn(
			'relative flex h-full flex-col overflow-hidden rounded-lg p-6',
			className
		)}>
		<img
			src={bg}
			className='pointer-events-none absolute left-0 top-0 z-0 h-full w-full object-cover opacity-20'
		/>
		<img
			src={thumbnail}
			alt={title}
			className='z-10 mb-6 h-48 w-auto max-w-prose rounded-md object-cover'
		/>
		<Title size='default' className='z-10 mb-2 font-bold'>
			{title}
		</Title>
		<p className='max-w-prose text-sm text-muted-foreground lg:text-base lg:leading-tight'>
			{description}
		</p>
	</article>
);

export default ProjectsItem;
