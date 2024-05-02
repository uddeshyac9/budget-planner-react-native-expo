import { View, Text,Image,
  StyleSheet,TouchableOpacity   } from 'react-native';
import React from 'react';
import Colors from '../../utils/Colors'

import services from '../../utils/services';
import { useRouter } from 'expo-router';
import Auth from '../../components/Auth';


export default function LoginScreen() {
 const router = useRouter()
 
//  const handleSignIn = async () => {
//      const token = await client.login();
//      if (token) {
//        // User was authenticated
//        await services.storeData('login','true');
//       //  console.log(token);
//        router.replace('/')
//      }
//    };
  return (
    <View style={{display:'flex', alignItems:'center'}}>
     <Image source={require('./../../assets/images/loginbg.png')}
     style={styles.bgImg}/>
     <View style={styles.textContainer}>
      <Text style={{fontSize:35,
          fontWeight:'bold', 
          textAlign:'center',
          color:Colors.WHITE}}>Personal Budget Planner </Text>
           <Text style={{
                fontSize:18,
                textAlign:'center',
                color:Colors.WHITE,
                marginTop:20
            }}>
            Stay on Track, Event by Event: Your Personal Budget Planner App!
            </Text>
            <View  style={styles.button}>
              <Auth/>
            </View>
            <Text style={{fontSize:13,
            color:Colors.GRAY,marginTop:10}}>* By login/signup you will agree to our tearms and conditions</Text>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bgImg : {
    marginTop:30,
    width:200,
    height:400,
    borderWidth:5,
    borderRadius:20,
    borderColor: Colors.BLACK
  }, textContainer: {
    backgroundColor:Colors.PRIMARY,
    width:'100%',height:'100%',
    padding:20, marginTop:-30, 
      borderTopLeftRadius:30,
      borderTopRightRadius:30 
  },
  button: {
    // padding:15,
    // backgroundColor:Colors.WHITE,
    // paddingHorizontal:5,
    // borderRadius:99,
    marginTop:30
  }
})