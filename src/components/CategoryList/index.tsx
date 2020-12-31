import React from 'react';
import data from './data';

import { 
  List, 
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info,
} from './styles';

interface ItemProps {
  item:typeof data[0];

}

const CategoryList: React.FC = () => {
  const CategoryItem: React.FC<ItemProps> = ({ item }) => (
    <CategoryContainer>
      <CategoryImage source={item.source} />
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle />
        <Info>{item.vizualizations}</Info>
      </CategoryStatus>
    </CategoryContainer>
  );
  function sortRandom(){
    return (Math.round(Math.random())-0.5);
  }
  return (
    <List>
      {data.sort(sortRandom).map(item => (
        <CategoryItem 
          key={item.name} 
          item={item}
        />
      ))}
    </List>
  );
};

export default CategoryList;
