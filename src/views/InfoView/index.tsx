import React from 'react';

import { Container, 
         Flex,
         Avatar,
         Column,
         CompanyIcon,
         LocationIcon,
         EmailIcon,
         BlogIcon,
         Hr,
         Link, 
        } 
    from './styles';

interface Props{
    username: string;
    name: string;
    avatarUrl: string;
    followers?: number;
    following?: number;
    company?: string;
    location?: string;
    email?: string;
    blog?: string;
    bio?: string;
}

const InfoView: React.FC<Props> = ({
    username,
    name,
    avatarUrl,
    followers,
    following,
    company,
    location,
    email,
    blog,
    bio,
}) => {
  return (
      <Container>
          <Flex>
              <Avatar src={avatarUrl} alt={username}/>
              <div>
                  <h1>{name}</h1>
                  <h2>{username}</h2>
              </div>
          </Flex>

          <Hr />

          <Column>
          <p>Contato</p>
            {company && (
                <li>
                    <CompanyIcon/>
                    <span>{company}</span>
                </li>
            )}
             {bio && (
                <li>
                    <span>{bio}</span>
                </li>
            )}
             {location && (
                <li>
                    <LocationIcon/>
                    <span>{location}</span>
                </li>
            )}
             {email && (
                <li>
                    <EmailIcon/>
                    <span>{email}</span>
                </li>
            )}
             {blog && (
                <li>
                    <BlogIcon/>
                    <span><Link href={blog}>{blog}</Link></span>
                </li>
            )}
          </Column>
      </Container>
  );
}

export default InfoView;