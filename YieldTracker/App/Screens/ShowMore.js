import React from 'react';
import {Text, View, TouchableOpacity, Image, Dimensions, FlatList} from 'react-native';
import {images} from '../assets/images';

export default class ShowMore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        data:this.props.route.params?.data
    }
  }
  render() {
    const {width, height} = Dimensions.get('window');
    return (
      <View
        style={{
          backgroundColor: 'white',
          width,height
        }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.replace('Dashboard');
          }}
          style={{
            //backgroundColor:'pink',
            padding: 10,
            position: 'absolute',
            left: 10,
            top: 10,
          }}>
          <Image
            source={images.back}
            style={{
              width: 20,
              height: 20,
            }}
            resizeMode="contain"></Image>
        </TouchableOpacity>
        <View
          style={{
            alignSelf: 'center',
          }}>
          <Image
            source={images.logo}
            style={{width: width * 0.8, height: 80}}
            resizeMode="contain"></Image>
        </View>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                disabled={true}
                style={{
                  margin: 10,
                  padding: 10,
                  backgroundColor: 'white',
                  elevation: 2,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    // backgroundColor:'white',
                    // elevation:4,
                    // borderRadius:20,
                  }}>
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: '30%',
                    }}>
                    <Image
                      source={{uri: item.url}}
                      style={{width: 100, height: 100}}
                      resizeMode="contain"></Image>
                  </View>
                  <View style={{width: '60%'}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'black',
                        }}>
                        Investment Amount
                      </Text>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'blue',
                        }}>
                        ₹{item.investmentAmount}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'black',
                        }}>
                        Estimated Profit
                      </Text>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'green',
                        }}>
                        ₹{item.profit}
                      </Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    bottom: 10,
                    right: 20,
                    backgroundColor: 'green',
                    //margin:5,
                    padding: 5,
                    borderRadius: 5,
                  }}
                  onPress={()=>{
                      this.props.navigation.replace("DetailScreen",{data:item})
                  }}
                  >
                  <Image
                    source={images.dropDown}
                    style={{
                      height: 10,
                      width: 10,
                      //marginBottom: 10,
                      //bottom: 8,
                      tintColor: 'white',
                      transform: [{rotate: '180deg'}],
                    }}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            );
          }}></FlatList>
      </View>
    );
  }
}
