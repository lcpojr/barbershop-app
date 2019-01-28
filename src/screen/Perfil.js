import React, {Component} from 'react'
import {TouchableOpacity, ScrollView, Image, Dimensions, StyleSheet, TextInput, Text, View, TouchableWithoutFeedback,TouchableNativeFeedback} from 'react-native'
import EditPassword from './EditPassword'
import PerfilDefault from './PerfilDefault'

import EditCep from './EditCep'


const width= Dimensions.get('window').width


export default class Perfil extends Component{
    constructor(){
        super();
        this.state = {
            perfilDefault:true,
            editCep:null,
            editTel:null,
            editPassword:null,
            hideShow3:true,
            iconHide:require('../img/hideIcon.png'),
            iconShow: require('../img/showIcon.png'),
            iconShowHide3: require('../img/hideIcon.png')
        }
    };

    showHide3 = () =>{
        if(this.state.hideShow3){
            this.setState({hideShow3: false, iconShowHide3: this.state.iconShow})
        }
        else{
            this.setState({hideShow3: true, iconShowHide3: this.state.iconHide})
        };
    };

    perfilDefault = () =>{
        if(this.state.perfilDefault){
            this.setState({editPassword:null, editCep:null})
        }
    }
    editPassword = () =>{
        if(!this.state.editPassword){
            this.setState({editPassword:true, perfilDefault:null, editCep:null});
            
        }else{
            this.setState({editPassword:null, perfilDefault:true, editCep:null});
        }
    };

    editCep = () =>{
        if(!this.state.editCep){
            this.setState({editCep:true, perfilDefault:null, editPassword:null});
        }else{
            this.setState({editCep:null, perfilDefault:true, editPassword:null});
        }
    };

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.state.perfilDefault? <PerfilDefault editCep={this.editCep} editPassword={this.editPassword} />:null}
                    {this.state.editPassword? <EditPassword editPassword={this.editPassword}/>:null}
                    {this.state.editCep? <EditCep editCep={this.editCep}  />:null}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFFFFF',
        alignItems:'center'
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


