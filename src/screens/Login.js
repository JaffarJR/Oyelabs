import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import {useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const validateEmail = email => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const loginHandler = () => {
    if (!validateEmail(email)) {
      alert('Please provide a valid email address');
      return;
    } else if (password.length < 6) {
      alert('Password should have more than 6 characters');
      return;
    }
    navigation.navigate('Home');
    setEmail(null);
    setPassword(null);
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.root}>
      <LinearGradient
        colors={['rgba(0,86,255,1)', 'rgba(40,164,107,1)']}
        style={styles.background}
        end={{x: 0, y: 0.7}}
      />
      <View style={[styles.topContainer, {height: height / 2}]}>
        <Text style={{fontSize: 50, fontWeight: 'bold', color: '#fff'}}>
          BRAND
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.emailContainer}>
          <Feather name="mail" size={24} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#fff"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.passwordContainer}>
          <FontAwesome name="lock" size={24} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#fff"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity onPress={loginHandler}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  brand: {},
  input: {
    flex: 1,
    color: 'black',
    fontSize: 24,
    color: '#fff',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 50,
  },
  icon: {
    marginRight: 10,
  },
  emailContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
    // paddingBottom: 5,
  },
  passwordContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    // paddingBottom: 5,
  },
  buttonContainer: {
    marginTop: 30,
    backgroundColor: '#fff',
    // height: 40,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 24,
  },
});
