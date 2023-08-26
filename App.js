import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  const [nroYksi, setNroYksi] = useState('');

  const [nroKaksi, setNroKaksi] = useState('');

  const [tulos, setTulos] = useState('');

  const buttonPlusPressed = () => { 
    setTulos(parseInt(nroYksi) + parseInt(nroKaksi)); 
  };

  const buttonMinusPressed = () => { 
    setTulos(parseInt(nroYksi) - parseInt(nroKaksi)); 
  };

  return (
    <View style={styles.container}>
      <Text>Result: {tulos}</Text> 
      <TextInput inputMode='numeric' style={styles.input} onChangeText={nroYksi => setNroYksi(nroYksi)} value={nroYksi}/>
      <TextInput inputMode='numeric' style={styles.input} onChangeText={nroKaksi => setNroKaksi(nroKaksi)} value={nroKaksi}/>
      <View style={{ flexDirection:'row'}}>
      <Button onPress={buttonPlusPressed} title="+" />
      <Button onPress={buttonMinusPressed} title="-" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1
  },
});
