/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import React, {useEffect, useState} from 'react';
import {Button, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const getDataApi = () => {
    fetch(`https://itunes.apple.com/search?term=marvel&limit=25`)
      .then(res => res.json())
      .then(res => {
        setData(res.results);
      });
  };

  function parseDate(date) {
    const namaBulan = [
      'jan',
      'feb',
      'mar',
      'apr',
      'may',
      'jun',
      'jul',
      'aug',
      'sep',
      'oct',
      'nov',
      'des',
    ];
    const today = new Date(date);
    let tanggal = today.getDate();
    let tahun = today.getFullYear();
    let bulan = today.getMonth();

    return tanggal + ' ' + namaBulan[bulan] + ' ' + tahun;
  }

  useEffect(() => {
    getDataApi();
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={style.cardMovie}>
            <View style={style.cardMovieContent}>
              <View>
                <Image
                  style={style.imageMovie}
                  source={{uri: item.artworkUrl100}}
                />
              </View>
              <View>
                <Text style={style.textBold}>{item.trackName}</Text>
                <Text>{item.primaryGenreName}</Text>
                <Text style={style.textBold}>
                  {parseDate(item.releaseDate)}
                </Text>
              </View>
            </View>
            <View>
              <Text
                onPress={() => {
                  navigation.navigate('detail', {...item});
                }}>
                <Ionicons name={'arrow-forward-circle'} size={30} />
              </Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.trackId}
      />
    </View>
  );
};

const style = StyleSheet.create({
  cardMovie: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  cardMovieContent: {
    flex: 1,
    gap: 10,
    flexDirection: 'row',
  },
  imageMovie: {
    width: 80,
    height: 100,
  },
  textBold: {
    fontWeight: '800',
    fontSize: 15,
    textTransform: 'capitalize',
  },
});

export default Home;
