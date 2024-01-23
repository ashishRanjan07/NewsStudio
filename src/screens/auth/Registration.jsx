import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { responsiveFontSize, responsivePadding } from '../../component/Responsive';
import { AppColors } from '../../component/Color';

const Registration = ({navigation}) => {
  const [isMediaReporter, setIsMediaReporter] = useState(false);
  const [isVisitor, setIsVisitor] = useState(false);

  return (
    <ScrollView>
      <SafeAreaView style={styles.mainContainer}>
        {/* Header Image */}
        <View style={styles.imageView}>
          <Image
            source={require('../../assets/Image/newsLogo.png')}
            resizeMode="contain"
            style={styles.imageStyle}
          />
        </View>
        {/* TextInput box for the User Name */}
        <View style={styles.inputView}>
          <Feather
            name="user"
            size={24}
            color="gray"
            style={{marginTop: Platform.OS === 'ios' ? 0 : responsivePadding(10)}}
          />
          <TextInput
            style={styles.textInputStyle}
            placeholderTextColor="gray"
            placeholder="UserName"
          />
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
            placeholder="Email"
          />
        </View>
        {/* TextInput field for the Phone Number */}
        <View style={styles.inputView}>
          <Feather
            name="smartphone"
            size={24}
            color="gray"
            style={{marginTop: Platform.OS === 'ios' ? 0 : responsivePadding(10)}}
          />
          <TextInput
            style={styles.textInputStyle}
            placeholderTextColor="gray"
            placeholder="Phone Number"
          />
        </View>
        {/* TextInput field for the Password */}
        <View style={styles.inputView}>
          <MaterialIcons
            name="password"
            size={24}
            color="gray"
            style={{marginTop: Platform.OS === 'ios' ? 0 : responsivePadding(10)}}
          />
          <TextInput
            style={styles.textInputStyle}
            placeholderTextColor="gray"
            placeholder="Password"
          />
        </View>
        {/* Selector Section */}
        <View style={styles.selectorView}>
          <Text style={styles.textColor}>I am a</Text>
          <View style={styles.selectorTextView}>
            <View style={styles.checkbox}>
              <BouncyCheckbox
                isChecked={isMediaReporter}
                onPress={isChecked => setIsMediaReporter(isChecked)}
              />
              <Text style={styles.textColor}>Media Reporter</Text>
            </View>
            <View style={styles.checkbox}>
              <BouncyCheckbox
                isChecked={isVisitor}
                onPress={isChecked => setIsVisitor(isChecked)}
              />
              <Text style={styles.textColor}>Visitor</Text>
            </View>
          </View>
        </View>
        {/* Button */}
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => navigation.navigate('Verification')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={{width: '80%'}}>
          <TouchableOpacity
            style={{padding: 10}}
            onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.textColor, {textAlign: 'center'}]}>
              Already have an account ?
            </Text>
          </TouchableOpacity>
        </View>
        {/* or sign in with  */}
        <View style={styles.oRView}>
          <Text style={styles.textColor}>
            ---------- or Sign in with ----------
          </Text>
        </View>
        {/* Socail Login Icons */}
        <View style={styles.iconView}>
          <View style={styles.iconStyle}>
            <Fontisto name="google" size={responsiveFontSize(24)} color={AppColors.gray} />
          </View>
          <View style={styles.iconStyle}>
            <Fontisto name="facebook" size={responsiveFontSize(24)} color={AppColors.gray} />
          </View>
          <View style={styles.iconStyle}>
            <Fontisto name="twitter" size={responsiveFontSize(24)} color={AppColors.gray} />
          </View>
          <View style={styles.iconStyle}>
            <Fontisto name="apple" size={responsiveFontSize(24)} color={AppColors.gray} />
          </View>
        </View>
        {/* Bottom Text */}
        <View style={styles.bottomTextView}>
          <Text style={styles.bottomText}>
            By signing up to News Studios you are accepting our Terms &
            Conditions
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  imageView: {
    marginVertical: responsivePadding(10),
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
  selectorView: {
    width: '80%',
    padding: responsivePadding(10),
    gap: responsivePadding(10),
  },
  selectorTextView: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsivePadding(10),
  },
  textColor: {
    fontSize: responsiveFontSize(18),
    color: AppColors.gray,
  },
  buttonView: {
    backgroundColor: AppColors.acticeColor,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: responsivePadding(15),
    borderRadius: responsivePadding(10),
    marginVertical: responsivePadding(10),
  },
  buttonText: {
    fontSize: responsiveFontSize(18),
    color: AppColors.white,
  },

  oRView: {
    width: '80%',
    marginVertical: responsivePadding(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    marginVertical: responsivePadding(10),
  },
  iconStyle: {
    borderWidth: responsivePadding(2),
    padding: responsivePadding(10),
    width: responsivePadding(50),
    height: responsivePadding(50),
    alignItems: 'center',
  },
  bottomTextView: {
    flex: 1,
    width: '80%',
    justifyContent: 'flex-end',
    marginVertical: responsivePadding(10),
  },
  bottomText: {
    textAlign: 'center',
  },
});
