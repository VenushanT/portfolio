import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "outline" | "ghost";
	size?: "sm" | "md" | "lg";
	asChild?: boolean;
}

const base =
	"inline-flex items-center justify-center font-semibold rounded transition focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<string, string> = {
	default:
		"bg-orange-600 text-white hover:bg-orange-700",
	outline:
		"border border-orange-500 text-orange-500 bg-transparent hover:bg-orange-500 hover:text-white",
	ghost:
		"bg-transparent text-orange-500 hover:bg-orange-100",
};

const sizes: Record<string, string> = {
	sm: "px-3 py-1 text-xs",
	md: "px-4 py-2 text-sm",
	lg: "px-6 py-3 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className = "", variant = "default", size = "md", asChild = false, ...props },
		ref
	) => {
		const Comp = asChild ? "span" : "button";
		return (
			<Comp
				ref={ref}
				className={[
					base,
					variants[variant] || variants.default,
					sizes[size] || sizes.md,
					className,
				].join(" ")}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";
