import React, {Component} from 'react';
import {ScrollView, TouchableNativeFeedback, TouchableOpacity, Image ,Dimensions, TextInput, StyleSheet, Text, View} from 'react-native';

const width= Dimensions.get('window').width
const height= Dimensions.get('window').height

export default class Login extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
              <Image style={styles.loginForm_Logo_Client}
                source={require('../img/logo.png')}
              />
          </View>
          <View style={styles.loginForm_Container}>
              <Text style={styles.loginForm_Text}>Email</Text>
              <TextInput style={styles.loginForm}/>
              <Text style={[styles.loginForm_Text,
                styles.loginFormTextMarginTop]}
              >
                Senha
              </Text>
              <TextInput secureTextEntry={true} style={styles.loginForm}/>
              <View style={styles.loginForm_Options_Container}>
                <TouchableOpacity 
                  onPress={()=>this.props.navigation.navigate('CreateAccount')}
                >
                  <View>
                    <Text style={styles.loginForm_Options}>Criar nova conta</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={()=>this.props.navigation.navigate('ForgotPassword')}
                >
                  <View>
                    <Text style={styles.loginForm_Options}>
                      Esqueci minha senha
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{width:width-90}}>
                  <Text style={[styles.loginForm_Options_Position]}>Ou</Text>
                  <Text style={[styles.loginForm_Options_Position]}>
                    Logue com suas redes sociais
                  </Text>
              </View>
              <View style={styles.loginForm_Logo}>
                  <View>
                      <TouchableOpacity>
                          <View style={styles.loginForm_Logo_Facebook}>
                              <Text style={styles.loginForm_Logo_Facebook_Text}>f</Text>
                          </View>
                      </TouchableOpacity>
                  </View>
                  <View>
                      <TouchableOpacity>
                          <View style={styles.loginForm_Logo_Google}>
                              <Image style={styles.loginForm_logo_Google_Image}
                               source={require('../img/googleLogo.png')}
                              />
                          </View>
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
          <View style={styles.loginForm_Button_Container}>
              <TouchableNativeFeedback onPress={()=> this.props.navigation.navigate('Home')}>
                  <View style={styles.loginForm_Button}>
                      <Text>ENTRAR</Text>
                  </View>
              </TouchableNativeFeedback>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  loginForm_Container: {
    alignItems: 'center',
    flex:1,
    width: width
  },
  loginForm_Logo_Client:{
    width:160,
    height:160,
    marginTop:40,
    marginBottom:40
  },
  loginForm_Text:{
    color:'#777070',
    alignSelf:'baseline',
    marginLeft:'10%',
    fontSize: 14,
    marginBottom: 1,
  },
  loginFormTextMarginTop:{
    marginTop: 12
  },
  loginForm: {
    borderColor: '#E5E5E5',
    borderWidth:1,
    width: '80%'
  },
  loginForm_Options_Position:{
    fontSize: 12,
    marginTop: 10,
  },
  loginForm_Options_Container:{
    width:width-90,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  loginForm_Options:{
    color:'#2E5B97'
  },
  loginForm_Logo:{
    width:width-90,
    marginTop:16,
    marginBottom:30,
    justifyContent:'flex-start',
    flexDirection: 'row',
    flex:1
},    
  loginForm_Logo_Facebook:{
    width:60,
    height:60,
    borderRadius:100,
    borderColor:'#ADC0D9',
    borderWidth:1,
    alignItems:'center',
  },
  loginForm_Logo_Facebook_Text:{
    fontSize:40,
    color:'#2E5B97'
  },
  loginForm_Logo_Google:{
    width: 60,
    height:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#ADC0D9',
    borderRadius:100,
    borderWidth:1,
    marginLeft:12
  },
  loginForm_logo_Google_Image:{
    width: 30,
    height:30
  },
  loginForm_Button_Container:{
    width:width,
  },
  loginForm_Button:{
    width:width,
    height:74,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#F5F5F5",
    borderColor:'#E5E5E5',
    borderWidth:1
  }
});