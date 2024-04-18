import {Text, View, StyleSheet,Alert} from "react-native";
import Title from "../components/title";
import {useState} from "react";
import NumberContainer from "../components/game/numberContainer";
import PrimaryButton from "../components/PrimaryButton";

// generate random integer within specific range while excluding a specific number from this range
//
// generates a random floating point number between 0 and 1
// and scales it up to the side of the range (max-min)
// the result is floored (rounded down) to create an integer
// the min is added to shift the number into the desired range
// the function recursively calls itself to generate another random integer
function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
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

    function nextGuessHandler(direction) {   //lower or grather
       if ((direction==='lower' && currentGuess<userNumber)||(direction==='greater' && currentGuess>userNumber)){

           Alert.alert(); 
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
                <Text>Higher or lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
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
})