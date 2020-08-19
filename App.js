import React from 'react';
import WelcomeScreen from './apps/screens/WelcomeScreen';
import ViewImageScreen from './apps/screens/ViewImageScreen';
import {View} from 'react-native';
import AppText from './apps/components/AppText';
import AppButton from './apps/components/AppButton';

function App() {
  const handlePress = () => {
    console.log('Clicked');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <AppButton title="abc" onPress={handlePress} />
    </View>
  );
}

export default App;
