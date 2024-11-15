import "./Image.css";
import ImageSlider from "./ImageSlider";
import { IMAGES, VIDEOS, LARGE_IMAGES } from "../../data/data";
// import { IMAGES, VIDEOS, LARGE_IMAGES } from "./data/data";

function Image() {
    return (
        <div className='App'>
            <div id="template">
                <div id="template_id1">
                    <h2>
                        <b>PROFESSIONAL </b>
                        RESUME TEMPLATES
                    </h2>

                </div>
                <div id="template_id2">
                    Choose from 15+ tailored-built templates that have landed thousands of
                    <br />
                    people like you the jobs they were dreaming of.
                </div>
            </div>

            <div className='container'>
                <ImageSlider images={IMAGES} slidesToShow={5} />
            </div>
        </div>
    );
}

export default Image;