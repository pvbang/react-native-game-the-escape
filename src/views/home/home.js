import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, StatusBar, FlatList } from 'react-native';
// import HorizontalRecycler from './HorizontalRecycler';
import styles from './styles';
import LevelCard from './LevelCard';
import axios from 'axios';

const MainScreen = ({ navigation }) => {
  const [levels, setLevels] = useState([]);
  useEffect(() => {
    try {
      axios.get(`http://localhost:3000/levels`)
        .then(res => {
          setLevels(res.data);
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const renderLevel = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <LevelCard item={item} />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.row}>
        <Text style={styles.logo}>The Escape</Text>
        <TouchableOpacity style={styles.touchImage} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/logo.png')} style={styles.image} resizeMode={'center'} />
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.title}>Mức độ</Text>
        <FlatList
          data={levels}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderLevel}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        />
      </View>
    </ScrollView>
  );
};

export default MainScreen;
