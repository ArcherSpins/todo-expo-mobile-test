// @flow
import React, {useCallback, useMemo, useState} from 'react';
import {View, SafeAreaView, StyleSheet, StatusBar, Alert} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import Home from './src/screens/HomeScreen';
import Auth from './src/screens/AuthScreen';

export default () => {
  const [isAuth, setAuth] = useState(false);

  const memoizedOptions = useMemo(() => {
    return {
      cancelLabel: 'Cancel Login',
      promptMessage: 'Verify yourself',
    };
  }, []);

  /**
   * The authorization method calls expo-local-authentication when clicking on the "Go to settings" button
   * @param options - options for authenticateAsync method
   */
  const handleLogin = useCallback(async () => {
    LocalAuthentication.authenticateAsync(memoizedOptions)
      .then(response => {
        Object.keys(response).forEach(() => {
          if (response.success) {
            setAuth(true);
          } else {
            setAuth(false);
            Alert.alert('Please try again!');
          }
        });
      })
      .catch(error => console.error('Error: ', error));

    return '';
  }, [memoizedOptions]);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        {isAuth ? <Home /> : <Auth onLogin={handleLogin} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
  },
});
