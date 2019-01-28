import React, {Component} from 'react'
import {TouchableOpacity, ScrollView, Image, Dimensions, StyleSheet, TextInput, Text, View, TouchableWithoutFeedback,TouchableNativeFeedback} from 'react-native'

const width= Dimensions.get('window').width


export default class Pedidos extends Component{
    render(){
        return(
            <ScrollView>
                <View style={{flex:1, justifyContent:'space-between', alignItems:'center' }}>
                    <View style={{flexDirection:'row', marginTop:12,width:'90%',borderBottomColor:'#C4C4C4', borderBottomWidth:1}}>
                        <Image style={{marginBottom:12, width:50, height:50}}source={require('../img/beerIcon.png')}/>
                        <View style={{marginLeft:6}}>
                            <Text style={{fontSize:18, color:'#000000'}}>Antártica latão</Text>
                        <Text style={{fontSize:13, color:'#000000'}}>R$ 7,00</Text>
                        <View style={{width:'60%', aligmItems:'center', marginBottom:12, marginLeft:40, flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{marginTop:6, fontSize:12, color:'black'}}>Quantidade: x2</Text>
                            <TouchableOpacity style={{width:100 ,justfyContent:'center', alignItems:'center', borderRadius:1, height:24, marginLeft:38, borderColor:'#E5E5E5', borderWidth:1}}>
                                <View >
                                    <Text style={{marginTop:3, fontSize:10}}>Remover pedido</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </View>
                    <View style={{flex:1, marginTop:120, width:'100%'}}>
                        <View style={{width:'55%', justfyContent:"center", alignItems:'center'}}>
                            <Text style={{fontSize:17, color:'black'}}>Total a pagar: R$ 14,00</Text>
                        </View>
                        <TouchableNativeFeedback onPress={this.create}style={styles.createAccount_Button}>
                            <View style={styles.createAccount_Button}>
                                <Text>FINALIZAR PEDIDO</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    createAccount_Button:{
        marginTop:40,
        height:74,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#E2FDE0',
        borderColor:'#E5E5E5',
        borderWidth:1,
        width:width
    }
})