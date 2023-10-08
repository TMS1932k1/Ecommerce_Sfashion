import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppSelector} from '../stores/store';
import {NavigationContainer} from '@react-navigation/native';
import {AuthScreen, HomeScreen} from '../screens';

const Stack = createNativeStackNavigator<RootNavigatorParams>();

export default function RootNavigator() {
  const user = useAppSelector(state => state.authState.user);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        ) : (
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type RootNavigatorParams = {
  HomeScreen: undefined;
  AuthScreen: undefined;
};
