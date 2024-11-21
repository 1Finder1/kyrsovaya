import {Block, Button, InteractiveCar} from "../../components";

const WelcomeBlock = () => {
    return (
        <Block className="flex justify-between items-center flex-col-reverse lg:flex-row">
            <div className="flex flex-col gap-6 items-start">
                <div className="flex flex-col gap-3">
                    <p className="font-[Molot] text-6xl text-primary">Поможем в сложной ситуации</p>
                    <p>Экстренная медицинская помощь без очередей и ожидания. Оперативный выезд, профессиональные врачи и современное оборудование</p>
                </div>
                <Button variant="primary">Вызвать помощь</Button>
            </div>
            <InteractiveCar />
        </Block>
    );
};

export default WelcomeBlock;