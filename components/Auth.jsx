import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
import { supabase } from '../utils/SupabaseConfig';
import { useRouter } from 'expo-router';
import services from '../utils/services';
import { useEffect } from 'react';


  export default function Auth () {
    const router = useRouter()
    useEffect(() => {
      GoogleSignin.configure({
          scopes: ['https://www.googleapis.com/auth/drive.readonly'],
          webClientId: 'Your-web-Client-Id',
          forceCodeForRefreshToken: true,
      });
  }, []);
    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          // Sign out the user from Google Sign-In
          await GoogleSignin.signOut();
          // Sign in again
          const userInfo = await GoogleSignin.signIn();
        //   console.log(JSON.stringify(userInfo,null,2));
        if (userInfo.idToken) {
          const { data, error } = await supabase.auth.signInWithIdToken({ 'provider': 'google', 'token': userInfo.idToken });
          
          if (!error) {
              // Navigate to home screen if sign-in is successful
              await services.storeData('login','true');
              router.replace('/');
          } else {
              throw new Error('Sign-in failed');
          }
      } else {
          throw new Error('ID Token not present');
      }
  } 
         catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            console.log('user cancelled the login flow');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
            console.log('operation (e.g. sign in) is in progress already');
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            console.log('play services not available or outdated');
          } else {
            // some other error happened
            
          }
        }
      };
      
   return (
    <GoogleSigninButton
  size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Dark}
  onPress={signIn}

/>
   )

  }