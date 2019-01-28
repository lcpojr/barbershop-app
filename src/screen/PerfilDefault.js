import React, {Component} from 'react'
import {TouchableOpacity, ScrollView, Image, Dimensions, StyleSheet, TextInput, Text, View, TouchableWithoutFeedback,TouchableNativeFeedback} from 'react-native'
const width= Dimensions.get('window').width

export default class PerfilDefault extends Component{

    constructor(){
        super();
        this.state = {
            editName:null,
            editLastName:null,
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

    editTel = () =>{
        this.setState({editTel:true})
    };

    editName = () =>{
        this.setState({editName:true})
    }

    editLastName = () =>{
        this.setState({editLastName:true})
    }

    editTelFunc = () => {
        if(this.state.editTel){
            return(
                <React.Fragment>
                    <Text style={{marginTop:6}}>Telefone</Text>
                    <TextInput style={{width:'100%', fontSize:15, height:35, padding:7, color:"black", borderColor: '#E5E5E5',borderWidth:1,}}/>
                </React.Fragment>
            )

        }else{
            return(
                <React.Fragment>
                    <Text style={{marginTop:6}}>Telefone</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{width:'100%',height:35, color:'black', fontSize:15, padding:7, borderColor: '#E5E5E5',borderWidth:1,}}>21 964887840</Text>
                        <TouchableOpacity onPress={this.editTel}>
                            <Image style={{width:20, height:20, marginLeft:6}} source={require('../img/editIcon.png')} />
                        </TouchableOpacity>
                    </View>
                </React.Fragment>
            )
        }
    };
    
    editNameFunc = () =>{
        if(this.state.editName){
            return(
                <React.Fragment>
                    <Text style={{marginTop:6}}>Nome</Text>
                    <TextInput style={{width:'100%', fontSize:15, height:35, padding:7, color:"black", borderColor: '#E5E5E5',borderWidth:1,}}/>
                </React.Fragment>
            )
        }else{
            return(
                <React.Fragment>
                    <Text style={{marginTop:6}}>Nome</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{width:'100%',height:35, color:'black', fontSize:15, padding:7, borderColor: '#E5E5E5',borderWidth:1,}}>Yashin</Text>
                        <TouchableOpacity onPress={this.editName}>
                            <Image style={{width:20, height:20, marginLeft:6}} source={require('../img/editIcon.png')} />
                        </TouchableOpacity>
                    </View>
                </React.Fragment>
            )
        }
    }

    editLastNameFunc = () =>{
        if(this.state.editLastName){
            return(
                <React.Fragment>
                    <Text style={{marginTop:6}}>Sobrenome</Text>
                    <TextInput style={{width:'100%', fontSize:15, height:35, padding:7, color:"black", borderColor: '#E5E5E5',borderWidth:1,}}/>
                </React.Fragment>
            )
        }else{
            return(
                <React.Fragment>
                    <Text style={{marginTop:6}}>Sobrenome</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{width:'100%',height:35, color:'black', fontSize:15, padding:7, borderColor: '#E5E5E5',borderWidth:1,}}>do Nascimento dos Santos</Text>
                        <TouchableOpacity onPress={this.editLastName}>
                            <Image style={{width:20, height:20, marginLeft:6}} source={require('../img/editIcon.png')} />
                        </TouchableOpacity>
                    </View>
                </React.Fragment>
            )
        }
    }

    render(){
        return(
            <React.Fragment>
            <View style={{marginTop:12, width:'70%'}}>

            {this.editNameFunc()}
            
            {this.editLastNameFunc()}
            
            {/* CPF */}
            <Text style={{marginTop:6}} >CPF</Text>
            <TouchableWithoutFeedback onPress={this.showHide3}>
                <View style={{width:'100%',flexDirection:'row-reverse',marginRight:36, alignItems:'center'}}>
                    <Image style={this.state.hideShow3?
                    styles.perfil_hide
                    :
                    styles.perfil_show}source={this.state.iconShowHide3}/>
                    <Text style={{width:'100%', height:35, color:'black', fontSize:15, padding:7, borderColor: '#E5E5E5',borderWidth:1,}}>{this.state.hideShow3? 'xxx.xxxx.xxx-xx': '111.111.111-11'}</Text>
                </View>
            </TouchableWithoutFeedback > 
            <Text style={{marginTop:6}} >Email</Text>
            <Text style={{width:'100%',height:35 , color:'black', fontSize:15, padding:7, borderColor: '#E5E5E5',borderWidth:1,}}> email@gmail.com</Text>
            
            {this.editTelFunc()}

            <View style={{width:'70%', justifyContent:'space-between', marginTop:12}}>
                <TouchableOpacity onPress={this.props.editPassword} >
                    <Text>Alterar senha</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.editCep}>
                    <Text>Alterar Endereço</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        <TouchableNativeFeedback>
            <View style={styles.perfil_Button}>
                <Text>SALVAR ALTERAÇÕES</Text>
            </View>
        </TouchableNativeFeedback>
        </React.Fragment>
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
