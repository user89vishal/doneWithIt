import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

function Icon({name, size = 40, backgroundColor, iconColor = '#fff', style}) {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}>
      <Icons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Icon;
