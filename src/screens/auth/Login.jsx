import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React,{useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AppColors} from '../../component/Color';
import {
  responsiveFontSize,
  responsivePadding,
} from '../../component/Responsive';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    auth()
      .signInWithEmailAndPassword(userid, password)
      .then(response => {
        console.log(response);
        navigation.navigate('CitySearch')
      })
      .catch(error => {
        console.log(error);
        Alert.alert(error.nativeErrorMessage)
      });
  };

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
        <Text style={styles.textColor}>Login</Text>
      </View>
      {/* TextInput field for the Email */}
      <View style={styles.inputView}>
        <Feather
          name="user"
          size={24}
          color="gray"
          style={{marginTop: Platform.OS === 'ios' ? 0 : 10}}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholderTextColor="gray"
          placeholder="User Id"
          value={userid}
          onChangeText={text => setUserId(text)}
        />
      </View>
      {/* TextInput field for the Password */}
      <View style={styles.inputView}>
        <MaterialIcons
          name="password"
          size={24}
          color="gray"
          style={{marginTop: Platform.OS === 'ios' ? 0 : 10}}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholderTextColor="gray"
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      {/*Forget Password View */}
      <View style={{width: '80%'}}>
        <TouchableOpacity
          style={{padding: responsivePadding(10)}}
          onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={[styles.textColor, {textAlign: 'center'}]}>
            Forget Password ?
          </Text>
        </TouchableOpacity>
      </View>

      {/* Button */}
      <View style={{width: '80%'}}>
      <TouchableOpacity style={styles.buttonView} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/*Don;t have an account View */}
      <View style={{width: '80%'}}>
        <TouchableOpacity
          style={{padding: responsivePadding(10)}}
          onPress={() => navigation.navigate('Registration')}>
          <Text style={[styles.textColor, {textAlign: 'center'}]}>
            Don't have an account ?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContaner: {
    flex: 1,
    backgroundColor: AppColors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    marginVertical: responsivePadding(10),
    alignItems: 'center',
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
    color: 'gray',
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
  },
});
