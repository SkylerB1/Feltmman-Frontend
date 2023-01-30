import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import Container from '../../components/Containers/Container';
import HeaderComponent from '../../components/Headers/HeaderComponent';
import PersonViewComponent from '../../components/ChatItem/PersonViewComponent';
import ItemSeparator from '../../components/ItemSeparator/ItemSeparator';
const intialData = [
  {
    id: 1,
    name: 'Simon Dubois',
    message: 'Hi, how are you doing?',
    profile: null,
    time: '5:30PM',
    read: true,
    unread: 0,
  },
  {
    id: 2,
    name: 'Jayden Lavoie',
    message: 'I need  your help',
    profile: null,
    time: '5:30PM',
    read: true,
    unread: 0,
  },
  {
    id: 3,
    name: 'Simon Dubois',
    message: 'Lets meet tomorrow dear.',
    profile: null,
    time: '5:30PM',
    read: false,
    unread: 1,
  },
  {
    id: 4,
    name: 'Jayden Lavoie',
    message: 'have you applied for exam which is going to be held tomorrow',
    profile: null,
    time: '5:30PM',
    read: false,
    unread: 2,
  },
  {
    id: 5,
    name: 'Jayden Lavoie',
    message: 'Hi, how are you doing?',
    profile: null,
    time: '5:30PM',
    read: true,
    unread: 0,
  },
  {
    id: 6,
    name: 'Jayden Lavoie',
    message: 'Hi, how are you doing?',
    profile: null,
    time: '5:30PM',
    read: true,
    unread: 0,
  },
  {
    id: 7,
    name: 'Jayden Lavoie',
    message: 'Hi, how are you doing?',
    profile: null,
    time: '5:30PM',
    read: true,
    unread: 0,
  },
  {
    id: 8,
    name: 'Jayden Lavoie',
    message: 'Hi, how are you doing?',
    profile: null,
    time: '5:30PM',
    read: true,
    unread: 0,
  },
];
const Chat = () => {
  const [Chats, setChats] = useState(intialData);
  const renderItem = useCallback(
    ({item}) => {
      return <PersonViewComponent title={item.name} description={item.message} icon={false} time={item.time} read={item.read} unread={item.unread} />;
    },
    [Chats],
  );
  const keyExtractor = useCallback(item => item.id, []);
  return (
    <Container>
      <HeaderComponent title="Chats" icon="Setting" search={true} />
      <FlatList
        data={Chats}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ItemSeparator}
      />
    </Container>
  );
};

export default Chat;

const styles = StyleSheet.create({});
