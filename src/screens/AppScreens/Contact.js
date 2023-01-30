import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useMemo, useState } from 'react'
import Container from '../../components/Containers/Container';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import PersonViewComponent from '../../components/ChatItem/PersonViewComponent';
import ItemSeparator from '../../components/ItemSeparator/ItemSeparator';
const intialData = [
  {id: 1, name: 'Mark Wood', phone: '+1 313-979-1431', profile: null},
  {id: 2, name: 'John Doe', phone: '+1 229-910-3922', profile: null},
  {id: 3, name: 'John Doe', phone: '+1 229-910-3922', profile: null},
  {id: 4, name: 'John Doe', phone: '+1 229-910-3922', profile: null},
  {id: 5, name: 'Mark Wood', phone: '+1 313-979-1431', profile: null},
  {id: 6, name: 'John Doe', phone: '+1 229-910-3922', profile: null},
  {id: 7, name: 'John Doe', phone: '+1 229-910-3922', profile: null},
  {id: 8, name: 'John Doe', phone: '+1 229-910-3922', profile: null},
];
const Contact = () => {
    const [contacts, setContacts] = useState(intialData)
    const renderItem = useCallback(({item}) => {
        return <PersonViewComponent title={item.name} description={item.phone} icon={'Message'} />
    }, [contacts])
    const keyExtractor = useCallback((item) => item.id,[])
  return (
    <Container>
          <HeaderComponent title='Contacts' icon='Sync' search={true} />
          <FlatList
              data={contacts}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              ItemSeparatorComponent={ItemSeparator}

          />
    </Container>
  );
}

export default Contact

const styles = StyleSheet.create({})