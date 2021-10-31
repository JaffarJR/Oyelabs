import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const Edit = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const item = route.params.item;

  const [title, setTitle] = useState(item.title);
  const [address, setAddress] = useState(item.address);
  const [likes, setLikes] = useState(item.likes);
  const [image, setImage] = useState(item.image);

  const editPostHandler = () => {
    firestore()
      .collection('Posts')
      .doc(item.id)
      .set(
        {
          title,
          address,
          likes,
          image,
          timestamp: firestore.FieldValue.serverTimestamp(),
        },
        {merge: true},
      )
      .then(() => {
        navigation.navigate('Home');
      });
  };

  const deletePostHandler = () => {
    firestore()
      .collection('Posts')
      .doc(item.id)
      .delete()
      .then(() => navigation.navigate('Home'));
  };
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.title}>Edit your post</Text>
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
        <TouchableOpacity onPress={editPostHandler}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Edit Post</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.or}>OR</Text>
        <TouchableOpacity onPress={deletePostHandler}>
          <View style={[styles.buttonContainer, {marginTop: 0}]}>
            <Text style={styles.buttonText}>Delete Post</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Edit;

const styles = StyleSheet.create({
  root: {
    flex: 1,
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
    width: 300,
    paddingHorizontal: 20,
    fontSize: 18,
    borderRadius: 30,
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
    color: '#000',
  },
});
