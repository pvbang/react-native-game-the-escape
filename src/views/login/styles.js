import { StyleSheet } from 'react-native';
import color from '../../constains/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.main_background,
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 50,
        color: color.green,
        marginTop: '2%',
        marginBottom: 35,
    },
    error: {
        color: 'red',
        marginBottom: 10,
        marginTop: -29
    },
    inputView: {
        width: '80%',
        backgroundColor: color.blue_4,
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: 'white',
    },
    loginButton: {
        width: '63%',
        backgroundColor: color.green_1,
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginEnd: '2%'
    },
    loginText: {
        color: 'white',
    },
    signupButton: {
        width: '15%',
        backgroundColor: color.blue_4,
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    signupText: {
        color: 'white',
    },
    googleButton: {
        width: '80%',
        borderRadius: '100%',
        marginTop: 5,
        height: 50,
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
    },

    inputPasswordView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        backgroundColor: color.blue_4,
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputPassword: {
        flex: 1,
        height: 50,
        color: 'white',
    },
    show: {
        height: 40,
        width: 50,
        marginEnd: -10,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    textShow: {
        fontSize: 13,
        color: color.blue_2,
        alignItems: 'center',
        fontWeight: 'bold'
    },
});

export default styles;
