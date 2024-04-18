import {Text, StyleSheet} from "react-native";
import Colors from "../constans/colors";

function InstructionTextComponent({children, style}) {
    return <Text style={[styles.instructionText, style]}>{children}</Text>
}

//style defined on the right can rewrite the style written before
//so we can use this to rewrite the default style of some component

export default InstructionTextComponent;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.secondary300,
        fontSize: 24,
        fontFamily: 'open-sans'
    }
})