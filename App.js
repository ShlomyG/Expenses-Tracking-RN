/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import {navigationReadiness, navigationRef} from './src/navigation/RootNavigation';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppNavigator, {NavigationTheme} from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import store from './src/store/Store';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
        <NavigationContainer
          // theme={NavigationTheme}
          onReady={() => {
            navigationReadiness.setIsReady(true);
          }}
          ref={navigationRef}>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
