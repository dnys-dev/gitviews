import {
    Title,
    Caption,
    Nick,
    Head,
    Description,
    Action, Resume,
    Image,
    Loading,
    Container,
    Content
} from './styled';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

interface descriptionProps {
    value: string;
    img?: string;
    id?: string;
}
interface badgeListProps {
    title: string;
    caption: string;
    isFont: boolean;
    apelido?: string;
    loading?: boolean;
    resume: descriptionProps[];
}
const About: React.FC<badgeListProps> = ({ title, apelido, caption, isFont, loading, resume }) => {
    const [isFlag, setIsFlag] = useState<string | null>('')

    useEffect(() => {
        const flag = localStorage.getItem('flag');
        setIsFlag(flag);
    }, [])

    return (<Container>
        <Content isLoading={loading} >
            <Loading isLoading={loading} />
        </Content>
        <Head>
            <Title isFontColor={isFont}>{title}</Title>
            <Nick>{apelido}</Nick>
        </Head>
        <Caption isFontColor={isFont}>{caption}</Caption>
        <>{loading === false && <Resume isFontColor={isFont}>{isFlag === 'pt' ? 'Resumo' : 'Resume'}</Resume>}
            <Action isFontColor={isFont}>
                {resume.map((elem, key) =>
                    <> <Description key={key}>{elem.value}</Description>
                        <Image src={elem.img} />
                    </>
                )}

            </Action></>
    </Container>
    );
}

export default About;