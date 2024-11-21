import {FC} from "react";

interface Props {
    title: string;
    description: string;
}


const AdvantageCard: FC<Props> = ({title, description}) => {
    return (
        <div className="flex flex-col gap-2 w-full max-w-[460px] bg-white rounded-xl px-4 py-3">
            <p className="font-semibold text-2xl text-gray">{title}</p>
            <p className="text-gray">{description}</p>
        </div>
    );
};

export default AdvantageCard;