import {Section, Cell, Image, List} from '@telegram-apps/telegram-ui';
import React, {FC} from 'react';

import {Link} from '@/components/Link/Link.tsx';
import {Page} from '@/components/Page.tsx';

import tonSvg from './ton.svg';

export const IndexPage: FC = () => {
    return (
        <Page back={false}>
            <List>
                <Section
                    header="Features to implement"
                >
                    <Link to="/ton-connect">
                        <Cell
                            before={<Image src={tonSvg} style={{backgroundColor: '#007AFF'}}/>}
                            subtitle="Connect your TON wallet"
                        >
                            TON Connect
                        </Cell>
                    </Link>
                </Section>
                <Section
                    header="Advertisment dasboard Jesse"
                    footer="Page to have an acces to different client test pages"
                >
                    <Link data-testid="admin-page" to="/admin-page">
                        <Cell subtitle="User interface available for channel holder/admin">Admin page</Cell>
                    </Link>
                    <Link data-testid="ad-board-page" to="/ad-board-page">
                        <Cell subtitle="User interface available for channel visitors">User/Visitor page</Cell>
                    </Link>
                    <Link data-testid="ad-request-page" to="/ad-request-page">
                        <Cell subtitle="User interface for ad request send">User/Visitor ad request page</Cell>
                    </Link>
                </Section>
            </List>
        </Page>
    );
};
