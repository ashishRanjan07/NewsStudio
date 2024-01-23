import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Data from '../../assets/Data/Transaction.json';
import {AppColors} from '../../component/Color';
import {
  responsiveFontSize,
  responsivePadding,
} from '../../component/Responsive';

const UserWallet = () => {
  const renderTransactions = () => {
    return Data.map(item => (
      <View style={{marginBottom: 20}} key={item.id}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
          {item.date}
        </Text>
        {item.transaction.map(transaction => (
          <View
            key={transaction.id}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              borderWidth: 2,
              borderRadius: 10,
              marginVertical: 5,
            }}>
            <Text style={styles.text}>{transaction.name}</Text>
            <Text
              style={[
                styles.text,
                {color: transaction.type === 'credit' ? 'green' : 'red'},
              ]}>
              {transaction.amount}
            </Text>
          </View>
        ))}
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={AppColors.white} />
      {/* Wallet Section */}
      <View style={styles.walletView}>
        <View style={styles.viewHolder}>
          <Text style={styles.text}>Available Balance</Text>
          <Text style={[styles.text, {color: AppColors.white}]}>Rs. 599</Text>
        </View>
        <View style={{marginHorizontal: responsivePadding(25)}}>
          <Entypo name="squared-plus" size={responsiveFontSize(50)} color="white" />
        </View>
      </View>
      {/* Transaction Section */}
      <ScrollView style={[styles.viewHolder, {marginBottom: responsivePadding(10), flex: 1}]}>
        <Text style={styles.text}>Transaction</Text>

        {renderTransactions()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserWallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  walletView: {
    borderWidth: responsivePadding(2),
    backgroundColor: '#add8e6',
    width: '90%',
    alignSelf: 'center',
    marginVertical: responsivePadding(20),
    borderRadius: responsivePadding(20),
    borderColor: '#add8e6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewHolder: {
    padding: responsivePadding(20),
    gap: responsivePadding(20),
  },
  text: {
    fontSize: responsiveFontSize(20),
    fontWeight: '600',
    color: AppColors.black,
  },
});
