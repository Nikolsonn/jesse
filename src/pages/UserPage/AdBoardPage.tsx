import React, {CSSProperties, type FC, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Button, Card} from '@telegram-apps/telegram-ui';

import {Page} from '@/components/Page.tsx';
import {TEST_DATA} from "@/pages/TestDataUtils/testData.ts";

export const AdBoardPage: FC = () => {
    const [openCard, setOpenCard] = useState<string | null>(null);
    const [files] = useState<File[]>();

    const cardTitle: CSSProperties = {
    };
    
    const openCardTitle: CSSProperties = {
        ...cardTitle,
        overflow: 'scroll',
        maxWidth: '260px',
        maxHeight: '100%',
        backgroundColor: '#000000',
        borderRadius: '0 0 10px 10px',
    };

    const imgStyle: CSSProperties = {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
    };

    const openImgStyle: CSSProperties = {
        borderRadius: '10px 10px 0 0',
    };

    const cardStyle: CSSProperties = {
        width: 'calc(50% - 20px)', // 50% width minus margins
        margin: '10px',
        display: 'inline-block',
        verticalAlign: 'top',
        transition: 'all 0.3s ease-in-out',
    };

    const openCardStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        borderRadius: '0',
        background: 'rgba(0, 0, 0, 0.75)',
        transition: 'all 0.3s ease-in-out',
        zIndex: 1000,
    };

    const containerStyle: CSSProperties = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
    };

    const fixedButtonStyle: CSSProperties = {
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
    };

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/ad-request-page', {replace: true});
    };

    const handleOpenCard = (key: string) => {
        openCard === key ? setOpenCard(null) : setOpenCard(key);
    };

    return (
        <Page back={true}>
            <div style={containerStyle}>
                {TEST_DATA.map(items => (
                    <Card 
                        key={items.imgSrc} 
                        style={openCard === items.imgSrc ? openCardStyle : cardStyle} 
                        onClick={() => handleOpenCard(items.imgSrc)}
                    >
                        <img
                            src={items.imgSrc}
                            style={openCard === items.imgSrc ? openImgStyle : imgStyle}
                        />
                        <Card.Cell style={openCard === items.imgSrc ? openCardTitle : cardTitle}>
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
            <Button style={fixedButtonStyle} onClick={handleRedirect}>
                Send your advertisement
            </Button>
        </Page>
    );
};
