import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity, 
} from 'react-native';


import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import logo from './assets/bangle.jpeg';
import AppsScreen from './components/AppsScreen'
import SettingsScreen from './components/SettingsScreen'

//import Icon from 'react-native-vector-icons/Ionicons';


class HomeScreen extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <Image source={logo} style={ styles.image } /> 
        <TouchableOpacity
          onPress={() => alert('Connecting ...')}
          style={styles.button}>
          <Text style={{ fontSize: 30, color: '#fff' }}>   Connect   </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Set time ...')}
          style={styles.button}>
          <Text style={{ fontSize: 30, color: '#fff' }}>   Set time   </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={{ fontSize: 30, color: '#fff' }}>Something</Text>
        </TouchableOpacity>
    </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECC3BB',
  },
  button: {
    backgroundColor: "#E0674D",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    shadowColor: '#7F3005',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { 
        width: 1,
        height: 13
      },
  },
  image:
  { width: 405, 
    height: 119, 
    borderRadius: 15,
    marginBottom: 80,
   },
});



const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontSize: 17}}> Home </Text>,
        // tabBarIcon: ({ tintColor }) => (
        //    <View>
        //   // <Icon name="ios-home" size={20} color={tintColor}/>
        //    </View>
        // ),
      }
    },
    Apps: {
      screen: AppsScreen,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontSize: 17}}> Apps </Text>,
        tabBarIcon: ({ tintColor }) => (
          <View>
              
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#a3c2fa',
        barStyle: { 
          backgroundColor: '#074FBF',
          paddingBottom: 15
         },
        
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontSize: 17}}> Settings </Text>,
        tabBarIcon: ({ tintColor }) => (
          <View>
             
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#92c5c2',
        barStyle: { 
          backgroundColor: '#0D6A1A',
          paddingBottom: 15
         },
      }
    },
},

  {
    initialRouteName: 'Home',
    activeColor: '#7F3005',
    inactiveColor: '#ffffff',
    barStyle: { 
      backgroundColor: '#E0674D',
      paddingBottom: 15,
     },
  }
);

export default createAppContainer(TabNavigator);