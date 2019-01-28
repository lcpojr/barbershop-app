import React, {Component} from 'react'
import {TouchableOpacity, ScrollView, Image, Dimensions, StyleSheet, TextInput, Text, View, TouchableWithoutFeedback,TouchableNativeFeedback} from 'react-native'
import ProductList from './ProductList'
import Perfil from './Perfil'
import Pedidos from './Pedidos'

const width= Dimensions.get('window').width
const height= Dimensions.get('window').height

export default class Home extends Component {
    constructor(){
        super();
        this.state = {quantitaty:1, bebidas:true, petiscos:null, perfil:null, pedidos:null}
    };

    bebidas = () =>{
        if(this.state.bebidas){
            return this.setState({bebidas:null})
        }else{
            return this.setState({bebidas: true, petiscos:null, pedidos:null, perfil:null})
        };
    };

    pedidos = () =>{
        if(this.state.pedidos){
            return this.setState({pedidos:null})
        }else{
            return this.setState({pedidos:true, bebidas: null, petiscos:null, perfil:null})
        };
    };

    petiscos = () =>{
        if(this.state.petiscos){
            return this.setState({petiscos:null})
        }else{
            return this.setState({petiscos: true, pedidos:null, bebidas:null, perfil:null})
        };
    };

    quantitatyIncr = () =>{
        if(this.state.quantitaty <= 98){
            this.state.quantitaty++
            this.setState({quantitaty:this.state.quantitaty++})
        }
        else{
            this.setState({quantitaty:this.state.quantitaty})
        };
    };

    quantitatyDecr = () =>{
        if(this.state.quantitaty > 1){
            this.state.quantitaty--
            return this.setState({quantitaty:this.state.quantitaty--})
        }   
        else{
            this.setState({quantitaty:this.state.quantitaty})    
        };
    };

    perfil = () =>{
        if(this.state.perfil){
            return this.setState({perfil:null})
        }else{
            return this.setState({perfil: true, pedidos:null, bebidas:null, petiscos:null})
        };
    };

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <View style={{width: width}}>
                        <Image style={styles.imageContainer} resizeMode="cover" source={require('../img/backgroundClient.png')}/>
                    </View>
              
                    <View style={styles.menuContainer}>
                    
                    <View style={styles.menuContainer1}>
                        <TouchableOpacity>
                            <View style={styles.menuContainerPerfilQrCode}>
                                <Image style={styles.QrCodeIcon} source={require('../img/qrcodeIcon.png')}/>
                                <Text style={{fontSize:13}}>Escanear pedido</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.perfil}>
                        <View style={styles.menuContainerPerfilQrCode}>
                                <Image style={styles.userImage} source={require('../img/userImage.jpg')}/>
                                <Text style={[this.state.perfil? styles.menuContainerPerfilQrCodeClick:null,{fontSize:13}]}>Yashin</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                        <View style={styles.menuContainer2}>
                            <TouchableOpacity onPress={this.bebidas}>
                                <View style={this.state.bebidas? styles.productListMenuClick:styles.productListMenuUnClick}>
                                    <Image style={styles.bebidaIcon}source={require('../img/beerIcon.png')}/>
                                    <Text style={{fontSize:13}}>Bebidas</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.petiscos}>
                                <View style={this.state.petiscos? styles.productListMenuClick:styles.productListMenuUnClick}>
                                    <Image style={styles.petiscoIcon}source={require('../img/foodIcon.png')}/>
                                    <Text style={{fontSize:13}}>Petiscos</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.pedidos}>
                            <View style={this.state.pedidos? styles.productListMenuClick:styles.productListMenuUnClick}>
                                    <Image style={styles.pedidosIcon} source={require('../img/shoppingIcon.png')}/>
                                    <Text style={{fontSize:13}}>Pedidos</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {this.state.bebidas? <ProductList quantitatyIncr={this.quantitatyIncr} 
                        quantitaty={this.state.quantitaty} quantitatyDecr={this.quantitatyDecr}/>:null}
                    {this.state.petiscos? <ProductList quantitatyIncr={this.quantitatyIncr} 
                        quantitaty={this.state.quantitaty} quantitatyDecr={this.quantitatyDecr}/>:null} 
                    {this.state.perfil? <Perfil/>:null}
                    {this.state.pedidos? <Pedidos/>:null}
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
    imageContainer:{
        width:width,
        height:152,
        flex:1
    },
    menuContainer:{
        alignItems:'center',
        width:width,
        backgroundColor:'#F5F5F5',
        height:126
    },
    menuContainer1:{
        borderBottomColor:'#C4C4C4',
        borderBottomWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%'
    },
    menuContainerPerfilQrCode:{
        marginTop:12,
        marginBottom:12,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    menuContainerPerfilQrCodeClick:{
        borderBottomColor:'black',
        borderBottomWidth:1
    },
    QrCodeIcon:{
        marginRight:6,
        width:30,
        height:30
    },
    userImage:{
        borderRadius:100,
        width:30,
        height:30
    },
    menuContainer2:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%',
        marginTop:12
    },
    productListMenuUnClick:{
        justifyContent:'center',
        alignItems:'center',
        opacity:0.5
    },
    productListMenuClick:{
        justifyContent:'center',
        alignItems:'center',
        opacity:1,
        borderBottomColor:'black',
        borderBottomWidth:1
    },
    bebidaIcon:{
        width:30,
        height:30
    },
    petiscoIcon:{
        width:40,
        height:30
    },
    pedidosIcon:{
        width:35,
        height:30
    }
})
