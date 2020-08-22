import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import Icon from '../components/Icon';
import DefaultStyles from '../config/styles';

function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && (
        <Icon
          name={icon}
          size={30}
          backgroundColor={DefaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={DefaultStyles.text} {...otherProps} />
    </View>
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
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
