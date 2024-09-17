import { Text, Image, View, StyleSheet } from 'react-native';

const Header = () => {
    return (

        <View style={styles.container} >

            <View style={styles.linha}>
                <hr />
            </View>

            <Image
                source={require("../public/sesi-logo.png")}
                style={{ width: 100, height: 100, borderRadius: 50 }}>
            </Image>

            <View>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>AGENDAMENTOS</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Seja bem-vindo(a)!)</Text>
            </View>


        </View >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-around',
        backgroundColor: '#242222',
        flexDirection: 'row',
        padding: 30,
        backgroundimage: url("sesifrente.jpeg"),
    },

    linha: {

    }
})


export default Header;