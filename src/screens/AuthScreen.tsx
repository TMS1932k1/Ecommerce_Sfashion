import {View, StyleSheet, ScrollView} from 'react-native';
import {MyColors, MyDimesions, MyStylers} from '../constants';
import {
  AnotherAuth,
  CheckboxText,
  ElevatedButton,
  Header,
  Input,
  TextButton,
} from '../components';
import {useState} from 'react';
import {ModeAuth} from '../types';

export default function AuthScreen() {
  // Auth mode: Login and SignUp
  const [mode, setMode] = useState(ModeAuth.Login);

  // Set mode with [modeAuth: ModeAuth]
  function changeMode(modeAuth: ModeAuth) {
    setMode(modeAuth);
  }

  return (
    <ScrollView>
      <View style={[MyStylers.rootContainer, styles.container]}>
        <Header
          titleText={mode === ModeAuth.SignUp ? 'Sign Up' : 'Welcome!'}
          subtitle={
            mode === ModeAuth.SignUp
              ? 'Create an new account'
              : 'Please login or sign up to continue our app'
          }
        />
        <View style={styles.inputsContainer}>
          {mode === ModeAuth.SignUp && (
            <Input
              style={styles.input}
              label="User Name"
              placeholder="Please input your user name"
            />
          )}
          <Input
            label="Email"
            style={styles.input}
            keyBoardType="email-address"
            placeholder="Please input your email"
          />
          <Input
            style={styles.input}
            label="Password"
            secureTextEntry={true}
            placeholder="Please input your password"
          />
          {mode === ModeAuth.SignUp && (
            <Input
              style={styles.input}
              label="Confirm Password"
              secureTextEntry={true}
              placeholder="Please confirm your password"
            />
          )}
          {mode === ModeAuth.SignUp && (
            <CheckboxText style={styles.checkbox}>
              By creating an account you have to agree with out them &
              condication
            </CheckboxText>
          )}
          <ElevatedButton style={styles.login}>
            {mode === ModeAuth.Login ? 'Login' : 'Sign up'}
          </ElevatedButton>
          <TextButton
            style={styles.changeMode}
            onPress={() =>
              changeMode(
                mode === ModeAuth.Login ? ModeAuth.SignUp : ModeAuth.Login,
              )
            }>
            {mode === ModeAuth.Login
              ? "I don't have an account"
              : 'I had an account'}
          </TextButton>
          {mode === ModeAuth.Login && <AnotherAuth />}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: MyDimesions.kPaddingSmall,
    backgroundColor: MyColors.background,
  },
  inputsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: MyDimesions.kPaddingLarge,
  },
  input: {
    marginTop: MyDimesions.kPaddingLarge,
  },
  login: {
    marginTop: MyDimesions.kPaddingLarge,
  },
  changeMode: {
    marginTop: MyDimesions.kPaddingSmall,
  },
  checkbox: {
    marginTop: MyDimesions.kPaddingSmall,
    paddingHorizontal: MyDimesions.kPaddingSmall,
  },
});
