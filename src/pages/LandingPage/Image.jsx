import "./Image.css";
import ImageSlider from "./ImageSlider";
import { IMAGES, VIDEOS, LARGE_IMAGES } from "../../data/data";
// import { IMAGES, VIDEOS, LARGE_IMAGES } from "./data/data";

function Image() {
    return (
        <div className='App'>
            <div className='container'>
                <ImageSlider images={IMAGES} slidesToShow={5} />
            </div>
            <div className='container'>
                <ImageSlider images={VIDEOS} />
            </div>
            <div className='container'>
                <ImageSlider images={LARGE_IMAGES} />
            </div>
        </div>
    );
}

export default Image;