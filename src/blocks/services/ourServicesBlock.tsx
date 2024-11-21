import {Block, ServiceCard, Title} from "../../components";

import Blood from "../../static/blood.png"

const OurServicesBlock = () => {
    return (
        <Block className="flex flex-col gap-6">
            <Title>Наши услуги</Title>
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
                <ServiceCard img={Blood} description="Сбор общего анализа крови, на пневмонию и т.д."
                             header="Анализы на дому" buttonContent="Заказать"/>
                <ServiceCard img={Blood} description="Сбор общего анализа крови, на пневмонию и т.д."
                             header="Анализы на дому" buttonContent="Заказать"/>
                <ServiceCard img={Blood} description="Сбор общего анализа крови, на пневмонию и т.д."
                             header="Анализы на дому" buttonContent="Заказать"/>
            </div>
        </Block>
    );
};

export default OurServicesBlock;