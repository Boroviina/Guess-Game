import {Image, Text, View, StyleSheet} from "react-native";
import Title from "../components/title";
import Colors from "../constans/colors";

function GameOverScreen() {
    return (
        <View style={styles.screenContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')}/>
            </View>
            <View>
                <Text>Your phone needed X rounds to guess the number Y.</Text>
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
    }
})