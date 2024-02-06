import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import Programmer from './Assets/65782d32dfa40.jpeg';
import Title from './src/components/Title';
import Input from './src/components/Input';

const App = () => {
  return (
    <View>
      <Title />
      <ScrollView>
        <Input placeholder="Masukan nama anda" />
        <Input placeholder="Masukan password anda" />
        <Input placeholder="Masukan email anda" />
        <View style={style.container}>
          <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
          <View style={{width: 100, height: 100, backgroundColor: 'green'}} />
          <View style={{width: 100, height: 100, backgroundColor: 'blue'}} />
        </View>
        <Image
          source={require('./assets/programmer.jpeg')}
          style={style.image}
        />
        <Image source={Programmer} style={style.image} />
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={style.image}
        />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  image: {width: 200, height: 200},
});

export default App;
