import {FC, ReactNode} from "react";
import Button from "./button.tsx";

interface Props {
    img: string;
    header: string
    description: ReactNode
    buttonContent: ReactNode
}

const ServiceCard: FC<Props> = ({
                                    img, buttonContent, description, header,
                                }) => {
    return (
        <div className="flex flex-col gap-4 pb-4 w-[388px] rounded-xl text-gray bg-white">
            <img src={img} alt="" className="object-cover w-full h-[150px] rounded-t-xl"/>
            <div className="flex flex-col gap-2 px-4">
                <p className="font-semibold text-2xl uppercase">{header}</p>
                <p>{description}</p>
            </div>
            <Button variant="primary" className="self-center">{buttonContent}</Button>
        </div>
    );
};

export default ServiceCard;