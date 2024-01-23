import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AppColors } from '../../component/Color';
import { responsiveFontSize, responsivePadding } from '../../component/Responsive';
const UserProfile = () => {
  return (
    <SafeAreaView style={styles.conatiner}>
      <View style={{justifyContent: 'center'}}>
        <View style={{marginTop: responsivePadding(50), alignItems: 'center'}}>
          <FontAwesome name="user-circle-o" size={responsiveFontSize(150)} color="black" />
        </View>
        <View style={styles.detailsHolder}>
          <View style={styles.infoHolder}>
            <Text style={styles.text}>Name: Ashish Ranjan</Text>
          </View>

          <View style={styles.infoHolder}>
            <Text style={styles.text}>Email: aviashishranjan@gmail.com</Text>
          </View>

          <View style={styles.infoHolder}>
            <Text style={styles.text}>Phone No: 6206416452</Text>
          </View>

          <View style={styles.infoHolder}>
            <Text style={styles.text}>Coin: 599</Text>
          </View>

          <View style={styles.infoHolder}>
            <Text style={styles.text}>City: Patna</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  detailsHolder: {
    padding: responsivePadding(10),
    gap: responsivePadding(15),
    width: '90%',
    alignSelf: 'center',
    marginTop: responsivePadding(40),
  },
  infoHolder: {
    borderBottomWidth: responsivePadding(2),
    padding: responsivePadding(10),
    alignItems: 'center',
    marginVertical: responsivePadding(10),
  },
  text: {
    fontSize: responsiveFontSize(18),
    fontWeight: 'bold',
  },
});
