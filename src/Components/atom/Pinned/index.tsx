import React, { useCallback } from "react";
import {
    Component,
    Repo,
    Title,
    Legend,
    Language,
    Branch,
    Circulo,
    Head,
    Bagder,
    Tag,
    Description,
    Link
} from "./styled";
import { GoRepoForked } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiBookBookmark } from 'react-icons/bi'

interface repoProps {
    name?: string;
    description?: string;
    html_url?: string;
    language?: string;
    visibility?: string;
}

const Pinned: React.FC<repoProps> = ({ name, description, html_url, language, visibility }) => {

    const fn = useCallback((text: string, count: number = 0) => {
        if (text != null && text.length > 1) {
            return text.substr(0, count) + (text.length > count ? " ..." : "");
        } else {
            return "Sem Descrição :)"
        }
    },[])
    
    
    const treatmentString = useCallback((text: string)=>{
        if (text != null && text.length > 1) {
            return text;
        } else {
            return 'Sem Tag';
        }
    },[])



    return (
        <Component>
            <div>
                <Repo>
                    <Head>
                        <Title>
                            <BiBookBookmark></BiBookBookmark><Link href={html_url}>{fn(name || '', 19)}</Link>
                        </Title>
                        <Bagder>
                            <Circulo>{treatmentString(visibility || '')}</Circulo>
                            <BsThreeDotsVertical></BsThreeDotsVertical>
                        </Bagder>
                    </Head>
                    <Description>{fn(description || '', 80)}</Description>
                </Repo>
                <Legend>
                    <Language><Tag language={language} />{treatmentString(language || '')}</Language><GoRepoForked></GoRepoForked>
                    <Branch>
                        1
                    </Branch>
                </Legend>
            </div>
            <div></div>
        </Component>
    );
};

export default Pinned;
