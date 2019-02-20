/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Video from 'react-native-video';

var urlVideo = 'https://ambienteintegrador1.tvescola.org.br/mam_PPP2028/baixa1.mp4';

var pausa = ()=>{
  repetir = true;
}
var repetir = false;
var controles = true;

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
          <Video source={{uri: urlVideo}}
              ref={(ref) => {
               this.player = ref
              }} 
              style={styles.backgroundVideo} />
    );
  }
}
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
