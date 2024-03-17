import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/components/home';
import products from './src/components/products';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
      <StatusBar style="auto" />

      <NavigationContainer>
     <MyTabs />
   </NavigationContainer>

    </View>
    </SafeAreaProvider>
    
  );
}



function DetailsScreen() {
  return (
    <View style={{ flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function CategoryScreen({ navigation }) {
  return (
    <View style={{ flex: 1,
     justifyContent: 'center', 
     alignItems: 'center' }}>
      <Text>Products</Text>
      <Button
        title="Go To Products"
        onPress={() => navigation.navigate('Products')}
      />
    </View>
  );
}
function FavScreen({ navigation }) {
  return (
    <View style={{ flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' }}>
      <Text>Fav screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const CategoryStack = createNativeStackNavigator();

function CategoryStackScreen() {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen name="Category" component={CategoryScreen} />
      <CategoryStack.Screen name="Products" component={products} />
    </CategoryStack.Navigator>
  );
}
const FavStack = createNativeStackNavigator();

function FavStackScreen() {
  return (
    <FavStack.Navigator>
      <FavStack.Screen name="Fav" component={FavScreen} />
      <FavStack.Screen name="Details" component={DetailsScreen} />
    </FavStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

function MyTabs () {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        
    <Tab.Screen name="Home" component={HomeStackScreen} 
    options={{
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="home" 
        color={color} size={26} />
      ),
    }}/>
    <Tab.Screen name="Category" component={CategoryStackScreen}
    options={{
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="apps"
         color={color} size={26} />
      ),
    }} />
    <Tab.Screen name="Fav" component={FavStackScreen}
    options={{
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="pentagram" 
        color={color} size={26} />
      ),
    }} />
  </Tab.Navigator>
  )};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
    
  },
});
