import React from 'react';
import {Text, View, Dimensions, TouchableOpacity} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
export default class OTP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '754576',
    };
  }

  render() {
    const {width, height} = Dimensions.get('window');

    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: height,
          color:'black',
        }}>
        <Text>Please enter the OTP</Text>
        <View>
          <OTPTextView
            defaultValue={this.state.code}
            inputCount={6}
            handleTextChange={text => {
              this.setState({code:text});
              //setOtpError('');
            }}
          />
        </View>
        <TouchableOpacity style={{
            backgroundColor:'green',
            margin:10,
            padding:10,
            borderRadius:10,
        }}
        onPress={()=>{
            this.props.navigation.replace("LandSize");
        }}
        >
            <Text style={{
                color:'white',
                fontWeight:'bold',
            }}>Confirm</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
