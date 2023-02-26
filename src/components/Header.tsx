import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>Chope ton dejeuner</Text>
      <Text style={styles.boldHeader}>à Lyon !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 25,
    marginBottom: 10,
  },
  lightHeader: {
    fontSize: 35,
  },
  boldHeader: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export default Header;
