import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useEffect, useState} from 'react';


export default function App() {
  const [text, setText] = useState('Hi');
  useEffect(() => {
    console.log(text)
    
  }, [text]);

  function handleClick(e){
    e.preventDefault();
    setInterval(() => {
      setText(Date(Date.now()));
    }, 1000);

      

  
  }
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text style={styles.myText} onPress={handleClick}>{text}</Text>
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
  myText:{
    color: 'red',
    fontSize: 20,
    backgroundColor: 'yellow'
  }
});
