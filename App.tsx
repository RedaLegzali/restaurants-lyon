import React, {useState} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import Categories from './src/components/Categories';
import {commonCategories} from './src/components/common/Categories';
import Restaurants from './src/components/Restaurants';

const App = (): JSX.Element => {
  const [term, setTerm] = useState<string>('burger');

  function handlePress(name: string): void {
    setTerm(name.toLowerCase());
  }

  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <Categories
        categories={commonCategories}
        handlePress={handlePress}
        term={term}
      />
      <Restaurants term={term} />
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  bodyText: {
    color: 'red',
  },
});

export default App;
