import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import {elevation} from './common/Styles';

export interface CategoryItemProps {
  header: string;
  image: ImageSourcePropType;
  index: number;
  active: boolean;
  handlePress: Function;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  header,
  image,
  index,
  active,
  handlePress,
}): JSX.Element => {
  return (
    <TouchableOpacity onPress={() => handlePress(header)}>
      <View
        style={[
          styles.container,
          styles.elevation,
          index === 0 ? {marginLeft: 25} : {marginLeft: 15},
          active ? {backgroundColor: 'gold'} : {backgroundColor: 'white'},
        ]}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
        </View>
        <Text style={styles.header}>{header}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 35,
    height: 35,
    marginLeft: 6,
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 5,
  },
  header: {
    fontWeight: 'bold',
  },
  elevation,
});

export default CategoryItem;
