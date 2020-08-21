import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import AppScreen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import Icon from '../components/Icon';

import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
  {
    title: 'My Listing',
    icon: {
      name: 'list-alt',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Message',
    icon: {
      name: 'envelope',
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mosh"
          subTitle="programmingwithmosh@gmail.com"
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={<Icon name="sign-out" backgroundColor="#ffe66d" />}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
