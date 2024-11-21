import {Block} from "../../components";
import Woman from "../../static/women.png"
import Title from "../../components/title.tsx";

const OurPhoneBlock = () => {
    return (
        <Block className="p-4 rounded-xl bg-primaryL min-h-[290px] flex flex-col justify-center gap-4 relative">
            <Title white>Вызвать скорую помощь</Title>
            <div className="gap-3 bg-white rounded-xl flex flex-col lg:flex-row lg:justify-between p-3 lg:w-[calc(100%-320px)]">
                <p className="w-full lg:w-[400px]">Получить консультацию в экстренной ситуации, вызвать врача на дом или скорую медицинскую помощь вы можете по телефону:</p>
                <div className="rounded-xl p-3 bg-primary flex justify-center items-center">
                    <p className="text-2xl text-white font-semibold">8 800 555 35 35</p>
                </div>
            </div>
            <img src={Woman} alt="" className="w-[320px] absolute bottom-0 right-0 hidden lg:block"/>
        </Block>
    );
};

export default OurPhoneBlock;