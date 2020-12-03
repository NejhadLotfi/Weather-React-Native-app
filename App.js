import React from 'react';
import
{ 
Text,
View,
StyleSheet,
Image,
TextInput,
ImageBackground,
Dimensions,
SafeAreaView

} from 'react-native';

const Dev_Height = Dimensions.get('window').height
const Dev_Width = Dimensions.get('window').width

export default class App extends React.Component {
  render() {
    return(
      <SafeAreaView style={styles.container}>
        <ImageBackground source={{
          uri:"http://bayanbox.ir/view/8303651897060238483/background.png"}}
          style={styles.Image_Background_Style} />
          </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    height:Dev_Height,
    width:Dev_Width
  },
  Image_Background_Style:{
    height:"100%",
    width:"100%"
  }
})