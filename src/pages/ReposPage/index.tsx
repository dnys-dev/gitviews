import React, { useEffect, useState } from 'react';
import Pinned from "../../Components/atom/Pinned/index";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  RepoIcon,
  Tab,
  Loading
} from './styles';

import InfoView from '../../views/InfoView';

import { APIRepo, APIUser, ReposQuery } from '../../model';
import About from '../../Components/atom/about';
import { username } from '../../data/constant';
// import Search from '../../Components/atom/search/search';
// import useQuery from '../../hooks/useQuery';

interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

const ReposPage: React.FC = () => {
  // const { username = '' } = useParams();
  const [data, setData] = useState<Data>();
  // const [query, setQuery] = useQuery<ReposQuery>();

  const resume = [{
    value: 'As permissões desta licença copyleft, estão condicionadas a disponibilizar o código fonte completo das obras sob a mesma licença. Os avisos de direitos autorais e licença devem ser preservados.'
  }]

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),

    ]).then(async responses => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: 'Erro ao carregar API' })
        return;
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();

      setData({
        user,
        repos,
      });
    });
  }, [username]);


  if (data?.error) {
    return <h1>{data.error}</h1>
  }

  if (!data?.user || !data?.repos) {
    return <Loading>Carregando....</Loading>
  }

  const TabContent = () => (
    <div className="content">
      <RepoIcon />

      <span className="label">{'Repositorios'}</span>
      <span className="number">{data.user?.public_repos}</span>
    </div>
  )
  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>
      <Main>
        <LeftSide>
          <InfoView
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
            bio={data.user.bio}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>
          <About
            title={'Codifique o seu futuro global agora'}
            caption={""}
            isFont={true}
            resume={resume}
          />
          {/* <Search
          onFilter={(search: string) => setQuery({ ...query, search, page: '1' })}
          /> */}
          <Repos>
            <div>

              {data.repos.map((elem, key) => (
                <Pinned
                  key={key}
                  name={elem.name}
                  description={elem.description}
                  html_url={elem.html_url}
                  language={elem.language}
                  visibility={elem.visibility}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
}

export default ReposPage;