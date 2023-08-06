import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import {navigationReadiness, navigationRef} from './src/navigation/RootNavigation';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import store from './src/store/Store';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <NavigationContainer
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
  container: {
    flex: 1,
  },
});

export default App;
