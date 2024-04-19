import {Text, View, StyleSheet, Dimensions} from "react-native";
import Colors from "../../constans/colors";

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.secondary300,
        padding: deviceWidth < 380 ? 18 : 36,
        borderRadius: 8,
        margin: 24,
        alignItems: "center",
        justifyContent: "center"
    },
    numberText: {
        color: Colors.secondary300,
        fontSize: 36,
        fontFamily: 'open-sans-bold'
    }
})