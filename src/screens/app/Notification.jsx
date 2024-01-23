import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveFontSize,
  responsivePadding,
} from '../../component/Responsive';
import {AppColors} from '../../component/Color';

const Notification = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={{margin: responsivePadding(10)}}>
        <View style={styles.seprateLine} />
        <View style={styles.viewHolder}>
          <View style={styles.view1}>
            <Text style={styles.header}>New News</Text>
            <Text style={styles.subHeader}>Push</Text>
          </View>
          <TouchableOpacity>
            <AntDesign
              name="rightcircleo"
              size={responsiveFontSize(30)}
              color={AppColors.black}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.seprateLine} />
        <View style={styles.viewHolder}>
          <View style={styles.view2}>
            <Text style={styles.header}>News Updates</Text>
            <Text style={styles.subHeader}>Push, Email</Text>
          </View>
          <TouchableOpacity>
            <AntDesign
              name="rightcircleo"
              size={responsiveFontSize(30)}
              color={AppColors.black}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.seprateLine} />

        <View style={styles.viewHolder}>
          <View style={styles.view2}>
            <Text style={styles.header}>Popular Updates</Text>
            <Text style={styles.subHeader}>Push,Email</Text>
          </View>
          <TouchableOpacity>
            <AntDesign
              name="rightcircleo"
              size={responsiveFontSize(30)}
              color={AppColors.black}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.seprateLine} />

        <View style={styles.viewHolder}>
          <View style={styles.view2}>
            <Text style={styles.header}>App Update</Text>
            <Text style={styles.subHeader}>Push</Text>
          </View>
          <TouchableOpacity>
            <AntDesign
              name="rightcircleo"
              size={responsiveFontSize(30)}
              color={AppColors.black}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.seprateLine} />

        <View style={styles.viewHolder}>
          <View style={styles.view2}>
            <Text style={styles.header}>Email Updates</Text>
            <Text style={styles.subHeader}>Push, Email</Text>
          </View>
          <TouchableOpacity>
            <AntDesign
              name="rightcircleo"
              size={responsiveFontSize(30)}
              color={AppColors.black}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.seprateLine} />

        <View style={styles.viewHolder}>
          <View style={styles.view2}>
            <Text style={styles.header}>Payment & Subscriptions</Text>
            <Text style={styles.subHeader}>Push, Email</Text>
          </View>
          <TouchableOpacity>
            <AntDesign
              name="rightcircleo"
              size={responsiveFontSize(30)}
              color={AppColors.black}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.seprateLine} />

        <View style={styles.viewHolder}>
          <View style={styles.view2}>
            <Text style={styles.header}>New Features</Text>
            <Text style={styles.subHeader}>Push</Text>
          </View>
          <TouchableOpacity>
            <AntDesign
              name="rightcircleo"
              size={responsiveFontSize(30)}
              color={AppColors.black}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.seprateLine} />

        <View style={styles.viewHolder}>
          <View style={styles.view2}>
            <Text style={styles.header}>Security</Text>
            <Text style={styles.subHeader}>Push, Email</Text>
          </View>
          <TouchableOpacity>
            <AntDesign
              name="rightcircleo"
              size={responsiveFontSize(30)}
              color={AppColors.black}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.seprateLine} />
      </View>
    </ScrollView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: AppColors.white,
    height: '100%',
  },
  seprateLine: {
    height: responsivePadding(0.7),
    backgroundColor: AppColors.gray,
  },
  viewHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: responsivePadding(10),
  },
  view1: {
    gap: responsivePadding(5),
    width: '80%',
  },
  header: {
    fontSize: responsiveFontSize(18),
    fontWeight: '500',
    color: AppColors.black,
  },
  subHeader: {
    fontSize: responsiveFontSize(16),
    fontWeight: '500',
    color: AppColors.black,
  },
  view2: {
    gap: responsivePadding(5),
    width: '80%',
  },
});
