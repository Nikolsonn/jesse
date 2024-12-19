import React, {type FC, useState} from 'react';
import {Button, Card} from '@telegram-apps/telegram-ui';

import {Page} from '@/components/Page.tsx';
import {TEST_DATA} from "@/pages/TestDataUtils/testData.ts";
import {CardChip} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";

interface AdItemState {
    status: 'pending' | 'accepted' | 'rejected';
}

export const AdminPage: FC = () => {
    const [adStates, setAdStates] = useState<AdItemState[]>(
        TEST_DATA.map(() => ({status: 'pending'}))
    );

    const handleAction = (index: number, action: 'accept' | 'reject') => {
        setAdStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = {status: action === 'accept' ? 'accepted' : 'rejected'};
            return newStates;
        });
    };

    return (
        <Page back={true}>
            <div>
                {TEST_DATA.map((adItem, index) => (
                    <Card key={adItem.imgSrc} style={{margin: "10px"}}>
                        <CardChip readOnly>
                            {adItem.price}{adItem.currency}
                        </CardChip>
                        <img
                            src={adItem.imgSrc}
                            style={{width: 254, height: 308, objectFit: 'cover'}}
                        />
                        <Card.Cell
                            readOnly
                            subtitle={adItem.title}
                        >
                            {adStates[index].status === 'pending' ? (
                                <>
                                    <Button size='s' onClick={() => handleAction(index, 'accept')}>Accept</Button>
                                    <Button size='s' style={{marginLeft: 10}}
                                            onClick={() => handleAction(index, 'reject')}>Reject</Button>
                                </>
                            ) : (
                                <div>{adStates[index].status === 'accepted' ? 'Accepted' : 'Rejected'}</div>
                            )}
                        </Card.Cell>
                    </Card>
                ))}
            </div>
        </Page>
    );
};
