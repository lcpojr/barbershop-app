import React, {Component} from 'react'
import {ScrollView,TouchableNativeFeedback, View, Image, Text, TextInput, StyleSheet, Dimensions} from 'react-native'
const width= Dimensions.get('window').width
const height= Dimensions.get('window').height

export default class ForgotPassword extends Component{
    render(){
        return(
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.forgotPassword_logo_container}>
                    <Image style={styles.forgotPassword_logo_client}
                        source={require('../img/logo.png')}
                    />
                    <Text style={styles.forgotPassword_logo_client_text}>
                        Esqueci minha senha
                    </Text>
                    <View style={styles.forgotPassword_form_container}>
                        <Text style={styles.forgotPassword_form_text}>
                            Email cadastrado
                        </Text>
                        <TextInput style={styles.forgotPassword_form}/>
                    </View>
                    <View style={styles.forgotPassword_Button_Container}>
                        <TouchableNativeFeedback>
                            <View style={styles.forgotPassword_Button}>
                                <Text>ENVIAR</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height:height-70,
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent:'space-between'
    },
    forgotPassword_logo_container:{
        marginTop:20,
        alignItems:'center',
        justifyContent:'space-between',
        height:180
    },
    forgotPassword_logo_client:{
        width:112,
        height:112},
    forgotPassword_logo_client_text:{
        marginTop:40,
        fontSize:22,
        color:'#000000'
    },
    forgotPassword_form_container:{
        marginBottom:140,
        width:width-30,
        alignItems: 'center',
        marginTop:45
    },
    forgotPassword_form_text:{
        alignSelf:'baseline',
        marginLeft: 30,
        fontSize: 16,
        color:'#777070'
    },
    forgotPassword_form: {
        borderColor: '#E5E5E5',
        borderWidth:1,
        width: '80%',
        marginRight:12
      },
    forgotPassword_Button_Container:{
        width:width,
        height:height-500   
    },
    forgotPassword_Button:{
        position:'absolute',
        bottom:0,
        width:width,
        height:74,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#F5F5F5",
        borderColor:'#E5E5E5',
        borderWidth:1
    }
})