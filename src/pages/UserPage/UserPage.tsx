import {useState, type FC} from 'react';
import {Card, FileInput} from '@telegram-apps/telegram-ui';

import {Page} from '@/components/Page.tsx';
import {TEST_DATA} from "@/pages/TestDataUtils/testData.ts";

export const UserPage: FC = () => {
    const [files, setFiles] = useState<File[]>();
    return (
        <Page back={true}>
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
            {
                files?.map((file) => {
                    const src = URL.createObjectURL(file);
                    return (
                        <img
                            key={file.name}
                            height={120}
                            src={src}
                            onLoad={() => URL.revokeObjectURL(src)}
                        />
                    )
                })
            }
            <FileInput
                multiple
                onChange={function noRefCheck(event){
                    if(!event.currentTarget.files) {
                        return;
                    }
                    const newFiles = Array.from(event.currentTarget.files);
                    setFiles(newFiles);
                }}
            />
        </Page>
    );
};
