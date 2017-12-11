
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class MainScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>MainScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
