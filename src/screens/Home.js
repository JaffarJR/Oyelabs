import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {useState} from 'react';
import {useWindowDimensions} from 'react-native';
const Home = () => {
  const {height} = useWindowDimensions();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('Posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snap => {
        const data = snap.docs.map(doc => doc.data());
        setItems(data);
      });

    return unsubscribe;
  }, []);

  const navigation = useNavigation();

  const listItemComponent = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', {
            item: item,
          })
        }>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Image
            style={{height: 100, width: 100}}
            source={{
              uri: item.image,
            }}
          />
          <View
            style={{
              marginLeft: 12,
              justifyContent: 'space-between',
            }}>
            <View>
              <Text numberOfLines={2} style={{color: 'grey', fontSize: 28}}>
                {item.title}
              </Text>
              <Text style={{fontSize: 18, color: 'grey'}}>{item.address}</Text>
            </View>
            <Text style={{fontSize: 18, color: 'grey'}}>
              {item.likes} likes
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.root}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        ListHeaderComponent={() => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Add')}>
              <View
                style={{
                  alignSelf: 'center',
                  backgroundColor: '#4278f5',
                  borderRadius: 10,
                  padding: 10,
                  marginTop: 20,
                }}>
                <Text style={{fontSize: 20}}>Add an Item</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        renderItem={listItemComponent}
        ListEmptyComponent={() => (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: height - 150,
            }}>
            <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
              No Posts Available
            </Text>
          </View>
        )}
        ListFooterComponent={() => <View style={{marginBottom: 20}}></View>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  root: {
    marginTop: 20,
    marginHorizontal: 20,
    flex: 1,
  },
});
