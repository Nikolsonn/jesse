import {type FC} from 'react';
import {Button, Card} from '@telegram-apps/telegram-ui';

import {Page} from '@/components/Page.tsx';
import {TEST_DATA} from "@/pages/TestDataUtils/testData.ts";
import {CardChip} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";

export const AdminPage: FC = () => {
    return (
        <Page back={true}>
            <div>
                {TEST_DATA.map(adItem => (
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
                            <Button size='s'>Accept</Button>
                            <Button size='s' style={{marginLeft: 10}}>Reject</Button>
                        </Card.Cell>
                    </Card>
                ))}
            </div>
        </Page>
    );
};
