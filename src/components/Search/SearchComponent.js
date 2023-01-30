import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import React, { useRef } from 'react'
import { colors } from '../colors'
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen'
import SearchIcon from '../../assets/images/SearchIcon'

const SearchComponent = () => {
  const inputRef = useRef(null)
  const handleInputClick = () => {
    inputRef.current?.focus()
  }
  return (
    <Pressable onPress={handleInputClick} style={{borderWidth:1,borderRadius:50,borderColor:colors.regularGrey,paddingHorizontal:wp(4),flexDirection:'row',alignItems:'center'}}>
      <TextInput ref={inputRef} style={{fontSize:wp(3.7),flex:1}} placeholder='Search here..'/>
      <SearchIcon />
    </Pressable>
  )
}

export default SearchComponent

const styles = StyleSheet.create({})