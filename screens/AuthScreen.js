import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Auth = ({ onLogin }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Set Authentication to Proceed :</Text>
    <TouchableOpacity style={styles.button} onPress={onLogin}>
      <Text style={styles.buttonText}>Go to Settings</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    width: '100%',
    height: '20%',
    paddingHorizontal: '19%',
    fontSize: 16,
    position: 'absolute',
    bottom: 0,
    color: '#000',
  },
  button: {
    position: 'absolute',
    bottom: 64,
    width: 200,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 24,
    backgroundColor: '#253DA1',
  },
  buttonText: {
    fontWeight: '700',
    color: 'white',
  },
});

export default Auth;
