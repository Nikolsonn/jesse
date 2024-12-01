import { type FC } from 'react';
import { Card, Button } from '@telegram-apps/telegram-ui';

import { Page } from '@/components/Page.tsx';

import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image3 from './assets/3.jpg';
import image4 from './assets/4.jpg';
import image5 from './assets/5.jpg';
import image6 from './assets/6.jpg';

type ImageDecsription = {
  src: string;
  title: string;
  price: string;
}

export const TestPage: FC = () => {
  const images: ImageDecsription[] = [
    { src: image1, title: 'Airplane', price: '100000€' },
    { src: image2, title: 'Sunglasses', price: '10€' },
    { src: image3, title: 'Beach cruise', price: '2999€' },
    { src: image4, title: 'Train voyage', price: '155€' },
    { src: image5, title: 'Sand safari', price: '599€' },
    { src: image6, title: 'Elk watching', price: '25€' },
  ];

  return (
    <Page back={true}>
      <div>
          {images.map(image => (
            <Card key={image.src} style={{ margin: "10px" }}>
              <img
                src={image.src}
                style={{ width: 254, height: 308, objectFit: 'cover' }}
              />
              <Card.Cell readOnly subtitle={image.price}>
                <span>{image.title}</span>
                <Button size='s' style={{ marginLeft: 10 }}>Accept</Button>
              </Card.Cell>
            </Card>
          ))}
      </div>
    </Page>
  );
};
