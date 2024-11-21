import {FC, PropsWithChildren} from "react";

interface Props extends PropsWithChildren{
    white?: boolean
}

const Title: FC<Props> = ({children, white}) => {
    return (
        <p className={`uppercase font-semibold ${white ? 'text-white' : "text-black"} text-4xl text-center lg:text-left`}>{children}</p>
    );
};

export default Title;