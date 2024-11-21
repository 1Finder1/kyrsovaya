import {FC} from "react";

import Star from "../static/star.svg"

interface Props {
    avatar: string
    name: string
    stars: number
    date: string
    text: string
}


const FeedbackCard: FC<Props> = ({avatar, date, name, stars, text}) => {
    return (
        <div className="rounded-lg p-4 flex flex-col gap-6 bg-white">
            <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-center">
                    <img src={avatar} alt="" className="w-[64px]"/>
                    <p className="uppercase font-semibold">{name}</p>
                </div>

                <p className="tracking-wider">{text}</p>
            </div>

            <div className="flex justify-between">
                <div className="flex gap-1">{new Array(stars).fill(0).map(() => <img src={Star} alt=""/>)}</div>
                <p className="text-sm">{date}</p>
            </div>
        </div>
    );
};

export default FeedbackCard;