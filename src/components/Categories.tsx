import React from 'react';
import {FlatList, View} from 'react-native';
import CategoryItem, {CategoryItemProps} from './CategoryItem';

interface CategoriesProps {
  categories: Array<CategoryItemProps>;
  handlePress: Function;
  term: string;
}

const Categories: React.FC<CategoriesProps> = ({
  categories,
  handlePress,
  term,
}): JSX.Element => {
  return (
    <View>
      <FlatList
        data={categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <CategoryItem
            index={index}
            header={item.header}
            image={item.image}
            active={item.header.toLowerCase() === term.toLowerCase()}
            handlePress={handlePress}
          />
        )}
        keyExtractor={category => category.header}
      />
    </View>
  );
};

export default Categories;
