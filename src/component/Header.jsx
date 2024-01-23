import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import { responsiveFontSize, responsivePadding } from './Responsive';
import { AppColors } from './Color';

const Header = ({selectedCity}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.viewHolder}>
          <View>
            <Entypo name="menu" size={responsiveFontSize(40)} color="#87CEEB" />
          </View>
          <View style={styles.innerView}>
            <Entypo name="location-pin" size={responsiveFontSize(28)} color="black" />
            <Text style={styles.text}>
              {selectedCity ? `Your City: ${selectedCity}` : 'No City Selected'}
            </Text>
          </View>
        </View>

        <View style={[styles.viewHolder, {alignItems: 'center'}]}>
          <View style={styles.innerViewSecond}>
            <Octicons name="feed-star" size={responsiveFontSize(30)} color="orange" />
            <Text style={styles.text}>599</Text>
          </View>
          <View>
            <Ionicons name="notifications" color="#87CEEB" size={responsiveFontSize(40)} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: AppColors.white,
    padding: responsivePadding(15),
  },
  headerView: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: responsiveFontSize(16),
    fontWeight: '600',
    color: AppColors.black,
  },
  viewHolder: {
    flexDirection: 'row',
    gap: responsivePadding(10),
  },
  innerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerViewSecond: {
    flexDirection: 'row',
    gap: responsivePadding(15),
    borderWidth: responsivePadding(1),
    borderColor: AppColors.gray,
    borderRadius: responsivePadding(15),
    padding: responsivePadding(10),
    alignItems: 'center',
  },
});
