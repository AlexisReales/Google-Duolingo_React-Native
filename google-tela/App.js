import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Google</Text>
      </View>
      <View style={styles.searchBar}>
        <TextInput style={styles.input} placeholder="Search or type URL" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: '25vh',
  },
  header: {
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    border: '1px solid gray',
    borderRadius: 5,
    borderBottomColor: '#ccc',
    margin: 20,
    marginTop: 50,
  },
  input: {
    flex: 1,
    height: '100%',
    marginLeft: 10,
    fontSize: 16,
  },
  logo: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#4285f4',
  },
});

export default MainScreen;