interface Props {
	className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Separator = ({ className }: Props) => {
	return <div className={`bg-slate-200 h-px my-5 ${className}`} />;
};
