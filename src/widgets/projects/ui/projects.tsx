import type { FC } from 'react';
import { projectsData } from '../api';
import Section from '@/shared/ui/section';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/shared/ui/carousel';
import ProjectsItem from './projects-item';

const Projects: FC = () => {
	const projects = projectsData;
	return (
		<Section title='Реализованные проекты' id='projects'>
			<Carousel>
				<CarouselContent className='gap-6 xl:gap-4'>
					{projects.map(project => (
						<CarouselItem
							className='lg:basis-1/2 xl:basis-1/3'
							key={project.title}>
							<ProjectsItem project={project} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className=' -left-4 h-8 w-8 rounded-lg lg:h-12 lg:w-12 2xl:-left-16' />
				<CarouselNext className='-right-4 h-8 w-8 rounded-lg lg:h-12 lg:w-12 2xl:-right-16' />
			</Carousel>
		</Section>
	);
};

export default Projects;
