import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {elevation} from './common/Styles';

interface SearchProps {
  setTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({setTerm}): JSX.Element => {
  const [input, setInput] = useState<string>('');

  function handleEndInput() {
    if (!input) return;
    setTerm(input.toLowerCase());
    setInput('');
  }

  return (
    <View style={[styles.container, styles.elevation]}>
      <AntDesign name="search1" style={styles.icon} />
      <TextInput
        value={input}
        onChangeText={text => setInput(text)}
        onEndEditing={handleEndInput}
        style={styles.input}
        placeholder="Trouve ton restau.."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margintop: 5,
    marginHorizontal: 25,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 40,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
  icon: {
    color: 'black',
    fontSize: 25,
    marginLeft: 10,
  },
  elevation,
});

export default Search;
