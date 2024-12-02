import {Section, Cell, Image, List} from '@telegram-apps/telegram-ui';
import type {FC} from 'react';

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
                    <Link to="/test-page">
                        <Cell subtitle="Page that admin will have access to">Test page</Cell>
                    </Link>
                    <Link to="/test-user-page">
                        <Cell subtitle="Page for users">Test User page</Cell>
                    </Link>
                </Section>
            </List>
        </Page>
    );
};
