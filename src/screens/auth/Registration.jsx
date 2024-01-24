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
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import auth from '@react-native-firebase/auth';
import validateInput from '../../component/ValidationComponent';
import { responsiveFontSize, responsivePadding } from '../../component/Responsive';
import { AppColors } from '../../component/Color';

const Registration = ({navigation}) => {
  const [isMediaReporter, setIsMediaReporter] = useState(false);
  const [isVisitor, setIsVisitor] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [userName, setUserName] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = async () => {
    if (!validateInput(userName, /^[A-Za-z]\w{5,29}$/, 'UserName')) {
      return;
    }

    // Email Id validation and format check
    if (
      !validateInput(
        email,
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        'Email',
      )
    ) {
      return;
    }

    // Phone Number validation and format check
    if (
      !validateInput(
        phoneNo,
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        'Phone Number',
      )
    ) {
      return;
    }

    // Condition for Password testing and format
    if (
      !validateInput(
        password,
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        'Password',
      )
    ) {
      return;
    }

    try {
      // Check if mandatory fields are filled

      // Create user with email and password
      await auth().createUserWithEmailAndPassword(email, password);

      // Additional details to be sent during registration
      const userDetails = {
        email: email,
        phoneNo: phoneNo,
        userName: userName,
        isMediaReporter: isMediaReporter,
        isVisitor: isVisitor,
      };

      // You can now send userDetails to your backend or perform any additional actions

      // Navigate to the verification screen
      navigation.navigate('Verification');

      // Show success alert
      Alert.alert('User created successfully');
    } catch (error) {
      // Handle errors during registration
      console.log('Error during registration:', error.nativeErrorMessage);
      Alert.alert(
        'Error during registration. Please try again.',
        error.nativeErrorMessage,
      );
    } finally {
      // Any cleanup or additional actions can be performed in the finally block
      console.log('Registration process completed.');
      setUserName('');
      setEmail('');
      setPhoneNo('');
      setPassword('');
      setIsMediaReporter(false);
      setIsVisitor(false);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
            value={userName}
            onChangeText={text => setUserName(text)}
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
            value={email}
            onChangeText={text => setEmail(text)}
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
            value={phoneNo}
            maxLength={10}
            onChangeText={text => setPhoneNo(text)}
          />
        </View>
        {/* TextInput field for the Password */}
        <View style={[styles.inputView,{alignItems:'center'}]}>
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
            value={password}
            secureTextEntry={!isPasswordVisible}
            onChangeText={text => setPassword(text)}
          />
           <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Feather
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
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
        <TouchableOpacity style={styles.buttonView} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={{width: '80%'}}>
          <TouchableOpacity
            style={{padding: responsivePadding(10)}}
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
            <Fontisto name="google" size={responsiveFontSize(24)} color="gray" />
          </View>
          <View style={styles.iconStyle}>
            <Fontisto name="facebook" size={responsiveFontSize(24)} color="gray" />
          </View>
          <View style={styles.iconStyle}>
            <Fontisto name="twitter" size={responsiveFontSize(24)} color="gray" />
          </View>
          <View style={styles.iconStyle}>
            <Fontisto name="apple" size={responsiveFontSize(24)} color="gray" />
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
    borderColor: 'gray',
    justifyContent: 'center',
  },
  textInputStyle: {
    fontSize: responsiveFontSize(18),
    marginLeft: responsivePadding(10),
    width: '80%',
    color: 'gray',
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
    justifyContent: 'space-between',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textColor: {
    fontSize: responsiveFontSize(18),
    color: 'gray',
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
    color: 'white',
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