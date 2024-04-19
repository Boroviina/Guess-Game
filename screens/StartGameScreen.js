import {useState} from 'react';
import {TextInput, View, StyleSheet, Alert, useWindowDimensions} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constans/colors";
import Title from "../components/title";
import Card from "../components/Card";
import InstructionTextComponent from "../components/InstructionTextComponent";

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');
    const {width, height} = useWindowDimensions();    //this hook watch dimensions and whenever it changes becouse the device is rotated
    //this component will rerender and we will have new dimensions of width and height

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number',
                'Nuber should be between 1 and 99.',
                [{text: 'Okay', style: 'destructive ', onPress: resetInputHandler}]
            );
            return;
        }
        onPickNumber(chosenNumber);
    }

    const marginTopDistance = height < 380 ? 30 : 200;

    return (
        <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionTextComponent children={"Enter a Number"}/>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType={"number-pad"}
                    autoCapitalize={"none"}
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        // marginTop: deviceHeight < 380 ? 30 : 100
        alignItems: "center", //"stretch"is default
    },

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.secondary300,
        borderBottomWidth: 2,
        color: Colors.secondary300,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    },

});