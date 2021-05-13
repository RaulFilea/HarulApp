import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Video} from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Video
          onLoad={changeScreenOrientation}
          source={{
            uri:
              'https://58f9d53e45ea8.streamlock.net:443/wildliferomania2/live.stream_aac/manifest.mpd',
          }}
          shouldPlay
          style={styles.container}
          resizeMode={'contain'}
        />
      </View>
    );
  }
}

async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.LANDSCAPE,
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').height,
    height: Dimensions.get('window').height * (9 / 16),
    backgroundColor: '#0f2d41',
  },
});

// https://58f9d53e45ea8.streamlock.net:443/wildliferomania2/live.stream_aac
// https://58f9d53e45ea8.streamlock.net:443/wildliferomania2/live.stream_aac/manifest.mpd
/**
 * infoo.tv
 * inspect element
 * ceva cu "smil"
 * https://58ffa4254ef21.streamlock.net:443/harul/smil:harul.smil/playlist.m3u8
 */
