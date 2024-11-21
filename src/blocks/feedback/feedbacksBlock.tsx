import {Block, FeedbackCard, Title} from "../../components";
import Avatar from "../../static/anton.png"

const FeedbacksBlock = () => {
    return (
        <Block className="flex flex-col gap-6">
            <Title>Отзывы</Title>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                <FeedbackCard name="Антон Татыржа"
                              date="17.11.2024"
                              stars={5}
                              avatar={Avatar}
                              text="Вызвал, через полчаса приехали, взяли анализы и прописали таблетки. Оказалось, что у меня пневмония, но меня вовремя спасли сотрудники данной компании"
                />
                <FeedbackCard name="Антон Татыржа"
                              date="17.11.2024"
                              stars={5}
                              avatar={Avatar}
                              text="Вызвал, через полчаса приехали, взяли анализы и прописали таблетки. Оказалось, что у меня пневмония, но меня вовремя спасли сотрудники данной компании"
                />
                <FeedbackCard name="Антон Татыржа"
                              date="17.11.2024"
                              stars={5}
                              avatar={Avatar}
                              text="Вызвал, через полчаса приехали, взяли анализы и прописали таблетки. Оказалось, что у меня пневмония, но меня вовремя спасли сотрудники данной компании"
                />
                <FeedbackCard name="Антон Татыржа"
                              date="17.11.2024"
                              stars={5}
                              avatar={Avatar}
                              text="Вызвал, через полчаса приехали, взяли анализы и прописали таблетки. Оказалось, что у меня пневмония, но меня вовремя спасли сотрудники данной компании"
                />
            </div>
        </Block>
    );
};

export default FeedbacksBlock;