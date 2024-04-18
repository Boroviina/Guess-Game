import {Image, Text, View, StyleSheet} from "react-native";
import Title from "../components/title";
import Colors from "../constans/colors";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen(props) {
    return (
        <View style={styles.screenContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')}/>
            </View>
            <View style={styles.newGameContainer}>
                <Text style={styles.summaryText}>Your phone needed
                    <Text style={styles.highlight}> {props.roundsNumber} </Text>
                    rounds to guess the number
                    <Text style={styles.highlight}> {props.userNumber}</Text>.</Text>
                <PrimaryButton onPress={props.onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </View>
    );
}

export default GameOverScreen;
const styles = StyleSheet.create({
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary900,
        overflow: "hidden",
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    screenContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: "center",
        marginVertical: 20
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary900
    },
    newGameContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
})