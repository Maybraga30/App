import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from '../assets/CSS/Css';
/* import { TouchableOpacity } from 'react-native-gesture-handler'; */

const Produtos = ({navigation}) =>  {
  
    const navHome = (screen) => {
      navigation.navigate(screen)
  }
    return(
        
        <ScrollView>
            <TouchableOpacity style={styles.img_lixo}>
                <Image source={require('../assets/img/nina.jpg')} />
        
            <View style={styles.text_lixo}>
             <Text style={styles.textStrong}>
             Perfume Nina Ricci
             </Text>
             <View><Text style={styles.textProdutos}>R$390,00
             </Text>
             </View>
         </View>
         </TouchableOpacity> 
         <TouchableOpacity style={styles.img_lixo} >
             <Image source={require('../assets/img/paleta.jpg')} />
        
            <View style={styles.text_lixo}>
             <Text style={styles.textStrong}>
            Paleta de Sombras
             </Text>
             <View><Text style={styles.textProdutos}>R$250,00
             </Text>
             </View>
         </View>
         </TouchableOpacity> 
         <TouchableOpacity style={styles.img_lixo} >
             <Image source={require('../assets/img/tractapo.jpg')} />
        
            <View style={styles.text_lixo}>
             <Text style={styles.textStrong}>
             Pó Compacto
             </Text>
             <View><Text style={styles.textProdutos}>R$29,00
             </Text>
             </View>
         </View>
         </TouchableOpacity> 
         <TouchableOpacity style={styles.img_lixo}>
             <Image source={require('../assets/img/Diesel.jpg')} />
        
            <View style={styles.text_lixo}>
             <Text style={styles.textStrong}>
            Perfume Masculino Diesel
             </Text>
             <View><Text style={styles.textProdutos}>R$370,00
             </Text>
             </View>
         </View>
         </TouchableOpacity> 
         <TouchableOpacity style={styles.img_lixo}>
             <Image source={require('../assets/img/davene.jpg')} />
        
            <View style={styles.text_lixo}>
             <Text style={styles.textStrong}>
                Hidratante Facial Davene
             </Text>
             <View><Text style={styles.textProdutos}>R$40,00
             </Text>
             </View>
         </View>
         </TouchableOpacity> 
         <TouchableOpacity style={styles.img_lixo}>
             <Image source={require('../assets/img/paco.jpg')} />
        
            <View style={styles.text_lixo}>
             <Text style={styles.textStrong}>
            Perfume Olympea
             </Text>
             <View><Text style={styles.textProdutos}>R$420,00
             </Text>
             </View>
         </View>
         </TouchableOpacity> 
         <TouchableOpacity style={styles.img_lixo}>
             <Image source={require('../assets/img/batom-payot.jpg')} />
        
            <View style={styles.text_lixo}>
             <Text style={styles.textStrong}>
             Batom Nude Payot
             </Text>
             <View><Text style={styles.textProdutos}>R$25,00
             </Text>
             </View>
         </View>
         </TouchableOpacity> 
         </ScrollView>
         );
    }
    export default Produtos;