import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import Colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <View>
                <Image
                style={{width: 150, height: 150}}
                source={require('../img/gameovericon.png')}
                />
            </View>
            <Text>The Game is Over</Text>
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <View style={styles.buttonContainer}>
                <Button title="NEW GAME" color={Colors.primary} onPress={props.onRestart}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 150,
        height: 150,
        marginBottom: 25
    },
    buttonContainer: {
        marginTop: 25,
        fontSize: 80
    }
});

export default GameOverScreen;