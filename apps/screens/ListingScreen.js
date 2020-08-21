import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import AppScreen from '../components/Screen';
import Card from '../components/Card';
import Icon from '../components/Icon';
import colors from '../config/colors';

const listingData = [
  {
    id: 1,
    image: require('../assets/jacket.jpg'),
    title: 'Red jacket for sale',
    subTitle: '$100',
  },
  {
    id: 2,
    image: require('../assets/chair.jpg'),
    title: 'Coutch in great condition',
    subTitle: '$200',
  },
];

function ListingScreen(props) {
  return (
    <AppScreen style={styles.screen}>
      <FlatList
        data={listingData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            image={item.image}
            subTitle={item.subTitle}
          />
        )}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
