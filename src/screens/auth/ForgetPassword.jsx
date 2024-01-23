import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { AppColors } from '../../component/Color';
import { responsiveFontSize, responsivePadding } from '../../component/Responsive';

const ForgetPassword = () => {
  return (
    <SafeAreaView style={styles.mainContaner}>
        {/* Header Image */}
        <View style={styles.imageView}>
          <Image
            source={require('../../assets/Image/newsLogo.png')}
            resizeMode="contain"
            style={styles.imageStyle}
          />
        </View>
        {/* Login Text */}
        <View style={styles.textView}>
          <Text style={styles.textColor}>Forget Password</Text>
        </View>
        {/* TextInput field for the Email */}
        <View style={styles.inputView}>
        <Fontisto
                name="email"
            size={24}
            color="gray"
            style={{marginTop: Platform.OS === 'ios' ? 0 : responsivePadding(10)}}
          />
          <TextInput
            style={styles.textInputStyle}
            placeholderTextColor="gray"
            placeholder="Enter Email id"
          />
        </View>
        <View style={{width:'80%'}}>
        <TouchableOpacity style={styles.buttonView}>
              <Text style={styles.buttonText}>Forget password</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
  mainContaner: {
    flex:1,
    backgroundColor: AppColors.white,
    justifyContent:'center',
    alignItems:'center'
  },
  imageView: {
    marginVertical: responsivePadding(10),
    alignItems:'center'
  },
  imageStyle: {
    height: 150,
    width: 200,
  },
  inputView: {
    flexDirection: 'row',
    width: '80%',
    marginVertical: responsivePadding(10),
    borderRadius: responsivePadding(10),
    paddingVertical: responsivePadding(10),
    paddingHorizontal: responsivePadding(10),
    borderWidth: responsivePadding(2),
    borderColor: AppColors.gray,
    justifyContent: 'center',
  },
  textInputStyle: {
    fontSize: responsiveFontSize(18),
    marginLeft: responsivePadding(10),
    width: '80%',
    color: AppColors.gray,
  },
  textColor: {
    fontSize: responsiveFontSize(20),
    color: AppColors.gray,
    fontWeight: '600',
  },
  textView: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: responsivePadding(15),
  },
  buttonView: {
    backgroundColor: AppColors.acticeColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: responsivePadding(15),
    borderRadius: responsivePadding(10),
    marginVertical: responsivePadding(10),
  },
  buttonText: {
    fontSize: responsiveFontSize(18),
    color: AppColors.white,
  }
})