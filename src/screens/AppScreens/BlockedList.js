import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import Container from '../../components/Containers/Container'
import NavigationHeader from '../../components/Headers/NavigationHeader'
import SelectOption from '../../components/SelectOptions/SelectOption';
import { colors } from '../../components/colors';
const initialData = [
  {
    id: 1,
    contact: '+476-229-9449',
  },
  {
    id: 2,
    contact: '+476-229-9449',
  },
  {
    id: 3,
    contact: '+476-229-9449',
  },
  {
    id: 4,
    contact: '+476-229-9449',
  },
];
const BlockedList = ({navigation}) => {
    const [blockedUsers, setBlockedUsers] = useState(initialData)


    const renderItem = useCallback(({ item }) => {
        return (
            <SelectOption key={item.id} color={colors.black} showProfile profile={null} onPress={()=>navigation.navigate('ContactInfo')} title={item.contact} />
        )
    },[blockedUsers])
    const handleKeyExtractor = useCallback((item) => item.id,[])
  return (
    <Container>
        <NavigationHeader title={'Blocked'} />
          <FlatList
              data={blockedUsers}
              renderItem={renderItem}
              keyExtractor={handleKeyExtractor}
          />
    </Container>
  );
}

export default BlockedList

const styles = StyleSheet.create({})