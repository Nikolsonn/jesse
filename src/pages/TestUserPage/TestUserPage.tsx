import {type FC} from 'react';
import {Card} from '@telegram-apps/telegram-ui';

import {Page} from '@/components/Page.tsx';
import {TEST_DATA} from "@/pages/TestDataUtils/testData.ts";

export const TestUserPage: FC = () => {
    // Sort items by price in descending order

    return (
        <Page back={true}>
            <div>
                <div>
                    {TEST_DATA.map(items => (
                        <Card key={items.imgSrc} style={{ margin: "10px" }}>
                            <img
                                src={items.imgSrc}
                                style={{ width: 254, height: 308, objectFit: 'cover' }}
                            />
                            <Card.Cell>
                                <span>{items.title}</span>
                            </Card.Cell>
                        </Card>
                    ))}
                </div>
            </div>
        </Page>
    );
};
