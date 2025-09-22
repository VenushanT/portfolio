import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
	({ className = "", ...props }, ref) => (
		<div
			ref={ref}
			className={
				"bg-white/5 rounded-xl shadow border border-gray-700/30 p-6 " + className
			}
			{...props}
		/>
	)
);
Card.displayName = "Card";
