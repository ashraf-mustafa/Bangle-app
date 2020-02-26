import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';



export default class SettingsScreen extends React.Component {

  
  render() {
    return (

      <View style={styles.container}>


        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={styles.text}> Make Connectable </Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={styles.text}> BLE </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={styles.text}>Programmable</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={styles.text}>LCD Timeout</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={styles.text}>Beep</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={styles.text}> Vibration </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={styles.text}> Welcome App </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={styles.text}> Local </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={styles.text}> Select Clock </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={styles.text}> HID </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={styles.text}> Set Time </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={styles.text}> Reset Settings </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={styles.text}> Turn Off </Text>
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
    backgroundColor: '#A3E4D7',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 160
  },
  button: {
    backgroundColor: "#1E8449",
    padding: 20,
    borderRadius: 15,
    marginTop: 30,
    marginRight: 10,
    shadowColor: '#0E6655',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    shadowOffset: {
      width: 1,
      height: 8
    },
    width: 120,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "center"

  },
  image:
  {
    width: 405,
    height: 119,
    borderRadius: 15,
    marginBottom: 80,
  },
  text:
  {
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  }
});