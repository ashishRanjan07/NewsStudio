import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import Data from '../../assets/Data/About.json';
import {AppColors} from '../../component/Color';
import {
  responsiveFontSize,
  responsivePadding,
} from '../../component/Responsive';

const About = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleOpenClose = index => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const renderItem = ({item, index}) => {
    const isOpen = openIndex === index;

    return (
      <View>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => handleOpenClose(index)}>
          <Text style={styles.text}>{item.name}</Text>
          {isOpen && <Text style={styles.text}>{item.Desctiption}</Text>}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  text: {
    marginVertical: responsivePadding(10),
    fontSize: responsiveFontSize(16),
    fontWeight: '500',
    color: AppColors.black,
  },
  touch: {
    padding: responsivePadding(15),
    borderWidth: responsivePadding(1),
    width: '90%',
    alignSelf: 'center',
    marginVertical: responsivePadding(10),
    borderRadius: responsivePadding(10),
  },
});
