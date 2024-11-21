import Car from "../static/car.png"

const InteractiveCar = () => {
    return (
        <div className='interactiveCar flex-grow-0 flex-shrink-0'>
            <img src={Car} alt="Car"/>
        </div>
    );
};

export default InteractiveCar;