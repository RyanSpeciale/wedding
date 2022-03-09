import { Box } from "grommet";
import { Carousel } from "grommet";
import Image from "next/image";
import styles from '../styles/slides.module.css'
import img1 from '../photos/1.jpg';
import img2 from '../photos/2.jpg';
import img3 from '../photos/3.jpg';
import img4 from '../photos/4.jpg';
import img5 from '../photos/5.jpg';
import img6 from '../photos/6.jpg';
import img7 from '../photos/7.jpg';
import img8 from '../photos/8.jpg';
import img9 from '../photos/9.jpg';
import img10 from '../photos/10.jpg';
import img11 from '../photos/11.jpg';
import img12 from '../photos/12.jpg';
import img13 from '../photos/13.jpg';
import img14 from '../photos/14.jpg';
import img15 from '../photos/15.jpg';
import img16 from '../photos/16.jpg';
import img17 from '../photos/17.jpg';

const Slides = () => {
    return (
        <div>
            <Box height='medium' width='medium' round='medium'  overflow='hidden'>
                <Carousel fill play={4000} controls={false} >
                    <Image alt='photos of LR' src={img1}/>
                    <Image alt='photos of LR' src={img2}/>
                    <Image alt='photos of LR' src={img3}/>
                    <Image alt='photos of LR' src={img4}/>
                    <Image alt='photos of LR' src={img5}/>
                    <Image alt='photos of LR' src={img6}/>
                    <Image alt='photos of LR' src={img7}/>
                    <Image alt='photos of LR' src={img8}/>
                    <Image alt='photos of LR' src={img9}/>
                    <Image alt='photos of LR' src={img10}/>
                    <Image alt='photos of LR' src={img11}/>
                    <Image alt='photos of LR' src={img12}/>
                    <Image alt='photos of LR' src={img13}/>
                    <Image alt='photos of LR' src={img14}/>
                    <Image alt='photos of LR' src={img15}/>
                    <Image alt='photos of LR' src={img16}/>
                    <Image alt='photos of LR' src={img17}/>    
                </Carousel>
            </Box>
        </div>
    );
};

export default Slides;