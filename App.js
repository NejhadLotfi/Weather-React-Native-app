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
      city: "tehran",
      data:[],
      icon:"",
      city_display:"",
      desc:"",
      main:"",
      humidity:"",
      pressure:"",
      visibility:""
    }
    this.fetch_weather()
  }
  //Arrow Function
  fetch_weather=()=>{
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+'&units=metric&appid=5a873b6b606d9e2aa79aff040a0e7d63')
    .then((response) => response.json())
    .then((json => {
      this.setState({data:json})
      this.setState({ temp : json.main.temp+" °C"})
      this.setState({city_display : json.name})
      this.setState({ desc : json.weather[0].description})
      this.setState({ icon : json.weather[0].icon})
      this.setState({ main : json.weather[0].main})
      this.setState({ humidity : json.main.humidity+ " %"})
      this.setState({ pressure : json.main.pressure+ " hPa"})
      this.setState({ visibility : (json.visibility/1000).toFixed(2)+ " Km"})
    })).catch((error)=>console.error(error))
   
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
              onChangeText={(text)=>this.setState({city:text})}/>

            <TouchableOpacity style={styles.button_touch} onPress={this.fetch_weather}>
              <Icon name="search1" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.weather_Box_Main}>
            <View style={styles.weather_Holder_View}>
              <Image source={{ uri:"https://openweathermap.org/img/wn/"+this.state.icon+"@2x.png" }} style={styles.weather_Image} />
              <View>
                <Text style={styles.temp_text}> {this.state.temp} </Text>
                <Text style={styles.city_text}> {this.state.city_display} </Text>
              </View>
            </View>
          </View>

          <View style={styles.info_Box_View}>
            <View style={styles.info_Holder_View}>
                 <Text style={styles.Main_Wether_Text}> {this.state.main} </Text>
                 <Text style={styles.desc_Text}> {this.state.desc} </Text>
                 <Text style={styles.humidity_Text}> {this.state.humidity} </Text>
                 <Text style={styles.other_text}> {this.state.pressure} </Text>
                  <Text style={styles.other_text}> {this.state.visibility} </Text>
         </View>
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
    backgroundColor:"rgba(255,255,255,0.3)",
    borderRadius:15,
    alignItems:"center",
    flexDirection:"row"
  },
  weather_Image: {
    height: "80%",
    width:"50%"
  },
  temp_text:{
    fontSize:30,
    color: "#FFF",
    marginLeft:"5%"
  },
  city_text:{
    fontSize:20,
    color:"#FFF",
    marginLeft:"5%",
    marginTop: "3%"
  },
  info_Holder_View:{
    height:"80%",
    width:"90%",
    backgroundColor: "rgba(255,255,255,0.92)",
    borderRadius:15
  },
  info_Box_View:{
    height:"45%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  Main_Wether_Text:{
    fontSize:28,
    color:"#121212",
    marginLeft:"8%",
    marginTop:"8%"
  },
  desc_Text : {
    fontSize:20,
    color:"#121212",
    marginLeft:"8%",
    marginTop:"5%"
  },
   humidity_Text : {
    fontSize:18,
    color:"#121212",
    marginLeft:"8%",
    marginTop:"5%"
  },
  other_text : {
    fontSize:18,
    color:"#121212",
    marginLeft:"8%",
    marginTop:"2%"
  }


});
