import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';

const Dev_Height = Dimensions.get('window').height;
const Dev_Width = Dimensions.get('window').width;

import Icon from 'react-native-vector-icons/AntDesign';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={{
            uri: 'http://bayanbox.ir/view/8303651897060238483/background.png',
          }}
          style={styles.Image_Background_Style}>
          <View style={styles.Search_Box_View}>
            <TextInput
              placeholder="Search"
              placeholderTextColor="#FFF"
              style={styles.Search_Box}
              onChangeText={(text) => this.setState({ city: text })}
            />

            <TouchableOpacity style={styles.button_touch}>
              <Icon name="search1" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.weather_Box_Main}>
            <View style={styles.weather_Holder_View}></View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dev_Height,
    width: Dev_Width,
  },
  Image_Background_Style: {
    height: '100%',
    width: '100%',
  },
  Search_Box_View: {
    height: '20%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Search_Box: {
    height: '35%',
    width: '80%',
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 15,
    color: '#FFF',
    paddingHorizontal: 15,
  },
  button_touch: {
    marginLeft: '5%',
    height: '35%',
    width: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weather_Box_Main: {
    height:"30%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
  },
  weather_Holder_View: {
    height:"80%",
    width:"90%",
    backgroundColor:"rgba(255,255,255,0.3",
    borderRadius:15,
    alignItems:"center",
    flexDirection:"row"
  }
});
