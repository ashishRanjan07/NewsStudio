import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {AppColors} from './Color';
import {responsiveFontSize, responsivePadding} from './Responsive';

const NewsList = ({NewsData}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.renderView}>
        <View style={styles.imageView}>
          <Image
            source={{uri: item.image}}
            resizeMode="cover"
            style={{height: 300, width: '100%', borderRadius: 10}}
          />
          <View style={styles.titleHolder}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Entypo
              name="dots-three-vertical"
              size={responsiveFontSize(24)}
              color={AppColors.black}
            />
          </View>
          <View style={styles.authorView}>
            <View style={styles.authorSection}>
              <Image
                source={{uri: item.image}}
                resizeMode="cover"
                style={{width: 50, height: 50, borderRadius: 25}}
              />
              <Text style={styles.text}>{item?.author}</Text>
            </View>
            <View style={styles.dateView}>
              <Text style={styles.text}>{item.date}</Text>
              <Text style={styles.text}>{item.time}</Text>
            </View>
          </View>
          <View style={{padding: responsivePadding(10)}}>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.flatlistView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={NewsData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  flatlistView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: responsivePadding(10),
  },
  renderView: {
    borderWidth: responsivePadding(2),
    backgroundColor: AppColors.secondary,
    borderColor: AppColors.secondary,
    elevation: responsivePadding(5),
    marginBottom: responsivePadding(15),
    borderRadius: responsivePadding(10),
  },
  imageView: {
    borderRadius: responsivePadding(10),
  },
  titleHolder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: responsiveFontSize(20),
    fontWeight: 'bold',
    padding: responsivePadding(10),
    color: 'black',
    width: '90%',
  },
  authorView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  authorSection: {
    flexDirection: 'row',
    padding: responsivePadding(10),
    alignSelf: 'center',
    alignItems: 'center',
    gap: responsivePadding(10),
    width: '65%',
    overflow: 'hidden',
  },
  dateView: {
    flexDirection: 'row',
    padding: responsivePadding(10),
    alignSelf: 'center',
    alignItems: 'center',
    gap: responsivePadding(10),
    width: '35%',
  },
  text: {
    fontSize: responsiveFontSize(14),
    fontWeight: '600',
  },
  descriptionText: {
    textAlign: 'justify',
    fontSize: responsiveFontSize(16),
    fontWeight: '500',
  },
});
