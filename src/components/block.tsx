import {FC, PropsWithChildren} from "react";

const Block: FC<PropsWithChildren & {className?: string}> = ({children, className}) => {
    return (
        <div className={`py-6 ${className || ""}`}>
            {children}
        </div>
    );
};

export default Block;