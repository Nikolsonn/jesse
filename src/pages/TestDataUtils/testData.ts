import {adsDescription} from "@/pages/utils.ts";
import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image3 from './assets/3.jpg';
import image4 from './assets/4.jpg';
import image5 from './assets/5.jpg';
import image6 from './assets/6.jpg';

export const TEST_DATA: adsDescription[] = [
    {imgSrc: image1, title: 'Airplane', price: '100000', currency: "€", adStatus: "accepted"},
    {imgSrc: image2, title: 'Sunglasses', price: '10', currency: "€", adStatus: "accepted"},
    {imgSrc: image3, title: 'Beach cruise', price: '2999', currency: "€", adStatus: "accepted"},
    {imgSrc: image4, title: 'Train voyage', price: '155', currency: "€", adStatus: "accepted"},
    {imgSrc: image5, title: 'Sand safari', price: '599', currency: "€", adStatus: "pending"},
    {imgSrc: image6, title: 'Elk watching', price: '25', currency: "€", adStatus: "rejected"},
];
