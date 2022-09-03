import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data'

export default function MealsOverview() {
  return (
    <View style={styles.container}>
      <Text>MealsOverview</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})