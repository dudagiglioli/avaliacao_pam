import React from "react-native";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import topo from "../../../assets/topo.png";
import logo from "../../../assets/logo.png"

const width = Dimensions.get("screen").width;

export default function Avaliacao(){
    return<>

     <Image style={estilos.topo} source={topo}/>

     <View style={estilos.inicio}>

        <Image style={estilos.logo} source={logo}/>
        <Text style={estilos.text1}>A floricultura ideal para o melhor presente!</Text>


     </View>

    

        <Text style={estilos.text2}>A floricultura ideal para encontrar o presente do seu amor, 
                                    com diversas opções de cestas, flores e significados para presentear.</Text>

    
        </>}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: (578 / 768) * width,
    },

    titulo: {
        width: "100%",
        position: "absolute", 
        color: "black",
        textAlign: "center",
        fontSize: 30,
        lineHeight: 26,
        padding: 26,
        fontFamily: "SatisfyRegular"
      },
    
    inicio: {
        flexDirection:"row",
        paddingVertical: 12
      },
    
    text1:{
      fontSize: 17,
      lineHeight: 26,
      padding: 26,
      fontFamily: "SatisfyRegular"
    },

    logo: {
        width:52,
        height:52
        },

    text2: {
            color: "#A3A3A3",
            fontFamily: "SatisfyRegular"
          },
      
})