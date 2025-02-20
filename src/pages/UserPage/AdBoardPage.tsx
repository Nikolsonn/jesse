import React, {type FC, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Button, Card} from '@telegram-apps/telegram-ui';

import {Page} from '@/components/Page.tsx';
import {TEST_DATA} from "@/pages/TestDataUtils/testData.ts";

import {styles} from './AdBoardPage.style.ts';
import { AdDescription } from '../types.ts';

export const AdBoardPage: FC = () => {
    const [openCard, setOpenCard] = useState<AdDescription | null>(null);
    const [files] = useState<File[]>();


    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/ad-request-page', {replace: true});
    };

    return (
        <Page back={true}>
            {openCard && (
                <Card
                    key={openCard.imgSrc}
                    style={styles.openCard}
                    onClick={() => setOpenCard(null)}
                >
                    <img
                        src={openCard.imgSrc}
                        style={styles.openImg}
                        alt={openCard.title}
                    />
                    <Card.Cell style={styles.openCardTitle}>
                        <span>{openCard.title}</span>
                    </Card.Cell>
                </Card>
            )}
            <div style={styles.container}>
                {TEST_DATA.map(item => (
                    <Card
                        key={item.imgSrc}
                        style={styles.card}
                        onClick={() => setOpenCard(item)}
                    >
                        <img
                            src={item.imgSrc}
                            style={styles.img}
                            alt={item.title}
                        />
                        <Card.Cell style={styles.cardTitle}>
                            <span>{item.title}</span>
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
