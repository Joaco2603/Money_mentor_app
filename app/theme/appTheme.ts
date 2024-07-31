import { StyleSheet } from "react-native"


export const colors = {
    light: {
        primaryColorButton: '#C87FCB',
        primaryColorText: '#FFFFFF',
        secundaryColorButton: '#DBCDCD',
        secundaryColorText: '#000000',
        primaryPurple: '#83228A',
    },
    dark: {}
}



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    alignItemsCenter: {
        alignItems: "center"
    },
    alignTextCenter: {
        textAlign: 'center',
    },
    alignTextLeft: {
        textAlign: 'left',
    },
    alignTextRight: {
        textAlign: 'right',
    },
    displayFlexContainer: {
        display: "flex",
        flexDirection: "row",
    },
    textColorWhite: {
        color: 'white'
    },
    textColorBlack: {
        color: 'black'
    },
    h1Size: {
        fontSize: 35,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    h2Size: {
        fontSize: 24,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    h3Size: {
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    textCenter: {
        textAlign: 'center'
    },
    textLeft: {
        textAlign: 'left'
    },
    textRight: {
        textAlign: 'right'
    },
    primaryButton: {
        marginTop: 10,
        padding: 15,
        width: '60%',
        paddingHorizontal: 50,
        borderRadius: 15,
    },
    textPrimaryButton: {
        textAlign: 'center',
        color: "white",
        fontWeight: "bold",
    },
    main: {
        overflow: "hidden",
        backgroundColor: "white",
    },
    input: {
        width: '100%',
        height: 40,
        borderRadius: 10,
        backgroundColor: colors.light.secundaryColorButton,
        color: colors.light.secundaryColorText,
        fontWeight: "bold"
    },
    secundaryInput: {
        width: '100%',
        height: 40,
        borderRadius: 10,
        backgroundColor: colors.light.primaryColorButton,
        color: colors.light.primaryColorText,
        fontWeight: "bold"
    },
    login: {
        backgroundColor: "white",
        position: "relative",
        width: "100%",
        alignItems: "center",
        marginBottom: 20,
    },
    signUp: {
        backgroundColor: colors.light.primaryPurple,
        height: "100%",
        alignItems: "center",
        paddingTop: 20,
        transform: [{ translateY: -380 }],
        borderTopEndRadius: 100,
        borderTopStartRadius: 100,
    },
    slideButton: {
        width: '40%',
        height: 10,
        backgroundColor: colors.light.primaryColorButton,
        borderRadius: 20,
    },
    googleServicesContainer: {
        marginTop: '10%',
        height: '6%',
    },
    googleServicesCard: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 60,
        borderRadius: 30,
        shadowColor: 'black',
        shadowOffset: {
            width: 6,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 16,
    },

    googleServicesIconChild: {
        marginLeft: 20,
    },
    googleServicesTextChild: {
        flex: 1,
        alignItems: 'center'
    },
    imageGoogle: {
        width: 30,
        height: 30,
    },
    logoImg: {
        width: 70,
        height: 70,
    },
})