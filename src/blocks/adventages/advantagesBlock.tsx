import {Block, Title} from "../../components";
import {AdvantageCard} from "../../components";

const AdvantagesBlock = () => {
    return (
        <Block className="flex flex-col gap-6">
            <Title>Наши преимущества</Title>
            <div className="flex gap-4 flex-col sm:flex-row items-center sm:items-stretch">
                <AdvantageCard title="Мгновенный выезд" description="Среднее время прибытия – от 20 минут"/>
                <AdvantageCard title="Опытные специалисты" description="Врачи с многолетним стажем и постоянным обучением."/>
                <AdvantageCard title="Широкий спектр услуг" description="Вызов скорой, транспортировка, консультации, анализы на дому"/>
            </div>
        </Block>
    );
};

export default AdvantagesBlock;