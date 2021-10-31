import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
const Add = () => {
  const navigation = useNavigation();

  const [title, setTitle] = useState(null);
  const [address, setAddress] = useState(null);
  const [likes, setLikes] = useState(null);
  const [image, setImage] = useState(null);

  const addPostHanler = () => {
    firestore()
      .collection('Posts')
      .add({
        title,
        address,
        likes,
        image,
        timestamp: firestore.FieldValue.serverTimestamp(),
      })
      .then(res => {
        firestore()
          .collection('Posts')
          .doc(res.id)
          .set({id: res.id}, {merge: true})
          .then(() => navigation.navigate('Home'));
      });
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.title}> Add a post</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Title</Text>
          <TextInput
            numberOfLines={1}
            multiline={true}
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Image Link</Text>
          <TextInput
            numberOfLines={1}
            multiline={true}
            style={styles.input}
            value={image}
            onChangeText={setImage}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Address</Text>
          <TextInput
            numberOfLines={1}
            multiline={true}
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Likes</Text>
          <TextInput
            numberOfLines={1}
            multiline={true}
            style={styles.input}
            keyboardType="numeric"
            value={likes}
            onChangeText={setLikes}
          />
        </View>
        <TouchableOpacity onPress={addPostHanler}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Add Post</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  inputLabel: {fontSize: 18, width: 100, color: '#000'},
  input: {
    borderWidth: 1,
    height: 50,
    flex: 1,
    paddingHorizontal: 20,
    fontSize: 18,
    marginLeft: 30,
    borderRadius: 10,
    color: '#000',
  },
  buttonContainer: {
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 25,
    marginTop: 40,
  },
  buttonText: {color: '#fff', textAlign: 'center', fontSize: 18},
  or: {
    alignSelf: 'center',
    fontSize: 18,
    marginVertical: 20,
  },
});
