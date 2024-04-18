import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {StyleSheet, View, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./constans/colors";
import GameOverScreen from "./screens/GameOverScreen";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();    //// Keep the splash screen visible while we fetch resources

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gameOver, setGameOver] = useState(false);  //the game is not started yet

    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })
    if (!fontsLoaded){
        return <AppLoading/>;
    }


    //on kupi broj iy TextInput-a i postavlja ga u promjenljivu userNumber
    //pickedNumber ce biti pokupljeno jer je na TextInput-u postavljen onChangeText VEOMA BITNO!!!!
    //DA NIJE onda bismo morali koristiti event
    //postavljanjem userNumbera izazvacemo dinamicku promjenu stranice
    //pickedNumberHandler ce se izvrsiti kada pritisnemo submitButton na StartGameScreenu
    //a to cemo obezbjediti tako sto cemo startGameScreen-u dodati property onPickedNumber
    //u fji StartGamscreen extracovacemo property onPickedNumber
    //izvrsenje fje onPickedNumber cemo pozvati kada pritisnemo submit dugme i ako je broj u redu bice proslijedjen fji
    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
    }

    function GameOverHandler() {
        setGameOver(true);
    }

    //formiram varijablu screen koja ce podefaultu biti StartGAmeScreen
    //ukoliko je poznat broj onda ce biti aktivan GameScreen
    //ovo omogucava dinamicko prikazivanje ekrana u zavisnosti od stanja
    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;
    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={GameOverHandler}/>;
    }
    if (gameOver && userNumber) {
        screen = <GameOverScreen/>
    }

    return (
        <LinearGradient colors={[Colors.primary900, Colors.secondary300]} style={styles.rootScreen}>
            <ImageBackground source={require('./assets/images/background.png')}
                             resizeMode="cover"
                             style={styles.rootScreen}
                             imageStyle={styles.backgorundImage}
            >
                <SafeAreaView style={styles.rootScreen}>
                    {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1
    },
    backgorundImage: {
        opacity: 0.30
    }
});
