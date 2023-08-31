import React from "react";
import {Text, StyleSheet, Dimensions } from 'react-native';
import topo from "../../../assets/topo.png";

const width = Dimensions.get("screen").width;

export default function Avaliacao(){
    return(
        <>
     <Image source={topo} style={estilos.topo}/>
<Text>  
la floristería del amor
</Text>
        </>
    );
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: (578 / 768) * width,
    },
})