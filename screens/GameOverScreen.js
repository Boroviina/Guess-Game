import {Image, Text, View, StyleSheet, useWindowDimensions} from "react-native";
import Title from "../components/title";
import Colors from "../constans/colors";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen(props) {

    const {width, height} = useWindowDimensions();
    let imageSize = 300;
    if (width < 380) {
        imageSize = 150;
    }
    if (height < 400) {
        imageSize = 80;
    }
    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }
    return (
        <View style={styles.screenContainer}>
            <Title>GAME OVER!</Title>
            <View style={[styles.imageContainer, imageStyle ]}>
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

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    imageContainer: {
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
        // borderRadius: deviceWidth < 380 ? 75 : 150,
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