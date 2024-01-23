import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AppColors} from './Color';
import {responsiveFontSize, responsivePadding} from './Responsive';

const CategoryListData = ({category}) => {
  const [selectedItem, setSelectedItem] = useState('Popular');
  const renderItem = ({item}) => {
    const isSelected = selectedItem === item.name;
    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          {
            backgroundColor: isSelected
              ? AppColors.acticeColor
              : AppColors.white,
          }, // Change the background color when selected
        ]}
        onPress={() => setSelectedItem(item.name)}>
        <Text
          style={{
            fontSize: responsiveFontSize(18),
            color: isSelected ? AppColors.white : AppColors.black,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainconatiner}>
      <View style={styles.flatlistView}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={category}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default CategoryListData;

const styles = StyleSheet.create({
  mainconatiner: {
    backgroundColor: AppColors.white,
  },
  itemContainer: {
    borderWidth: responsivePadding(1),
    padding: responsivePadding(10),
    marginHorizontal: responsivePadding(10),
    borderRadius: responsivePadding(10),
    overflow: 'hidden',
  },
  gradientBorder: {
    flex: 1,
    borderRadius: responsivePadding(10),
  },
  flatlistView: {
    padding: responsivePadding(15),
    alignItems: 'center',
  },
});
