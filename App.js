// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from './src/screens/HomeScreen.js';
// import Notifications from './src/screens/Notifications.js';


// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={Notifications} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });








import { NativeBaseProvider } from 'native-base';
import ProfileScreen from './src/screens/ProfileScreen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'; //se importa para la creacion del hamburguesa
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //se importa para el menu de abajo
import Registro from './src/screens/Registro.js';
import ConfigurationScreen from './src/screens/ConfigScreen.js';

//import de las pantallas
import HomeScreen from './src/screens/HomeScreen.js';
import Notifications from './src/screens/Notifications.js';
//import para iconos
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabTwoScreen from './src/screens/DataDisplay.js';

const Drawer = createDrawerNavigator(); //Para el menu de hamburguesa

const Tab = createBottomTabNavigator(); //Para el menu de abajo

export default function App() {
  return (
    //Menu de abajo
    <NativeBaseProvider>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Registro" component={Registro} />
        <Tab.Screen name="ConfigurationScreen" component={ConfigurationScreen} />
        <Tab.Screen name="TabTwoScreen" component={TabTwoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>


/*Menu de hamburguesa
<NavigationContainer>
  <Drawer.Navigator initialRouteName='Home'>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="About" component={AboutScreen} />
  </Drawer.Navigator>
</NavigationContainer> 
*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});









// import ProfileScreen from './src/screens/ProfileScreen';
// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import { NativeBaseProvider } from 'native-base';
// import HomeScreen from './src/screens/HomeScreen.js';
// import Notifications from './src/screens/Notifications.js';
// import LoginScreen from './src/screens/loginScreen.js';

// const Drawer = createDrawerNavigator();

// export default function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     setIsAuthenticated(true);  // Cambia el estado a "autenticado" después de iniciar sesión
//   };

//   return (
//     <NativeBaseProvider>
//       <NavigationContainer>
//         {isAuthenticated ? (
//           <Drawer.Navigator initialRouteName="Home">
//           <Drawer.Screen name="Home" component={HomeScreen} />
//           <Drawer.Screen name="Notifications" component={Notifications} />
//         </Drawer.Navigator>

//       ) : (
//         <LoginScreen onLogin={handleLogin}/>  
//         )}
//         </NavigationContainer>
//     </NativeBaseProvider>
//   );
// }





// import React, { useState } from 'react';
// import { NativeBaseProvider } from 'native-base';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { StyleSheet } from 'react-native';

// // Import screens
// import HomeScreen from './src/screens/HomeScreen.js';
// import Notifications from './src/screens/Notifications.js';
// import Registro from './src/screens/Registro.js';
// import LoginScreen from './src/screens/loginScreen.js';
// import ProfileScreen from './src/screens/ProfileScreen.js';

// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <NativeBaseProvider>
//       <NavigationContainer>
//         {isLoggedIn ? (
//           <Tab.Navigator
//             screenOptions={({ route }) => ({
//               tabBarIcon: ({ focused, color, size }) => {
//                 let iconName;
//                 if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
//                 else if (route.name === 'Notifications') iconName = focused ? 'notifications' : 'notifications-outline';
//                 else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';
//                 else if (route.name === 'Registro') iconName = focused ? 'clipboard' : 'clipboard-outline';

//                 return <Ionicons name={iconName} size={size} color={color} />;
//               },
//               tabBarActiveTintColor: 'tomato',
//               tabBarInactiveTintColor: 'gray',
//             })}
//           >
//             <Tab.Screen name="Home" component={HomeScreen} />
//             <Tab.Screen name="Notifications" component={Notifications} />
//             <Tab.Screen name="Profile" component={ProfileScreen} />
//             <Tab.Screen name="Registro" component={Registro} />
//           </Tab.Navigator>
//         ) : (
//           <LoginScreen onLogin={() => setIsLoggedIn(true)} /> 
//         )}
//       </NavigationContainer>
//     </NativeBaseProvider>
//   );
//  }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });




// import React, { useState } from "react";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from "@react-navigation/native";
// import { Box, NativeBaseProvider, VStack, useColorModeValue } from 'native-base';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import HomeScreen from './src/screens/HomeScreen';
// import Notifications from './src/screens/Notifications';
// import LoginScreen from './src/screens/loginScreen';
// //import ToggleDarkMode from './ToggleDarkMode';
// //import Theme from './Theme';
// import Registro from "./src/screens/Registro";
// import ProfileScreen from "./src/screens/ProfileScreen";

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const MainTab = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;
//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'Notifications') {
//             iconName = focused ? 'information-circle' : 'information-circle-outline';
//           }else if(route.name === 'Profile'){
//             iconName = focused ? 'person-circle' : 'person-circle-outline';
//           }
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: 'blue',
//         tabBarInactiveTintColor: 'black',
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
//       <Tab.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// }

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <NativeBaseProvider>
//       <NavigationContainer>
//         <VStack >
          
//           <Stack.Navigator initialRouteName={isAuthenticated ? "MainTab" : "Login"}>
//             <Stack.Screen name="Login" options={{ headerShown: false }}>
//               {() => <LoginScreen setIsAuthenticated={setIsAuthenticated} />}
//             </Stack.Screen>
//             <Stack.Screen name="Registro" component={Registro} options={{ headerShown: false }}/>
//             <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
//           </Stack.Navigator>
//         </VStack>
//       </NavigationContainer>
//     </NativeBaseProvider>
//   );
// };

// export default App;