import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg'

import { 
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText
 } from './styles';

const StreamList: React.FC = () => {
  const StringItem = () => (
    <StreamContainer> 
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>

        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>davidlpc1</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1} >
            Front-End com Next.js e Tailwind Css
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Programming
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>

          <TagView>
            <TagText>Web Development</TagText>
          </TagView>

        </TagRow>
      </StreamColumn>
    </StreamContainer>
  )

  return (
    <List>
      <StringItem />
      <StringItem />
      <StringItem />
      <StringItem />
    </List>
  );
};

export default StreamList;
