import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
import db from '../../config';
import {images} from '../assets/images';
export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobile: '9867465475',
    };
  }

  componentDidMount() {
    db.once('value', snap => {
      console.log('This is the version received from firebase: ' + snap.val());
      this.setState({firebaseVersion: parseInt(snap.val())});
    });
  }
  render() {
    const {width, height} = Dimensions.get('window');
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: height,
          //backgroundColor:'transparent',
        }}>
        <View
          style={{
            position: 'absolute',
            width,
            //opacity:0.9,
          }}>
          <Image
            resizeMode="cover"
            source={images.bg}
            style={{
              width,
              height,
            }}
          />
        </View>

        <View
          style={{
            position: 'relative',
            top: height * 0.2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              //backgroundColor:'cyan',
              justifyContent: 'center',
              alignItems: 'center',
              width: width * 0.8,
              //height:30,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 10,
              padding: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Contact number
            </Text>
            <TextInput
              keyboardType="numeric"
              value={this.state.mobile}
              onChangeText={val => {
                this.setState({mobile: val});
              }}
              style={{
                width: width * 0.8,
                height: 50,
                borderWidth: 1,
                borderRadius: 15,
                margin: 10,
                padding: 10,
                borderColor: 'white',
                backgroundColor: 'white',
                opacity: 0.4,
                fontSize: 20,
                fontWeight: 'bold',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color:'black',
              }}></TextInput>
              <TouchableOpacity
              style={{
                width: width * 0.8,
                height: 50,
                backgroundColor: '#60b878',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 20,
              }}
              onPress={() => {
                this.props.navigation.replace('OTP');
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          {/* <View style={{
            backgroundColor:'pink',
            width:width*0.9,
            height:50,
            justifyContent:'center',
            alignItems:'center',
          }}>
            <TouchableOpacity
              style={{
                width: width * 0.8,
                height: 50,
                backgroundColor: '#60b878',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 20,
              }}
              onPress={() => {
                this.props.navigation.replace('OTP');
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    );
  }
}
