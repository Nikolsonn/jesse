import React, {type FC, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Button, Card} from '@telegram-apps/telegram-ui';

import {Page} from '@/components/Page.tsx';
import {TEST_DATA} from "@/pages/TestDataUtils/testData.ts";

import {styles} from './AdBoardPage.style.ts';

export const AdBoardPage: FC = () => {
    const [openCard, setOpenCard] = useState<string | null>(null);
    const [files] = useState<File[]>();


    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/ad-request-page', {replace: true});
    };

    const handleOpenCard = (key: string) => {
        openCard === key ? setOpenCard(null) : setOpenCard(key);
    };

    return (
        <Page back={true}>
            <div style={styles.container}>
                {TEST_DATA.map(items => (
                    <Card 
                        key={items.imgSrc} 
                        style={openCard === items.imgSrc ? styles.openCard : styles.card} 
                        onClick={() => handleOpenCard(items.imgSrc)}
                    >
                        <img
                            src={items.imgSrc}
                            style={openCard === items.imgSrc ? styles.openImg : styles.img}
                            alt={items.title}
                        />
                        <Card.Cell style={openCard === items.imgSrc ? styles.openCardTitle : styles.cardTitle}>
                            <span>{items.title}</span>
                        </Card.Cell>
                    </Card>
                ))}
            </div>
            {files?.map((file) => {
                const src = URL.createObjectURL(file);
                return (
                    <img
                        key={file.name}
                        height={120}
                        src={src}
                        onLoad={() => URL.revokeObjectURL(src)}
                    />
                );
            })}
            <Button style={styles.fixedButton} onClick={handleRedirect}>
                Send your advertisement
            </Button>
        </Page>
    );
};
