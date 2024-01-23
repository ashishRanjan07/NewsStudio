import { SafeAreaView, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../component/Header'
import CategoryListData from '../../component/CategoryListData'
import CategoryData from '../../assets/Data/NewsCategory.json';
import NewsData from '../../assets/Data/NewsData.json';
import NewsList from '../../component/NewsList';

const Home = ({ route }) => {
  const { selectedCity } = route.params;
  const [category ,setCategory] = useState(CategoryData);
  return (
    <SafeAreaView style={{flex:1}}>
      <Header selectedCity={selectedCity} />
     <CategoryListData category={category}/>
     <View style={{flex:1}}> 
     <NewsList NewsData={NewsData}/>
     </View>
   
    </SafeAreaView>
  )
}

export default Home