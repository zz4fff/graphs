import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Main() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={logoImg} />
        <Text style={styles.headerText}>
          Main Menu
        </Text>
      </View>
      <View style={styles.graphButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {navigation.navigate('LineGraph')}}
        >
          <Text style={styles.buttonText}>Line Chart</Text>
          <Feather name="arrow-right" size={40} color="#23AD13" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {navigation.navigate('BarGraph')}}
        >
          <Text style={styles.buttonText}>Bar Chart</Text>
          <Feather name="arrow-right" size={40} color="#23AD13" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {navigation.navigate('PieGraph')}}
        >
          <Text style={styles.buttonText}>Pie Chart</Text>
          <Feather name="arrow-right" size={40} color="#23AD13" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {navigation.navigate('ProgressGraph')}}
        >
          <Text style={styles.buttonText}>Progress Ring Chart</Text>
          <Feather name="arrow-right" size={40} color="#23AD13" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {navigation.navigate('ContribGraph')}}
        >
          <Text style={styles.buttonText}>Contribution Chart</Text>
          <Feather name="arrow-right" size={40} color="#23AD13" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {navigation.navigate('StackedGraph')}}
        >
          <Text style={styles.buttonText}>Stacked Chart</Text>
          <Feather name="arrow-right" size={40} color="#23AD13" />
        </TouchableOpacity>
      </View>
    </View>
  )
}