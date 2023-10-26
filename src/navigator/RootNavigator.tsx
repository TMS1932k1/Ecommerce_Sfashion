import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthScreen, HomeScreen} from '../screens';
import {MyColors} from '../constants';

const Stack = createNativeStackNavigator<RootNavigatorParams>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          contentStyle: {backgroundColor: MyColors.background},
          headerStyle: {backgroundColor: MyColors.background},
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type RootNavigatorParams = {
  HomeScreen: undefined;
  AuthScreen: undefined;
};
