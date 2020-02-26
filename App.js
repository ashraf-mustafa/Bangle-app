import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import {
  createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs';
import logo from './assets/bangle.jpeg';
import AppsScreen from './components/AppsScreen'
import SettingsScreen from './components/SettingsScreen'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



class HomeScreen extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <Image source={logo} style={styles.image} />
        <TouchableOpacity
          onPress={() => alert('Connecting ...')}
          style={styles.button}>
          <Text
            style={{ fontSize: 30, color: '#fff' }}>   Connect   <Icon name="bluetooth" size={30} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Set time ...')}
          style={styles.button}>
          <Text
            style={{ fontSize: 30, color: '#fff' }}>   Set time   <Icon name="clock-outline" size={30} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={{ fontSize: 30, color: '#fff' }}>Something ...  </Text>
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
    backgroundColor: "#EA765D",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    shadowColor: '#7F3005',
    shadowOpacity: 0.6,
    shadowRadius: 15,
    shadowOffset: {
      width: 1,
      height: 8
    },
  },
  image:
  {
    width: 405,
    height: 119,
    borderRadius: 15,
    marginBottom: 80,
  },
  icon:
  {

  }
});



const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontSize: 17 }}> Home </Text>,
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon name="home" fontFamily="Ionicons.ttf" size={20} color={tintColor} />
          </View>
        ),
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontSize: 17 }}> Settings </Text>,
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon name="settings" size={20} color={tintColor} />

          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#A3E4D7',
        barStyle: {
          backgroundColor: '#145A32',
          paddingBottom: 15
        },

      }
    },
    Apps: {
      screen: AppsScreen,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontSize: 17 }}> Applicaions </Text>,
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon name="apps" size={20} color={tintColor} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#ADBCCB',
        barStyle: {
          backgroundColor: '#3F4347',
          paddingBottom: 15
        },
      }
    },
  },

  {
    initialRouteName: 'Home',
    activeColor: '#542004',
    inactiveColor: '#ffffff',
    barStyle: {
      backgroundColor: '#CA573E',
      paddingBottom: 15,
    },
  }
);

export default createAppContainer(TabNavigator);