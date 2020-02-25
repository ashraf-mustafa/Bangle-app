import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';



export default class SettingsScreen extends React.Component {
  render() {
    return (

      <View style={styles.container}>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={{ fontSize: 15, color: '#fff' }}>   Compass   </Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={{ fontSize: 15, color: '#fff' }}>   GPS Info   </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={{ fontSize: 15, color: '#fff' }}>Stopwatch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={{ fontSize: 15, color: '#fff' }}>Show Color</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={{ fontSize: 15, color: '#fff' }}>BLE Scanner</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={{ fontSize: 15, color: '#fff' }}>Analogue Clock</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={{ fontSize: 15, color: '#fff' }}>    About    </Text>
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
    backgroundColor: '#CCE5F6',
  },
  button: {
    backgroundColor: "#074FBF",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    shadowColor: '#074FBF',
    shadowOpacity: 0.8,
    shadowRadius: 10,
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
});