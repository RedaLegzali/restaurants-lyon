import React, {useEffect} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantItem from './RestaurantItem';

const Restaurants = ({term}): JSX.Element => {
  const [{data, loading, error}, searchRestaurants] = useRestaurants();

  useEffect(() => {
    searchRestaurants(term);
    console.log(data);
  }, [term]);

  if (loading) <ActivityIndicator size="large" marginVertical={30} />;
  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <>
          <Text style={styles.header}>Les meilleurs restaurants</Text>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <RestaurantItem
                name={item.name}
                image_url={item.image_url}
                rating={item.rating}
                price={item.price}
              />
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10,
  },
  error: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10,
    color: 'red',
  },
});

export default Restaurants;
