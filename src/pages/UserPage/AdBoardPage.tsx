import React, {type FC, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Button, Card } from '@telegram-apps/telegram-ui';

import {Page} from '@/components/Page.tsx';
import {TEST_DATA} from "@/pages/TestDataUtils/testData.ts";

export const AdBoardPage: FC = () => {
    const [files] = useState<File[]>();

    const cardStyle = {
        width: 'calc(50% - 20px)', // 50% width minus margins
        margin: '10px',
        display: 'inline-block',
        verticalAlign: 'top',
    };

    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    };

    const fixedButtonStyle = {
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
    };

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/ad-request-page', { replace: true });
    };

    return (
        <Page back={true}>
            <div style={containerStyle}>
                {TEST_DATA.map(items => (
                    <Card key={items.imgSrc} style={cardStyle}>
                        <img
                            src={items.imgSrc}
                            style={{width: '100%', height: 308, objectFit: 'cover'}}
                        />
                        <Card.Cell>
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
