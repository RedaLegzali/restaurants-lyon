import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {elevation} from './common/Styles';

interface RestaurantItemProps {
  name: string;
  image_url: string;
  rating: number;
  price: string;
}

const RestaurantItem: React.FC<RestaurantItemProps> = ({
  name,
  image_url,
  rating,
  price,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image_url}} />
      <View style={styles.infoContainer}>
        <Text style={styles.header}>{name}</Text>
        <View style={styles.info}>
          <Text style={styles.rating}>{rating}</Text>
          <Text style={styles.money}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 100,
    borderRadius: 500,
    shadowOffset: {width: 1, height: 3},
    shadowColor: 'black',
    shadowOpacity: 0.1,
    elevation: 3,
    backgroundColor: 'white',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 400,
    marginLeft: 10,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  info: {
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  rating: {
    marginRight: 20,
  },
  money: {
    color: 'gold',
  },
});

export default RestaurantItem;
