import React, {useState} from 'react';
import {FlatList, StyleSheet, Platform, StatusBar, View} from 'react-native';
import ListItem from '../components/ListItem';

import AppScreen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessage = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
];

function MessagesScreen(props) {
  const [messages, setMessage] = useState(initialMessage);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessage(messages.filter((m) => m.id !== message.id));
  };

  return (
    <AppScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id}
        renderItem={({item}) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log('Pressed', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessage([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/mosh.jpg'),
            },
          ]);
        }}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
