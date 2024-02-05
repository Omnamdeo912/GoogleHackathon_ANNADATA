import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {images} from '../assets/images';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import DateTimePicker from '@react-native-community/datetimepicker';
export default class LandSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landData: [
        {
          name: 'Acre',
        },
        {
          name: 'Bigha',
        },
        {
          name: 'Hectare',
        },
        {
          name: 'Gunta',
        },
      ],
      land: '',
      defaultBtn: 'select',
      loading: false,
      appVersion: '',
      build: '',
      isCurrent: [],
      date: new Date(),
      sel_date: '',
      show: false,
      m_date: '',
    };
  }

  showDatepicker = () => {
    this.setState({
        show: true,
        mode: 'date',
    });
};

onChangeDate = (event, selectedDate) => {

    if (Platform.OS === 'ios') {
        const currentDate = selectedDate || date;
        const m = new Date(currentDate).getDate();
        const d = new Date(currentDate).getMonth() + 1;
        const y = new Date(currentDate).getFullYear();
        const f_date = m + '-' + d + '-' + y;

        {
            this.setState({
                show: true,
                sel_date: f_date,
            });
        }
    } else {
        if (event.type == 'set') {
            //ok button
            const currentDate = selectedDate || date;
            const m = new Date(currentDate).getDate();
            const d = new Date(currentDate).getMonth() + 1;
            const y = new Date(currentDate).getFullYear();
            const f_date = m + '-' + d + '-' + y;
            this.setState({
                show: false,
                sel_date: f_date,
            });
        } else {
            //cancel Button
            this.setState({
                show: false,
            });
            // console.log('cancle');
        }
    }
};

  render() {
    const {width, height} = Dimensions.get('window');
    return (
      <View
        style={{
          flex: 1,
          backgroundColor:'white',
        }}>
        {/* <Text>This is the Land Size screen.</Text> */}
        <Image source={images.logo} style={{
            width,
            height:100,
            position:'absolute',
        }}
        resizeMode="contain"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            position: 'relative',
            top: height * 0.3,
          }}>
          <View
            style={{
              width: '40%',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'left',
                color: 'black',
                fontSize:16,
                padding:10,
              }}>
              Enter Land Size:
            </Text>
            <TextInput
            keyboardType="numeric"
            placeholder={'Enter your farming area...'}
              style={{
                borderWidth: 1,
                height: 40,
                borderRadius: 10,
                textAlign:'center',
              }}></TextInput>
          </View>
          <View
            style={{
              width: '40%',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'black',
                fontSize:16,
                padding:10,
                textAlign:'left',
              }}>
              Unit :
            </Text>
            <View style={{flexDirection: 'row'}}>
              <SelectDropdown
                data={this.state.landData}
                onSelect={(selectedItem, index) => {
                  {
                    console.log(selectedItem.name);
                    this.setState({
                      land: selectedItem.name,
                    });
                  }
                }}
                defaultButtonText={this.state.defaultBtn}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem.name;
                }}
                rowTextForSelection={(item, index) => {
                  return item.name;
                }}
                buttonStyle={{
                  width: '100%',
                  height: 40,
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderColor: 'black',
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  //borderWidth: 1,
                  //borderColor: '#dfdfdf',
                  alignSelf: 'center',
                }}
                buttonTextStyle={{
                  color: 'black',
                  //marginBottom: 10,
                  //bottom: 8,
                  textAlign: 'left',
                  fontSize: 16,
                  //fontFamily: activeColors.fontFamilyRegular,
                }}
                renderDropdownIcon={() => {
                  return (
                    <Image
                      source={images.dropDown}
                      style={{
                        height: 15,
                        width: 15,
                        //marginBottom: 10,
                        //bottom: 8,
                        tintColor: 'black',
                        transform: [{rotate: '270deg'}],
                      }}
                    />
                  );
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={{backgroundColor: 'white'}}
                rowStyle={{
                  color: 'black',
                  backgroundColor: 'white',
                  borderBottomColor: '#C5C5C5',
                }}
                rowTextStyle={{
                  color: 'black',
                  textAlign: 'left',
                }}
              />
            </View>
          </View>
        </View>
        {/* <View style={[styles.InputTopView,{top:height*0.35}]}>
          <TouchableOpacity
            style={{
              height: 50,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: 'black',
              flexDirection: 'column',
              marginHorizontal: 20,
              marginVertical: 10,
            }}
            onPress={this.showDatepicker}>
            <View
              style={{
                backgroundColor: 'white',
                marginLeft: 20,
                height: 20,
                bottom: 10,
                justifyContent: 'center',
                width: 150,
                alignContent: 'center',
              }}>
              <Text
                style={{
                  //fontSize: 12,
                  color: 'black',
                  fontWeight:'bold',
                  alignSelf: 'center',
                  fontFamily: 'Montserrat-Medium',
                }}>
                Harvesting Start Date
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                editable={false}
                style={styles.InputFeild}
                keyboardType="numeric"
                value={this.state.sel_date}
                // onChangeText={this.handleInputChangeNoumber}
              />
              <Image source={images.calender} style={{height: 25, width: 25}} />
            </View>

            {this.state.noumberinputfeildColor == 'red' ? (
              <View
                style={{
                  height: 15,
                  bottom: 10,
                  justifyContent: 'center',
                  marginStart: 5,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: this.state.noumberinputfeildColor,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Please Enter Valid Phone number
                </Text>
              </View>
            ) : null}
          </TouchableOpacity>
          {this.state.mode === 'date' && this.state.show === true ? (
            <DateTimePicker
              style={{marginRight: 10}}
              value={this.state.date}
              mode={this.state.mode}
              is24Hour={false}
              display="default"
              onChange={this.onChangeDate}
            />
          ) : null}
        </View> */}

        <View style={[styles.InputTopView,{top:height*0.35}]}>
          <TouchableOpacity
            style={{
              height: 50,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: 'black',
              flexDirection: 'column',
              marginHorizontal: 20,
              marginVertical: 10,
            }}
            //</View>onPress={this.showDatepicker}
            >
            <View
              style={{
                backgroundColor: 'white',
                marginLeft: 20,
                height: 20,
                bottom: 10,
                justifyContent: 'center',
                width: 80,
                alignContent: 'center',
              }}>
              <Text
                style={{
                  //fontSize: 12,
                  color: 'black',
                  fontWeight:'bold',
                  alignSelf: 'center',
                  fontFamily: 'Montserrat-Medium',
                }}>
               Location
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                editable={true}
                style={styles.InputFeild}
                placeholder={'Please enter the district name...'}
                //keyboardType="numeric"
                value={this.state.location}
                onChangeText={(val)=>{
                    this.setState({location:val})
                }}
              />
              {/* <Image source={images.calender} style={{height: 25, width: 25}} /> */}
            </View>
          </TouchableOpacity>
        </View>


        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
            alignSelf: 'center',
            backgroundColor: '#60b878',
            margin: 10,
            padding: 10,
            borderRadius: 10,
            position: 'absolute',
            bottom: 0,
            elevation: 4,
          }}
          onPress={() => {
            this.setState({loading: true});
            setTimeout(() => {
              //this.setState({loading: false});
              this.props.navigation.replace("Dashboard")
            }, 2000);
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
            }}>
            DISCOVER
          </Text>
        </TouchableOpacity>
        {this.state.loading && (
          <View
            style={{
              width,
              height,
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#60b878',
            }}>
            <UIActivityIndicator size={100} color={'white'} />
            <View
              style={{
                position: 'absolute',
                bottom: height * 0.3,
                //backgroundColor:'pink',
              }}>
              <Text style={{color: 'white', fontSize: 30}}>Analyzing...</Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  InputTopView: {
    height: 75,
    justifyContent: 'center',
    marginTop: 10,
  },
  InputFeild: {
    marginLeft: 10,
    width: '88%',
    fontSize: 16,
    bottom: 8,
    height: 40,
    fontFamily: 'Montserrat-Regular',
    color: 'black',
  },
  container: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  Container: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  firstView: {
    marginHorizontal: 20,
    height: '60%',
    marginTop: 20,
  },
  secondView: {
    marginHorizontal: 20,
    height: '40%',
  },
  imageView: {
    marginHorizontal: 2,
    marginVertical: 30,
    // backgroundColor: COLOR.SHADOW_AUTH_LANDING,
    height: '85%',
    borderRadius: 40,
    justifyContent: 'center',
    elevation: 10,
  },
  headingView: {
    marginHorizontal: 20,
    height: 40,
    marginVertical: 10,
    justifyContent: 'center',
    // backgroundColor:'green',
    marginTop: 50,
  },
  contentView: {
    marginHorizontal: 20,
    height: 40,
    // marginVertical: 10,
    justifyContent: 'center',
    // backgroundColor:'red'
  },
  contentText: {
    alignSelf: 'center',
    fontSize: 14,
    color: 'black',
    fontFamily: 'Montserrat-Regular',
  },
  btnView: {
    marginHorizontal: 20,
    height: '20%',
    marginVertical: 20,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  registerBtn: {
    width: '50%',
    backgroundColor: 'white',
    height: '80%',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
    elevation: 5,
  },
  btnText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 14,
  },
  loginBtn: {
    width: '50%',
    backgroundColor: 'white',
    height: '80%',
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'center',
    elevation: 5,
  },
  bottombtnView: {
    width: 120,
    height: 40,
    marginVertical: 5,
    marginBottom: 10,
    right: 10,
    position: 'absolute',
    bottom: 10,
    justifyContent: 'center',
  },
});
