import { slides, arrow } from "./slides";
import { useState } from "react";

export function Banner() {

    const [ currentIndex, setCurrentIndex ] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex( newIndex );
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex( newIndex );
    };

    return (
        <div className="max-w-[100%] h-[500px] w-full m-auto relative group hola">
            <div style={{backgroundImage:`url(${slides[currentIndex].src})`}} className="w-full h-full bg-center bg-cover duration-500">
            </div>
            <div onClick={nextSlide} className="hidden group-hover:block absolute top-[50%] -translate-x-0 tranlate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                {
                    arrow[0].svg
                }
            </div>
            <div onClick={prevSlide} className="hidden group-hover:block absolute top-[50%] -translate-x-0 tranlate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                {
                    arrow[1].svg
                }
            </div>
        </div>
    );
};