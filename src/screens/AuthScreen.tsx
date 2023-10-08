import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {MyDimesions, MyStylers} from '../constants';
import {
  AnotherAuth,
  CheckboxText,
  ElevatedButton,
  Header,
  Indicator,
  Input,
  TextButton,
} from '../components';
import {useEffect, useState} from 'react';
import {ModeAuth, ValueInput} from '../types';
import {regexEmail, regexPassword, regexUserName, showToast} from '../utils';
import {useAppDispatch, useAppSelector} from '../stores/store';
import {loginAuth, signUpAuth} from '../stores/auth/authSlice';

export default function AuthScreen() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.authState.isLoading);
  const error = useAppSelector(state => state.authState.error);

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

  // Check [valid: boolean] and set value
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

  // If have autj's error will show error toast
  useEffect(() => {
    if (error && !isLoading) {
      console.log(error);
      showToast(error);
    }
  }, [error, isLoading]);

  // Set mode with [modeAuth: ModeAuth]
  function changeMode(modeAuth: ModeAuth) {
    setMode(modeAuth);
  }

  function onSubmit() {
    // With mode is login
    if (mode === ModeAuth.Login) {
      dispatch(loginAuth({email: email.value, password: password.value}));
    }

    // With mode is sign up
    if (mode === ModeAuth.SignUp) {
      dispatch(
        signUpAuth({
          name: userName.value,
          email: email.value,
          password: password.value,
          passwordConfirm: confirmPassword.value,
        }),
      );
    }
  }

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

  const content = (
    <View style={[MyStylers.rootContainer, styles.container]}>
      <Header
        style={styles.header}
        titleText={mode === ModeAuth.SignUp ? 'Sign Up' : 'Welcome!'}
        subtitle={
          mode === ModeAuth.SignUp
            ? 'Create an new account'
            : 'Please login or sign up to continue our app'
        }
      />
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
          By creating an account you have to agree with out them & condication
        </CheckboxText>
      )}
      {!isLoading && (
        <>
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
        </>
      )}
      {isLoading && <Indicator style={styles.indicator} size={'large'} />}
    </View>
  );

  if (Dimensions.get('screen').height >= 1024) {
    return content;
  }

  return <ScrollView>{content}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    padding: MyDimesions.kPaddingSmall,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
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
  indicator: {
    marginTop: MyDimesions.kPaddingLarge,
  },
});
