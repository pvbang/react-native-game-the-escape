import { StyleSheet } from 'react-native';
import color from '../../constains/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.main_background,
    },
    row: {
        flexDirection: 'row',
    },
    logo: {
        width: '88%',
        fontWeight: 'bold',
        fontSize: 40,
        color: color.blue_3,
        marginTop: 10,
        marginLeft: 30,
    },
    touchImage: {
        width: 40,
        marginTop: 17,
        height: 40,
    },
    image: {
        width: '100%',
        height: '100%',
        alignSelf: 'flex-end',
    },

    // items card
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 20,
        marginBottom: 15,
        color: color.blue_3
    },
    card: {
        backgroundColor: color.blue_4,
        marginLeft: 20,
        padding: 15,
        borderRadius: 5,
        width: 300,
        height: 150,
        elevation: 2,
    },
    description: {
        fontSize: 14.5,
        marginBottom: 10,
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        color: color.white,
        marginBottom: 5,
    },
});

export default styles;
