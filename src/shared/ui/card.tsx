import type { FC } from 'react';
import { cn } from '../lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import grain_bg from '../assets/grain_bg.svg';

const CardVariants = cva(
	'relative max-w-prose overflow-hidden rounded-lg border p-6 leading-tight',
	{
		variants: {
			variant: {
				default: 'bg-card shadow-lg',
				secondary: 'bg-muted/10'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	}
);

interface IProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof CardVariants>,
		React.PropsWithChildren {}

const Card: FC<IProps> = ({
	children,
	className,
	variant,
	title,
	...props
}) => {
	return (
		<div className={cn(CardVariants({ variant, className }))} {...props}>
			{variant === 'default' && (
				<img
					src={grain_bg}
					className='pointer-events-none absolute left-0 top-0 z-0 h-full w-full object-cover opacity-20'
				/>
			)}
			<h2 className='z-10 mb-4 text-xl font-semibold lg:text-2xl'>{title}</h2>
			{children}
		</div>
	);
};

export default Card;
