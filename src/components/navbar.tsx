import LOGO from "../static/logo.svg"
import Button from "./button.tsx";

const Navbar = () => {
    return (
        <header className="px-6 py-3 flex justify-between items-center border-b-[1px] border-grayLight mx-auto max-w-[1200px] w-full">
            <img src={LOGO} alt="" className="w-[128px]"/>
            <div className="flex gap-2">
                
            </div>
            <Button variant="primary">Вызвать помощь</Button>
        </header>
    );
};

export default Navbar;