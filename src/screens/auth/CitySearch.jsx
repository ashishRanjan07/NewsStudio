import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import citylist from '../../assets/Data/CityList.json';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsivePadding,
} from '../../component/Responsive';
import {AppColors} from '../../component/Color';

const RenderItem = React.memo(
  ({item, onSelect, selected}) => {
    const backgroundColor = selected ? '#1b98ff' : 'white';
    const textColor = selected ? AppColors.white : AppColors.black;

    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          gap: responsivePadding(10),
          padding: responsivePadding(10),
          width: '90%',
          alignSelf: 'center',
          marginVertical: responsivePadding(10),
          backgroundColor,
          borderRadius: responsivePadding(10),
        }}
        onPress={() => onSelect(item)}>
        <FontAwesome
          name="location-arrow"
          size={responsiveFontSize(24)}
          color={textColor}
        />
        <Text style={{color: textColor}}>{item.name}</Text>
      </TouchableOpacity>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.item.id === nextProps.item.id &&
      prevProps.selected === nextProps.selected
    );
  },
);

const CitySearch = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(citylist);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Filter data based on the search query
    const filteredData = citylist.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setData(filteredData);
  }, [searchQuery]);

  const handleSearch = text => {
    setSearchQuery(text);
  };

  const handleItemSelect = item => {
    setSelectedItem(item);
  };

  const handleNext = () => {
    if (selectedItem) {
      // Navigate to BottomNavigation with selected city as a parameter
      navigation.navigate('BottomNavigation', {
        selectedCity: selectedItem.name,
      });
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Search Box */}
      <View style={styles.inputView}>
        <MaterialIcons
          name="location-city"
          size={24}
          color={AppColors.gray}
          style={{marginTop: Platform.OS === 'ios' ? 0 : responsivePadding(10)}}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholderTextColor={AppColors.gray}
          placeholder="Search City"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <View style={{width: '100%', flex: 1}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <RenderItem
              item={item}
              onSelect={handleItemSelect}
              selected={item === selectedItem}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      {selectedItem && (
        <View style={{position: 'absolute', width: '50%', bottom: 0}}>
          <TouchableOpacity style={styles.buttonView} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CitySearch;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    alignItems: 'center',
  },
  inputView: {
    flexDirection: 'row',
    width: '90%',
    marginVertical: responsivePadding(20),
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
