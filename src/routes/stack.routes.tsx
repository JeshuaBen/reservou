import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Register";
import Home from "../screens/Home";

export type RootStackParamList = {
  Register: undefined;
  Home: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export const StackRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Register"
    >
      <Screen name="Register" component={Register} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
