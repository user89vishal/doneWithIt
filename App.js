import React, {useState} from 'react';
import {View} from 'react-native';

import WelcomeScreen from './apps/screens/WelcomeScreen';
import ViewImageScreen from './apps/screens/ViewImageScreen';
import AppText from './apps/components/AppText';
import AppButton from './apps/components/AppButton';
import Card from './apps/components/Card';
import ListingDetailsScreen from './apps/screens/ListingDetailsScreen';
import MessagesScreen from './apps/screens/MessagesScreen';
import MyAccountScreen from './apps/screens/AccountScreen';
import AppScreen from './apps/components/Screen';

import Icon from './apps/components/Icon';
import ListItem from './apps/components/ListItem';
import AccountScreen from './apps/screens/AccountScreen';
import ListingScreen from './apps/screens/ListingScreen';
import AppTextInput from './apps/components/AppTextInput';
import AppPicker from './apps/components/AppPicker';

const categories = [
  {label: 'Furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Cameras', value: 3},
];

function App() {
  const [category, setCategory] = useState();

  return (
    <AppScreen>
      <AppPicker
        icon="th-list"
        items={categories}
        onItemSelect={(item) => setCategory(item)}
        placeholder="category"
        selectedItem={category}
      />
      <AppTextInput placeholder="email" icon="envelope" />
    </AppScreen>
  );
}

export default App;
