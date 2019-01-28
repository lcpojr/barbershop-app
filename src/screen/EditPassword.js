import React, {Component} from 'react'
import {TouchableOpacity, ScrollView, Image, Dimensions, StyleSheet, TextInput, Text, View, TouchableWithoutFeedback,TouchableNativeFeedback} from 'react-native'

const width= Dimensions.get('window').width

export default class EditPassword extends Component{

    constructor(){
        super();
        this.state = {
            editCep:null,
            editTel:null,
            editPassword:null,
            hideShow:true,
            hideShow2:true,
            hideShow3:true,
            iconHide:require('../img/hideIcon.png'),
            iconShow: require('../img/showIcon.png'),
            iconShowHide: require('../img/hideIcon.png'),
            iconShowHide2: require('../img/hideIcon.png'),
            iconShowHide3: require('../img/hideIcon.png')
        }
    };

    showHide = () =>{
        if(this.state.hideShow){
            this.setState({hideShow: false, iconShowHide: this.state.iconShow})
        }
        else{
            this.setState({hideShow: true, iconShowHide: this.state.iconHide})
        };
    };

    showHide2 = () =>{
        if(this.state.hideShow2){
            this.setState({hideShow2: false, iconShowHide2: this.state.iconShow})
        }
        else{
            this.setState({hideShow2: true, iconShowHide2: this.state.iconHide})
        };
    };


    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                
                    <View style={{marginTop:12, width:'70%'}}>

                    <Text style={{marginTop:6}} >Senha</Text>
                    <TouchableWithoutFeedback onPress={this.showHide}>
                        <View style={{width:'100%',flexDirection:'row-reverse',marginRight:36, alignItems:'center'}} onPress={this.showHide}>
                            <Image style={this.state.hideShow?
                            styles.perfil_hide
                            :
                            styles.perfil_show}source={this.state.iconShowHide}/>
                            <TextInput secureTextEntry={this.state.hideShow} style={{width:'100%', height:35, color:'black', fontSize:15, padding:7, borderColor: '#E5E5E5',borderWidth:1,}}/>
                        </View>
                    </TouchableWithoutFeedback >                
                    <Text style={{marginTop:6}}>Confirmar senha</Text>
                    <TouchableWithoutFeedback onPress={this.showHide2}>
                        <View style={{width:'100%',flexDirection:'row-reverse',marginRight:36, alignItems:'center'}} onPress={this.showHide2}>
                            <Image style={this.state.hideShow2?
                            styles.perfil_hide
                            :
                            styles.perfil_show}source={this.state.iconShowHide2}/>
                            <TextInput secureTextEntry={this.state.hideShow2} style={{width:'100%', height:35, color:'black', fontSize:15, padding:7, borderColor: '#E5E5E5',borderWidth:1,}}/>
                        </View>
                    </TouchableWithoutFeedback >
                    <TouchableOpacity onPress={this.props.editPassword} style={{marginTop:6}}>
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