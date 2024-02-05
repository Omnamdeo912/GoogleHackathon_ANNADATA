import React from 'react';
import {
  Text,
  View,
  Dimensions,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {images} from '../assets/images';

export default class SectionComponent extends React.Component {
  render() {
    const {width, height} = Dimensions.get('window');
    return (
      <View
        style={{
          margin: 10,
          padding: 10,
          backgroundColor: 'white',
          elevation: 10,
          borderRadius: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'black',
            fontSize: 20,
          }}>
          {this.props.data.heading}
        </Text>
        <FlatList
          data={this.props.data.data.slice(0,2)}
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
                        Estimated Investment
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
                    width:40,
                    backgroundColor: 'green',
                    //margin:5,
                    padding: 5,
                    borderRadius: 5,
                    justifyContent:'center',
                    alignItems:'center',
                  }}
                  onPress={()=>{
                      this.props.nav.replace("DetailScreen",{data:item})
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
        <TouchableOpacity
        onPress={()=>{
            this.props.nav.replace("ShowMore",{data:this.props.data.data});
        }}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black'}}>Show More</Text>
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
        </TouchableOpacity>
      </View>
    );
  }
}
