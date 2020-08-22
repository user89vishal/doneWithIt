import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import AppScreen from '../components/Screen';
import ErrorMessage from '../components/ErrorMessage';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen(props) {
  return (
    <AppScreen style={styles.container}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(values) => console.log('Formik', values)}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
            <Image
              style={styles.logo}
              source={require('../assets/logo-red.png')}
            />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="envelope"
              onBlur={() => setFieldTouched('email')}
              onChangeText={handleChange('email')}
              keyboardType="email-address"
              placeholder="Email"
            />
            <ErrorMessage visible={touched.email} error={errors.email} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="unlock-alt"
              onBlur={() => setFieldTouched('password')}
              onChangeText={handleChange('password')}
              placeholder="Password"
              secureTextEntry={true}
            />
            <ErrorMessage visible={touched.password} error={errors.password} />
            <AppButton title="Submit" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
