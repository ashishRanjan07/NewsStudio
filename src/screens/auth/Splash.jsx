import { Image, StyleSheet, Text, View, } from 'react-native'
import React,{useEffect} from 'react'
import { AppColors } from '../../component/Color'
import { responsiveFontSize ,responsiveImageSize} from '../../component/Responsive'

const Splash = ({navigation}) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
          navigation.replace('Login')
        },2000)
        return () => clearTimeout(timeout)
      })
    const { width: responsiveImageWidth, height: responsiveImageHeight } = responsiveImageSize(150,100);
    return (
        <View style={styles.mainContainer}>
            <Image source={require('../../assets/Image/newsLogo.png')} resizeMode='contain' style={{ width: responsiveImageWidth, height: responsiveImageHeight }}/>
            <Text style={styles.textStyle}>All type of news from trusted source for all type of the people.</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.white
    },
    imageStyle: {
        height: 200,
        width: 200,
    },
    textStyle: {
        width: '80%',
        textAlign: 'center',
        fontSize: responsiveFontSize(18),
        color: AppColors.gray
      }
})