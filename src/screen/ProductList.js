import React, {Component} from 'react'
import {TouchableOpacity, ScrollView, Image, Dimensions, StyleSheet, TextInput, Text, View, TouchableWithoutFeedback,TouchableNativeFeedback} from 'react-native'

const width= Dimensions.get('window').width
const height= Dimensions.get('window').height

export default class ProductList extends Component{
    constructor(){
        super();
        this.state = {quantitaty:1, petiscos:null}
    };

    petiscos = () =>{
        console.warn('oi')
        if(this.state.petiscos){
            return this.setState({petiscos:null})
        }else{
            return this.setState({petiscos: true})
        }
    };

    render(){
        return (
            <React.Fragment>
            <View style={{width:width, backgroundColor:'#E5E5E5', flexDirection:'row', justifyContent:'center', alignItems:'center', height:35}}>
            <View style={{width:'80%', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Text style={{color:'#000000', fontSize:14}}>Filtrar por:</Text>
                <TouchableOpacity>
                <Text style={{color:'#000000', fontSize:14}}>Preço</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={{color:'#000000', fontSize:14}}>Marca</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={{color:'#000000', fontSize:14}}>Nome</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{justifyContent:'center', alignItems:'center' }}>
            <View style={{flexDirection:'row', marginTop:12,width:'90%',borderBottomColor:'#C4C4C4', borderBottomWidth:1}}>
                <Image style={{marginBottom:12, width:50, height:50}}source={require('../img/beerIcon.png')}/>
                <View style={{marginLeft:6}}>
                    <Text style={{fontSize:18, color:'#000000'}}>Antártica latão</Text>
                <Text style={{fontSize:13, color:'#000000'}}>R$ 7,00</Text>
                <View style={{width:'60%', marginBottom:12,marginLeft:40, flexDirection:'row', justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={()=> this.props.quantitatyDecr()}>
                    <View  style={{paddingRight:10}}>
                    <Text>-</Text>
                    </View>
                        
                    </TouchableOpacity>
                    <View 
                        style={{marginLeft:6, marginRight:6, justifyContent:'center',alignItems:'center',width:'13%',borderColor:'#E5E5E5', borderWidth:1}}>
                        <Text>{this.props.quantitaty}</Text>
                    </View>
                    <TouchableOpacity onPress={()=> this.props.quantitatyIncr()}>
                    <View  style={{paddingLeft:10, paddingRight:9}}>
                        <Text>+</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:100 ,justfyContent:'center', alignItems:'center', borderRadius:1, height:24, marginLeft:38, borderColor:'#E5E5E5', borderWidth:1}}>
                        <View >
                            <Text style={{ marginTop:3,fontSize:10}}>Adicionar pedido</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            
        </View>
        </React.Fragment>
        )
    }
   
}