/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Video from 'react-native-video';

const Detail = ({route}) => {
  const {
    trackName,
    longDescription,
    artworkUrl100,
    previewUrl,
    contentAdvisoryRating,
  } = route.params;
  return (
    <View style={{backgroundColor: 'black', paddingHorizontal: 20}}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            gap: 15,
            marginVertical: 30,
          }}>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: artworkUrl100}}
          />
          <View>
            <Text
              style={{
                color: 'white',
                fontSize: 30,
              }}>
              {trackName}
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
              }}>
              {contentAdvisoryRating}
            </Text>
          </View>
        </View>

        <View style={{padding: 50}}>
          <Text style={{color: 'white', textAlign: 'center'}}>Trailer</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Video
            source={{uri: previewUrl}} // Can be a URL or a local file.
            ref={ref => {
              this.player = ref;
            }} // Store reference
            resizeMode="cover"
            onBuffer={this.onBuffer} // Callback when remote video is buffering
            onError={this.videoError} // Callback when video cannot be loaded
            style={{
              height: 200,
              width: 500,
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
          }}>
          Deskripsi :
        </Text>
        <Text
          style={{
            color: 'white',
          }}>
          {longDescription}
        </Text>
      </ScrollView>
    </View>
  );
};

export default Detail;
