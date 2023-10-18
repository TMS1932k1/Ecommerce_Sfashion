import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  AuthScreen,
  HomeScreen,
  ProductScreen,
  ResizePictureScreen,
} from '../screens';
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
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen
          name="ResizePictureScreen"
          component={ResizePictureScreen}
          options={{
            headerShown: false,
          }}
        />
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
  HomeDrawer: undefined;
  HomeScreen: undefined;
  AuthScreen: undefined;
  ProductScreen: {
    id: string;
  };
  ResizePictureScreen: {
    image: string;
  };
};
