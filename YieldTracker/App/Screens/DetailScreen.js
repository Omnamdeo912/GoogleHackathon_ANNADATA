import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Linking,
} from 'react-native';
import {images} from '../assets/images';
import db from '../../config';
export default class DetailScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.route?.params?.data,
      isVisible: false,
      isInfoVisible: false,
      max_price: ['', ''],
      min_price: ['', ''],
      current_price: '',
      noInfoData: true,
      url: '',
    };
  }
  getCropData = async (url, data2) => {
    const response = await fetch(url + data2, {
      method: 'GET',
    });

    const data = await response.json();

    if (response.status > 400) {
      this.setState({
        noInfoData: true,
      });
      throw new Error(data.errors);
    } else {
      this.setState({
        noInfoData: false,
      });
    }
    console.log(data);
    this.setState({
      max_price: data['max_crop'],
      min_price: data['min_crop'],
      current_price: data['current_price'],
    });
    return data;
  };

  componentDidMount() {
    db.child('backend_url').on('value', snap => {
      this.getCropData(snap.val(), this.state.data?.name?.toLowerCase());
    });
  }
  render() {
    const {width, height} = Dimensions.get('window');
    return (
      <View
        style={{
          backgroundColor: 'white',
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
        {!this.state.noInfoData && (
          <TouchableOpacity
            onPress={() => {
              console.log('Info is pressed!!');
              //this.getCropData();
              this.setState({
                isInfoVisible: !this.state.isInfoVisible,
              });
            }}
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
            }}>
            <Image
              source={images.info}
              style={{
                width: 30,
                height: 30,
              }}
              resizeMode="contain"></Image>
          </TouchableOpacity>
        )}
        <ScrollView
          style={{
            backgroundColor: 'white',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                fontWeight: 'bold',
              }}>
              {this.state.data.name}
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'center',
              margin: 10,
              padding: 10,
              borderRadius: 20,
              overflow: 'hidden',
              //backgroundColor:'pink',
              width: width * 0.9,
              height: height * 0.2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{uri: this.state.data.url}}
              style={{
                width: width * 0.9,
                height: height * 0.2,
              }}
              resizeMode="cover"></Image>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              elevation: 8,
              margin: 10,
              padding: 10,
              borderRadius: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text
                style={{
                  width: '40%',
                  textAlign: 'left',
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                Total Investment
              </Text>
              <Text
                style={{
                  width: '40%',
                  textAlign: 'right',
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                ₹{this.state.data.investmentAmount}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text
                style={{
                  width: '40%',
                  textAlign: 'left',
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                Estimated Yield
              </Text>
              <Text
                style={{
                  width: '40%',
                  textAlign: 'right',
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                ₹{this.state.data.predictedyield}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text
                style={{
                  width: '40%',
                  textAlign: 'left',
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                Predicted Crop Price
              </Text>
              <Text
                style={{
                  width: '40%',
                  textAlign: 'right',
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                ₹{this.state.data.predictedprice}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text
                style={{
                  width: '40%',
                  textAlign: 'left',
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                Total Predicted Value
              </Text>
              <Text
                style={{
                  width: '40%',
                  textAlign: 'right',
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                ₹
                {this.state.data.predictedyield *
                  this.state.data.predictedprice}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text
                style={{
                  width: '40%',
                  textAlign: 'left',
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                Total Profit
              </Text>
              <Text
                style={{
                  width: '40%',
                  textAlign: 'right',
                  color: 'green',
                  fontWeight: 'bold',
                }}>
                ₹
                {this.state.data.predictedyield *
                  this.state.data.predictedprice -
                  this.state.data.investmentAmount}
              </Text>
            </View>
          </View>
          <View style={{
              flexDirection:'row',
              justifyContent:'space-around',
          }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  isVisible: true,
                });
                setTimeout(() => {
                  this.setState({
                    isVisible: false,
                  });
                }, 2000);
              }}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
                padding: 10,
                backgroundColor: '#4edb86',
                borderRadius: 20,
                width:'40%',
                elevation:2,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Hire Us
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  isVisible: true,
                });
                setTimeout(() => {
                  this.setState({
                    isVisible: false,
                  });
                }, 2000);
              }}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
                padding: 10,
                backgroundColor: 'orange',
                borderRadius: 20,
                width:'40%',
                elevation:2,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Need Help?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{
              marginTop:30,
          }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                color: 'black',
                fontWeight: 'bold',
              }}>
              Investment Breakdown
            </Text>
          </View>
          <FlatList
            data={this.state.data?.coststructure}
            style={{
              marginTop: 20,
            }}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginVertical: 10,
                  }}>
                  <Text
                    style={{
                      textAlign: 'left',
                      width: '25%',
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{textAlign: 'center', width: '25%', color: 'blue'}}
                    onPress={() => Linking.openURL('http://google.com')}>
                    {item.buy ? 'Buy Now' : ''}
                  </Text>
                  <Text
                    style={{
                      textAlign: 'right',
                      width: '25%',
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    ₹{item.price}
                  </Text>
                </View>
              );
            }}></FlatList>

          <View
            style={{
              paddingBottom: 100,
            }}></View>
        </ScrollView>
        {this.state.isVisible && (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width,
              height,
              position: 'absolute',
              //backgroundColor:'white',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                width: width * 0.8,
                height: height * 0.3,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                borderColor: 'green',
                borderWidth: 1,
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    isVisible: false,
                  });
                }}
                style={{
                  position: 'absolute',
                  top: -5,
                  right: -5,
                }}>
                <Image
                  source={images.close}
                  style={{width: 30, height: 30}}
                  resizeMode="contain"></Image>
              </TouchableOpacity>
              <Text>We will reach out to you shortly!</Text>
              <Image
                source={{
                  uri: 'https://static.vecteezy.com/system/resources/previews/010/451/469/original/green-check-mark-icon-tick-symbol-in-green-color-illustration-free-vector.jpg',
                }}
                style={{width: 100, height: 100}}></Image>
            </View>
          </View>
        )}
        {this.state.isInfoVisible && (
          <View
            style={{
              position: 'absolute',
              top: 25,
              right: 25,
              backgroundColor: 'black',
              margin: 10,
              padding: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
              }}>
              Current Selling Price: ₹ {this.state.current_price} (Today)
            </Text>
            <Text
              style={{
                color: 'white',
              }}>
              Max Selling Price: ₹ {this.state.max_price[1]} (
              {this.state.max_price[0]})
            </Text>
            <Text
              style={{
                color: 'white',
              }}>
              Min Selling Price: ₹ {this.state.min_price[1]} (
              {this.state.min_price[0]})
            </Text>
          </View>
        )}
      </View>
    );
  }
}
