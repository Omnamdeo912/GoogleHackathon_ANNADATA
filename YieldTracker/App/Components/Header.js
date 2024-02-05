import React from 'react';
import {Text,View} from 'react-native';

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={{
                justifyContent:'center',
                alignItems:'center',
            }}>
                <Text>
                    {this.props.heading}
                </Text>
            </View>
        )
    }
}