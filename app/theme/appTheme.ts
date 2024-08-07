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
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    containerRow: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    alignItemsCenter: {
        alignItems: "center",
    },
    boxContainer: {
        width: '50%',
        height: 200,
    },
    boxContainerButton: {
        width: '40%',
        height: 100,
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
    marginTen: {
        margin: 10,
    },
    marginTopSix: {
        marginTop: 60,
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
    h4Size: {
        fontSize: 10,
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
        width: '100%',
        borderRadius: 15,
    },
    textPrimaryButton: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
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
    imgCourseStart: {
        width: '100%',
        height: '100%',
    },
    imgSkills: {
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    balls: {
        width: 60,
        height: 60,
        borderWidth: 5,
        borderRadius: 30,
    },
    ballsPorcentage: {
        width: 60,
        height: 60,
        borderColor: 'purple',
        borderWidth: 5,
        borderRadius: 30,
    },
    VerticalOrganizationWrap: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        flexWrap: "wrap",
        gap: 5,
    },
    cardsDescriptionsSubTopics: {
        flex: 2,
        alignItems: "center",
        width: '80%',
    },
    cardBorder: {
        borderRadius: 30,
        // Para Android
        elevation: 10,
        // Para iOS
        shadowColor: '#52006A',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        backgroundColor: 'white'
    },
    contentContainer: {
        marginTop: 10,
        alignItems: 'center'
    },
    video: {
        width: 300,
        height: 235,
        borderRadius: 10,
    },
    controlsContainer: {
        padding: 10,
    },
    CardProfileContainer: {
        width: "90%",
        height: 200,
        backgroundColor: "#9327F0",
        borderRadius: 30,
    },
    imgChip: {
        width: 50,
        height: 30,
        borderRadius: 15,
    },
    imgSponsor: {
        width: 50,
        height: 50,
        borderRadius: 15,
    },
    MarkXBools: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#968FAC',
        marginRight: 10
    }
})