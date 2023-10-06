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
import {useEffect, useState} from 'react';
import {ModeAuth, ValueInput} from '../types';
import {regexEmail, regexPassword, regexUserName} from '../utils';

export default function AuthScreen() {
  // Auth mode: Login and SignUp
  const [mode, setMode] = useState(ModeAuth.Login);

  // Check all infomations which are valid
  const [valid, setValid] = useState(false);

  // Auth Info: userName, email, password, confirmPassword, agreement
  const [userName, setUserName] = useState<ValueInput>({
    value: '',
    isValid: false,
  });
  const [email, setEmail] = useState<ValueInput>({
    value: '',
    isValid: false,
  });
  const [password, setPassword] = useState<ValueInput>({
    value: '',
    isValid: false,
  });
  const [confirmPassword, setConfirmPassword] = useState<ValueInput>({
    value: '',
    isValid: false,
  });
  const [agreement, setAgreeMent] = useState(false);

  useEffect(() => {
    // Set with login [email and password]
    if (mode === ModeAuth.Login) {
      setValid(email.isValid && password.isValid);
    }

    // Set with sign up [userName, email, password and confirmPassword]
    if (mode === ModeAuth.SignUp) {
      setValid(
        userName.isValid &&
          email.isValid &&
          password.isValid &&
          confirmPassword.isValid &&
          agreement,
      );
    }
  }, [userName, email, password, confirmPassword, mode, agreement]);

  // Set mode with [modeAuth: ModeAuth]
  function changeMode(modeAuth: ModeAuth) {
    setMode(modeAuth);
  }

  function onSubmit() {}

  // Set and check valid for userName with [value: string]
  function onChangeUserName(value: string) {
    setUserName({value: value, isValid: regexUserName(value)});
  }

  // Set and check valid for email with [value: string]
  function onChangeEmail(value: string) {
    setEmail({value: value, isValid: regexEmail(value)});
  }

  // Set and check valid for password with [value: string]
  function onChangePassword(value: string) {
    setPassword({value: value, isValid: regexPassword(value)});
  }

  // Set and check valid for confirmPassword with [value: string]
  function onChangeConfirmPassword(value: string) {
    let isValid = regexPassword(value) && password.value === value;
    setConfirmPassword({value: value, isValid: isValid});
  }

  // Set agreement with [value: boolean]
  function onChangeAgreement(value: boolean) {
    setAgreeMent(value);
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
              value={userName.value}
              label="User Name"
              placeholder="JohnHam"
              isValid={userName.isValid}
              onChangeText={onChangeUserName}
            />
          )}
          <Input
            label="Email"
            style={styles.input}
            value={email.value}
            keyBoardType="email-address"
            placeholder="johnham123@gmail.com"
            isValid={email.isValid}
            onChangeText={onChangeEmail}
          />
          <Input
            style={styles.input}
            label="Password"
            value={password.value}
            secureTextEntry={true}
            placeholder="Eight characters, at least a letter and a number"
            isValid={password.isValid}
            onChangeText={onChangePassword}
          />
          {mode === ModeAuth.SignUp && (
            <Input
              style={styles.input}
              label="Confirm Password"
              value={confirmPassword.value}
              secureTextEntry={true}
              placeholder="Confirm your password"
              isValid={confirmPassword.isValid}
              onChangeText={onChangeConfirmPassword}
            />
          )}
          {mode === ModeAuth.SignUp && (
            <CheckboxText
              style={styles.checkbox}
              value={agreement}
              onChanged={onChangeAgreement}>
              By creating an account you have to agree with out them &
              condication
            </CheckboxText>
          )}
          <ElevatedButton
            style={styles.login}
            onPress={valid ? onSubmit : undefined}>
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
