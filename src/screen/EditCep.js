import React, {Component} from 'react'
import {TouchableOpacity, ScrollView, Image, Dimensions, StyleSheet, TextInput, Text, View, TouchableWithoutFeedback,TouchableNativeFeedback} from 'react-native'

const width= Dimensions.get('window').width

export default class EditCep extends Component{
    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <View style={{marginTop:12, width:'70%'}}>
                        <Text style={{marginTop:6}}>CEP</Text>
                        <TextInput style={{width:'100%', height:35, color:'black', fontSize:15, padding:7, borderColor: '#E5E5E5',borderWidth:1,}}/>
                        <Text>Endereço</Text>
                        <Text style={{width:'100%',fontSize:15, height:35 ,padding:7, color:'black', borderColor: '#E5E5E5',borderWidth:1,}}> Rua Joaquin n° 5</Text>
                        <Text>Bairro</Text>
                        <Text style={{width:'100%',fontSize:15, height:35 ,padding:7, color:'black', borderColor: '#E5E5E5',borderWidth:1,}}> Piedade</Text>
                        <Text>Cidade</Text>
                        <Text style={{width:'100%',fontSize:15, height:35 ,padding:7, color:'black', borderColor: '#E5E5E5',borderWidth:1,}}> Rio de Janeiro</Text>
                        <Text>Estado</Text>
                        <Text style={{width:'100%',fontSize:15, height:35 ,padding:7, color:'black', borderColor: '#E5E5E5',borderWidth:1,}}> Rio de Janeiro</Text>
                        <TouchableOpacity onPress={this.props.editCep} style={{marginTop:6}}>
                            <Text>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableNativeFeedback>
                        <View style={styles.perfil_Button}>
                            <Text>SALVAR ALTERAÇÕES</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFFFFF',
        alignItems:'center',
        justifyContent:'space-between'
    },
    perfil_Button:{
        marginTop:40,
        height:74,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#F5F5F5',
        borderColor:'#E5E5E5',
        borderWidth:1,
        width:width
    },
    perfil_hide:{
        width:30,
        height:30,
        marginLeft:6
    },
    perfil_show:{
        width:30,
        height:30,
        marginLeft:6
    },
})