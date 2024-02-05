import React from 'react';
import {Text, View, Image,Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {images} from '../assets/images';
import db from '../../config';
export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      version: 5,
      firebaseVersion: '',
      blacklisted: false,
    };
  }

  async componentDidMount() {
   setTimeout(()=>{
    this.props.navigation.replace("Login");
   },2000)
   
  }
  render() {
    const {width,height} = Dimensions.get("window");
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          //overflow: 'hidden',
          backgroundColor:'white',
        }}>
          
        <View
          style={{
            width: width,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <Image
            source={images.logo}
            style={{width: width, height: 100}}  resizeMode="contain"></Image>
        </View>
        <Text style={{
          borderTopWidth:1,
          borderColor:'black',
          paddingTop:10,
          color:'black',
          fontWeight:'bold',
          textAlign:'center',
        }}>Empowering farmers through</Text>
        {/* <Text style={{
          //borderTopWidth:1,
          borderColor:'black',
          //padding:10,
          color:'black',
          fontWeight:'bold',
        }}>through </Text> */}
        
        <Text style={{
          //borderTopWidth:1,
          borderColor:'black',
          //padding:10,
          color:'black',
          fontWeight:'bold',
          //borderBottomWidth:1,
          paddingBottom:10,
          textAlign:'center',
        }}>data driven decision making</Text>
        
      </View>
    );
  }
}
