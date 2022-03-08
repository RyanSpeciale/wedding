import { Box } from "grommet";
import { Carousel } from "grommet";
import Image from "next/image";
import styles from '../styles/slides.module.css'
import image2 from '../photos/image2.jpg';
import image3 from '../photos/image3.jpg';
import image4 from '../photos/image4.jpg';
import image5 from '../photos/image5.jpg'

const Slides = () => {
    return (
        <div>
            <Box height='medium' width='medium' round='medium'  overflow='hidden'>
                <Carousel fill>
                    <Image alt='photos of LR' src={image}/>
                    <Image alt='photos of LR' src={image2}/>
                    <Image alt='photos of LR' src={image3}/>
                    <Image alt='photos of LR' src={image4}/>
                    <Image alt='photos of LR' src={image5}/>
                        
                </Carousel>
            </Box>
        </div>
    );
};

export default Slides;