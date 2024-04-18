import {Text, View, StyleSheet, Alert} from "react-native";
import Title from "../components/title";
import {useState} from "react";
import NumberContainer from "../components/game/numberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constans/colors";

// generate random integer within specific range while excluding a specific number from this range
//
// generates a random floating point number between 0 and 1
// and scales it up to the side of the range (max-min)
// the result is floored (rounded down) to create an integer
// the min is added to shift the number into the desired range
// the function recursively calls itself to generate another random integer
function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min; //min-max is range within we guessing,  +min is the point from that range began
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber}) {
    //we gerate number when the screen occurs
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    function nextGuessHandler(direction) {   //lower or greather
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie!", "You know this is wrong!", [{text: "Sorry!", style: "cancel"}]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <Title children={"Opponent's Guess"}/>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text style={styles.text}>Higher or lower?</Text>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                    </View>
                </View>
            </View>
            {/*<View>LOG ROUNDS</View>*/}
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop: 30
    },
    text: {
        marginVertical: 30,
        padding: 10,
        textAlign: "center",
        fontWeight: "bold",
        color: Colors.secondary300,
        fontSize: 24,
        borderWidth: 1,
        borderColor: Colors.secondary300,
        borderRadius: 8
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 12
    },
    buttonContainer: {
        flex: 1
    }

})