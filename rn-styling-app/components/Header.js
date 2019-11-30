import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//whe we import Colors from constant we are getting the primary and accent color for styling
import Colors from '../constants/colors'

const header = props => {
    return (
        <View style={style.header}>
            <Text style={style.headerTitle}>{props.title}</Text>
        </View>
    );
};


const style = StyleSheet.create({
    header:{
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'

    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
    }
});

export default header;