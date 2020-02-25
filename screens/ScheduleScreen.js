import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Button, Text } from 'galio-framework';
import { Header } from 'react-native-elements';
import { PageTitle } from '../components/PageTitle';

export default function HomeScreen(props) {
  
  
  return (
    <View style={styles.container}>
      <Text>Performances</Text>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: "Performance Schedule",
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
