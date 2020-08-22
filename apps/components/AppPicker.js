import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';

import Icon from '../components/Icon';
import DefaultStyles from '../config/styles';
import AppText from './AppText';
import AppScreen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({icon, items, onItemSelect, selectedItem, placeholder}) {
  const [modelVisible, setModelVisible] = useState(false);

  const handlePickerItem = (item) => {
    console.log('here', item);
    setModelVisible(false);
    placeholder = item.label;
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModelVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <Icon
              name={icon}
              size={30}
              backgroundColor={DefaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <Icon
            name="angle-down"
            size={30}
            backgroundColor={DefaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modelVisible} animationType="slide">
        <AppScreen>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({item}) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModelVisible(false);
                  onItemSelect(item);
                }}
              />
            )}
          />
        </AppScreen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
