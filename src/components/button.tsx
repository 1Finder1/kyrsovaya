import {FC, PropsWithChildren} from "react";


interface Props  extends PropsWithChildren{
    variant?: 'primary' | 'secondary';
    className?: string;
}

const Button: FC<Props> = ({variant, children, className}) => {
    const variantClassname = variant === "primary"? "bg-primary": "bg-secondary"
    return (
        <button className={`border-none outline-0 ${variantClassname} ${className || ""} rounded-xl px-4 py-3 text-white font-semibold`}>
            {children}
        </button>
    );
};

export default Button;