import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Home from './screens/home';
import Perfil from './screens/perfil';

//npm i @react-navigation/bottom-tabs
//npm i @expo/vector-icons
//npm i @react-navigation/native
//npm i @rneui/themed

const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} options={{
          headerShown: false,
          tabBarActiveTintColor: '#8a2be2',
          tabBarInactiveTintColor: 'black',
          tabBarLabelStyle: {fontSize: 20},
          tabBarIcon: (size, color) => {
            <MaterialIcons name="catching-pokemon" color={color} size={size} />
          }
        }} />

        <Tab.Screen name="Perfil" component={Perfil} options={{
          headerShown: false,
          tabBarActiveTintColor: '#8a2be2',
          tabBarInactiveTintColor: 'black',
          tabBarLabelStyle: {fontSize: 20},
          tabBarIcon: (size, color) => {
            <MaterialIcons name="catching-pokemon" color={color} size={size} />
          }
        }} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;