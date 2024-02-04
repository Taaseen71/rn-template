import { StyleSheet } from "react-native";

const globalStyle = (arg1, arg2, arg3, arg4) => StyleSheet.create({
    flex: {
        flex:arg1
    },
    centerView: {
            flex: arg1,
            alignItems: 'center',
            justifyContent: 'center',
    },
    darkMode: {
        color: 'white',
        backgroundColor: 'black'
    },
    TextInputComponent:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white"
    },
    bcolor: {
        backgroundColor: arg1
    }

})

export default globalStyle;