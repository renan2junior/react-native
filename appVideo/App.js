/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
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
       <View style={styles.principal}>
       <Video source={{uri: urlVideo}}
              paused={repetir}
              repeat={repetir}
              controls={controles}
              style={styles.backgroundVideo} />
           <Text style={styles.texto}>Apena um titulo</Text>       
           <Button style={styles.pause} title="Pause" onPress={pausa} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    paddingHorizontal: 100,
    paddingVertical: 100,
    marginTop: 100,
    flex:1
  },
  principal: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'space-between',
  },
  texto:{
    backgroundColor: '#fff',
    paddingHorizontal: 100,
    paddingVertical: 100,
    marginTop: 100,
  },
  pause:{
    flex:1,
    backgroundColor:'#fff',
  }
});
