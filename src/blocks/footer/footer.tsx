import Logo from "../../static/logo.svg"
import FooterPart from "./part.tsx";

const Footer = () => {
    return (
        <footer className="flex justify-center items-center gap-4 min-h-[400px] bg-white p-4">
            <div className="grid grid-col-1 lg:grid-cols-3 gap-8 lg:gap-16">
                <img src={Logo} alt="" className="w-[249px]"/>
                <FooterPart title="Услуги" items={["Анализы на дому", "Скорая помощь", "Перевозка в больницу"]}/>
                <FooterPart title="Документы" items={["Лицензия", "Политика конфиденциальности", "Оферта"]} />
            </div>
        </footer>
    );
};

export default Footer;