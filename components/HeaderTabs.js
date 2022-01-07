import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-web'
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'


export default function HeaderTabs() {
    return (
        <View>
            <HeaderButton text="Delivery"/>
            <HeaderButton text="Pickup"/>
        </View>
    )
}

const HeaderButton = (props) => (
    <View style ={{ flexDirection:"row", alignSelf:"center"}}>
        <TouchableOpacity 
        style={{ 
            backgroundColor:"black",
            }}>
        <Text style={{ color:"white" }}>{props.text}</Text>
        </TouchableOpacity>
    </View>
)