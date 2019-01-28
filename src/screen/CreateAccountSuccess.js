import React, {Component} from 'react'
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native'

const width= Dimensions.get('window').width


export default class CreateAccountSuccess extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.createAccountSuccess_logo_container}>
                    <Image style={styles.createAccountSuccess_logo_client}
                        source={require('../img/logo.png')}
                    />
                    <Text style={styles.createAccountSuccess_logo_client_text}>
                        Conta criada com sucesso!
                    </Text>
                </View>
                <View style={styles.createAccountSuccess_message_container}
                >
                    <Image style={styles.createAccountSuccess_message_logo}
                        source={require('../img/beardIcon.png')}
                    />
                    <View style={styles.createAccountSuccess_message_text_container}>
                        <Text style={styles.createAccountSuccess_message_text}>Em alguns segundos você será redirecionado para a tela inicial.</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    createAccountSuccess_logo_container:{
        marginTop:20,
        alignItems:'center',
        justifyContent:'space-between',
        height:230
    },
    createAccountSuccess_logo_client:{
        width:112,
        height:112},
    createAccountSuccess_logo_client_text:{
        fontSize:22,
        color:'#777070'
    },
    createAccountSuccess_message_container:{
        marginTop:20,
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'space-between',
        width:width
    },
    createAccountSuccess_message_logo:{
        width:121,
        height:50
    },
    createAccountSuccess_message_text_container:{
        width:250
    },
    createAccountSuccess_message_text:{
        marginTop:40,
        fontSize:17,
        color:'#000000'
    }
})