import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,} from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        duolingo
      </Text>
      <Text style={styles.text}>
        Lear a lenguage for free. <br/> 
        Forever.
      </Text>
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.t1}>GET STARTED</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.t2}>I ALREADY HAVE AN ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    marginTop: '20vh',
  },
  logo: {
    padding: 5,
    color: 'green',
    fontSize: 30,
  },
  text: {
    color: 'gray',
    fontSize: 15,
    padding: 10,
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#228B22',
    boxShadow: '1px 2px #006400',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    width: '80%',
    margin: '0 auto',
    border: '1px solid #222',
  },
  t1: {
    color: 'white',
  },
  button2: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    width: '80%',
    margin: '0 auto',
    border: '1px solid #ddd',
  },
  t2: {
    color: '#228B22',
  },
});
