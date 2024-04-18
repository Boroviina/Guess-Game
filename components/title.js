import {Text, StyleSheet} from "react-native";
import Colors from "../constans/colors";

function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
        title: {
            fontSize: 18,
            fontWeight: "bold",
            color: Colors.secondary300,
            textAlign: "center",
            borderWidth: 2,
            borderColor: '#ddb52f',
            padding: 12
        }
    }
);