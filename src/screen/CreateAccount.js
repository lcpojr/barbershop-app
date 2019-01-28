import React, {Component} from 'react'
import {ScrollView, Image, Dimensions, StyleSheet, TextInput, Text, View, TouchableWithoutFeedback,TouchableNativeFeedback} from 'react-native'

const width= Dimensions.get('window').width
const height= Dimensions.get('window').height




export default class CreateAccount extends Component {
    constructor(){
        super();
        this.state = {
            hideShow:true,
            hideShow2:true,
            iconHide:require('../img/hideIcon.png'),
            iconShow: require('../img/showIcon.png'),
            iconShowHide: require('../img/hideIcon.png'),
            iconShowHide2: require('../img/hideIcon.png'),
            user:{
                name:null,
                lastName:null,
                cpf:null,
                email:null,
                password:null,
                confirmPassword:null
            }

        };
    };

    create = () => {
        const post = {
            method: 'POST',
            headers: 							{
                "Content-Type": "application/json",
                "type": "text"
            },
            body: JSON.stringify({		    
                first_name: `${this.state.user.name}`,
                last_name: `${this.state.user.lastName}`,
                email: `${this.state.user.email}`,
                password: `${this.state.user.password}`,
                documents: [{type: "cpf", number: `${this.state.user.cpf}`}]
            })
        }
        console.warn(post.full_name)

        fetch('http://10.166.124.213:8000/api/v1/profiles/', post)
            .then(res=>res.json())
            .then(res => console.warn(res))
            .catch(error => console.warn(error));
    };

    userName = value => {
        this.setState({user:{name: value}})
    };

    userLastName = value => {
        this.setState({user:{lastName: value}})
    };
    userCpf = value => {
        this.setState({user:{cpf: value}})
    };
    userEmail = value  => {
        this.setState({user:{email: value}})
    };
    userPassword = value  => {
        this.setState({user:{password: value}})
    };
    userConfirmPassword = value => {
        this.setState({user:{confirmPassword: value}})
    }

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
                    <View style={styles.createAccount_logo_container}>
                        <Image style={styles.createAccount_logo_client}
                            source={require('../img/logo.png')}
                        />
                        <Text style={styles.createAccount_logo_client_text}>
                            Crie sua conta
                        </Text>
                        <View style={{marginTop:24, width:width, justifyContent:'center',alignItems:'center'}}>
                            <View style={{flexDirection:'row', width:width,justifyContent:'center'}}>
                            <View style={{width:'35%'}}>
                                    <Text>Nome</Text>
                                    <TextInput  onChangeText={this.userName} style={{marginRight:3, height:35, borderColor: '#E5E5E5',borderWidth:1,}}/>
                                </View>
                                <View style={{width:'35%'}}>
                                    <Text>Sobrenome</Text>
                                    <TextInput  onChangeText={this.userLastName} style={{height:35, borderColor: '#E5E5E5',borderWidth:1,}}/>
                                </View>
                            </View>
                            <View style={{marginTop:12, width:'70%', justifyContent:'center'}}>
                                <Text>CPF</Text>
                                <TextInput  onChangeText={this.userCpf} style={{height:35, borderColor: '#E5E5E5',borderWidth:1,}}/>
                            </View>
                            <View style={{marginTop:12,width:'70%'}}>
                                <Text>Email</Text>
                                <TextInput  onChangeText={this.userEmail} style={{height:35, borderColor: '#E5E5E5',borderWidth:1,}}/>
                            </View>
                            <View style={{marginTop:12,width:'70%'}}>
                                <Text>Senha</Text>
                                <TouchableWithoutFeedback onPress={this.showHide}>
                                <View style={{width:'100%',flexDirection:'row-reverse',marginRight:36, alignItems:'center'}} onPress={this.showHide}>
                                    <Image style={this.state.hideShow?
                                            styles.createAccount_hide
                                            :
                                            styles.createAccount_show} source={this.state.iconShowHide}/>
                                        <TextInput  onChangeText={this.userPassword} secureTextEntry={this.state.hideShow} style={{width:'100%', height:35, borderColor: '#E5E5E5',borderWidth:1,}}/>
                                        </View>
                                    </TouchableWithoutFeedback >
                            </View>
                            <View style={{marginTop:12,width:'70%'}}>
                                <Text>Confirmar senha</Text>
                                <TouchableWithoutFeedback onPress={this.showHide2}>
                                    <View style={{width:'100%',flexDirection:'row-reverse',marginRight:36, alignItems:'center'}} onPress={this.showHide2}>
                                    <Image style={this.state.hideShow2?
                                    styles.createAccount_hide
                                    :
                                    styles.createAccount_show}source={this.state.iconShowHide2}/>
                                    <TextInput  onChangeText={this.userConfirmPassword} secureTextEntry={this.state.hideShow2} style={{width:'100%', height:35, borderColor: '#E5E5E5',borderWidth:1,}}/>
                                    
                                        </View>
                                    </TouchableWithoutFeedback >
                            </View>
                            <TouchableNativeFeedback onPress={this.create}style={styles.createAccount_Button}>
                                <View style={styles.createAccount_Button}>
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
        flex:1,
        backgroundColor: '#FFFFFF',
    },
    createAccount_logo_container:{
        flex:1,
        marginTop:12,
        alignItems:'center'
    },
    createAccount_logo_client:{
        width:100,
        height:100,
    },
    createAccount_logo_client_text:{
        fontSize:22,
        color:'black'
    },
    createAccount_form:{
        borderColor: '#E5E5E5',
        borderWidth:1,
        width:'50%'
    },
    createAccount_form_name:{
        width:'50%'
    },
    createAccount_form_name_margin:{
        marginLeft:6
    },
    createAccount_Button:{
        marginTop:40,
        height:74,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#F5F5F5',
        borderColor:'#E5E5E5',
        borderWidth:1,
        width:width
    },
    createAccount_hide:{
        width:30,
        height:30,
        marginLeft:6
    },
    createAccount_show:{
        width:30,
        height:30,
        marginLeft:6
    },
})