import {FC} from "react";

interface Props {
    title: string,
    items: string[]
}

const FooterPart: FC<Props> = ({title, items}) => {
    return (
        <div className="flex flex-col gap-4">
            <p>{title}</p>
            <div className="flex flex-col gap-3">
                {items.map(item => <p className="text-xs">{item}</p>)}
            </div>
        </div>
    );
};

export default FooterPart;