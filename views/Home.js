import React from 'react';
import { Text, View, Button, Image} from 'react-native';
import {styles} from '../assets/CSS/Css';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';


export default function Home(props) {
        
    return (

            <ScrollView>
    
            <View style={styles.container4}>
            <TouchableOpacity style={styles.sobre_img}><Image source={require('../assets/img/cosmeticos.png')} />
            </TouchableOpacity>
             </View>
             <View style={styles.home_view}>
                 <Text style={styles.text_about2}><Text style={styles.textStrong}>
                 Aproveite as promoções!</Text></Text>

                 <View><Text style={styles.text_about}>Aqui você encontra os melhores consméticos com promoções todos
                 os dias!
                 </Text>
                 
                 </View>
        
             </View>
             </ScrollView>
            
            
        );
    }