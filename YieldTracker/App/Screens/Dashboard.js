import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import Header from '../Components/Header';
import db from '../../config';
import {images} from '../assets/images';
import SectionComponent from '../Components/SectionComponent';
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      finalData: [
        {
          heading: 'Vegetables',
          data: [
            {
              name: 'Tomato',
              investmentAmount: 1200,
              profit: 2000,
              url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg',
            },
            {
              name: 'Carrot',
              investmentAmount: 1300,
              profit: 2900,
              url: 'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/04/23175719/shutterstock_440493100-1.jpg',
            },
          ],
        },
        {
          heading: 'Pulses',
          data: [
            {
              name: 'Tomato',
              investmentAmount: 1200,
              profit: 2000,
              url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg',
            },
            {
              name: 'Carrot',
              investmentAmount: 1300,
              profit: 2900,
              url: 'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/04/23175719/shutterstock_440493100-1.jpg',
            },
          ],
        },
      ],
    };
  }

  componentDidMount() {
    console.log('Dashboard screen is executing!');
    db.child('delhi').child('1_acre').on('value', snap => {
        console.log('This is the data received from firebase: ' + snap.val());
        var appData = snap.val();
        var finalData = [];
        //Item Type
        //var tempData = [];
        for(var x in appData){
          var listData = [];
          //Crops in that item type
          for(var y in appData[x]){
            var cropData = appData[x][y];
            console.log(cropData.cost_structure);
            var coststructure = [];
            for(var z in cropData.cost_structure){
              coststructure.push(cropData.cost_structure[z]);
            }
            listData.push({
              name:cropData.name,
              investmentAmount:cropData.investment,
              profit:cropData.profit,
              url:cropData.url,
              predictedyield:cropData.predictedyield,
              predictedprice:cropData.predictedprice,
              buy:cropData.buy,
              coststructure
            })
          }
          finalData.push({
            heading:x,
            data:listData,
          })
        }
        console.log("this is the final data: ");
        //console.log(finalData);
        this.setState({
          finalData
        })
      });
    // db.child('data').on('value', snap => {
    //   console.log('This is the version received from firebase: ' + snap.val());
    //   this.setState({data: snap.val()});
    //   var finalData = [];
    //   for (var x in snap.val()) {
    //     var d = {};
    //     var headingData = snap.val()[x];
    //     tempData = [];
    //     for (var y in headingData) {
    //       console.log(headingData[y]);
    //       tempData.push({
    //         name: headingData[y].name,
    //         requirement: headingData[y].requirement,
    //         price: headingData[y].price,
    //       });
    //     }
    //     finalData.push({heading:x,data:tempData});
    //   }
    //   this.setState({finalData});
    // });
  }

  render() {
    const {width, height} = Dimensions.get('window');
    return (
      <View
        style={{
          backgroundColor: 'white',
          width,
          height,
        }}>
        <View
          style={{
            width,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={images.logo}
            style={{
              width: 200,
              height: 100,
              //position: 'absolute',
            }}
            resizeMode="contain"
          />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.replace('LandSize');
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
        </View>

        <ScrollView
          style={{
            backgroundColor: 'white',
            //marginTop: 50,
          }}>
          <View>
            <FlatList
              data={this.state.finalData}
              renderItem={({item}) => {
                return (
                  <View>
                    <SectionComponent data={item} nav={this.props.navigation} />
                  </View>
                );
              }}
            />

            {/* <FlatList
            data={[
              {
                heading: 'heading1',
                data: [
                  {
                    name: 'Crop Name 1',
                    investmentAmount: 1200,
                    profit: 2000,
                  },
                ],
              },
            ]}
            renderItem={({item}) => {
              return (
                <View>
                  <Text
                    style={{
                      margin: 10,
                      color: 'black',
                      //backgroundColor:'white',
                      fontWeight: 'bold',
                    }}>
                    {item.heading}
                  </Text>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      Name
                    </Text>
                  </View>
                  <FlatList
                    data={item.data}
                    renderItem={({item}) => {
                      return (
                        <TouchableOpacity
                          style={{
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            padding: 10,
                            margin: 10,
                            borderRadius: 20,
                          }}>
                          <Text>{item.name}</Text>
                          <Text>{item.requirement}</Text>
                          <Text>{item.price}</Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                  <TouchableOpacity
                    style={{
                      justifyContent: 'flex-end',
                      flexDirection: 'row',
                      position: 'relative',
                      right: 20,
                    }}>
                    <Text
                      style={{
                        color: 'red',
                      }}>
                      Show More
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}></FlatList> */}
          </View>
          {/* <TouchableOpacity
            style={{
              position: 'absolute',
              top: 10,
              left: 10,
              //backgroundColor:'pink',
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={images.back}
              style={{
                width: 20,
                height: 20,
              }}
              resizeMode="contain"></Image>
          </TouchableOpacity>
          <Image
            source={images.logo}
            style={{
              width,
              height: 50,
              position: 'absolute',
            }}
            resizeMode="contain"
          /> */}
          <View style={{height:height*0.1,backgroundColor:'white'}}></View>
        </ScrollView>
      </View>
    );
  }
}
