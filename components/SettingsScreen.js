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
          <Text style={styles.text}>   Compass   </Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={styles.text}>   GPS Info   </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={styles.text}>StopWatch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={styles.text}>Show Color</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={styles.text}>BLE Scanner</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={styles.text}>Analogue Clock</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Coming soon ..')}
          style={styles.button}>
          <Text style={styles.text}>    About    </Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => alert('Coming soon ..')}
        style={styles.button}>
        <Text style={styles.text}>    About    </Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => alert('Coming soon ..')}
      style={styles.button}>
      <Text style={styles.text}>    About    </Text>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 160
  },
  button: {
    backgroundColor: "#074FBF",
    padding: 20,
    borderRadius: 15,
    marginTop: 30,
    marginRight: 10,
    shadowColor: '#074FBF',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    shadowOffset: {
      width: 1,
      height: 8
    },
    width: 120,
    height: 80,
    alignItems:'center',
    justifyContent: 'center',
    alignSelf : "center"
   
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