import React from 'react';

import { Text } from 'react-native';
import CategoryList from '../../components/CategoryList';
import Heading from '../../components/Heading';
import Title from '../../components/Title';

import { DiscoverContainer,ContainerCategory } from './styles';

const Discover: React.FC = () => {
  return (
    <DiscoverContainer>
      <Heading>Discover</Heading>

      <ContainerCategory>
        <Title>Followed Categories</Title>
        <CategoryList />
      </ContainerCategory>

      <ContainerCategory>
        <Title>Popular Categories</Title>
        <CategoryList />
      </ContainerCategory>


    </DiscoverContainer>
  );
};

export default Discover;