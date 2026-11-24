import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Toast } from 'react-native-toast-notifications';
import * as zod from 'zod';

type FormValues = {
  email: string;
  password: string;
};

const authSchema = zod.object({
  email: zod.email({ message: 'Invalid email address' }),
  password: zod.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

const Auth = () => {
  const { control, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const signIn: SubmitHandler<FormValues> = data => {
    Toast.show('Signed in successfully', {
      type: 'success',
      placement: 'center',
      duration: 1500,
    });
    router.replace('/');
  };

  const signUp: SubmitHandler<FormValues> = data => {
    Toast.show('Signed up successfully', {
      type: 'success',
      placement: 'center',
      duration: 1500,
    });
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('@images/auth.png')}
        style={styles.backgroundImage}
        resizeMode='cover'
      />
      <View style={styles.overlay} />
      <Text style={styles.title}>Welcome to Gadgets</Text>
      <Text style={styles.subtitle}>Please authenticate to continue</Text>
      <Controller
        control={control}
        name='email'
        render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
          <>
            <TextInput
              placeholder='Email'
              style={styles.input}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholderTextColor='#aaa'
              autoCapitalize='none'
              editable={!formState.isSubmitting}
              textContentType='emailAddress'
              keyboardType='email-address'
              inputMode='email'
            />
            {error && <Text style={styles.error}>{error.message}</Text>}
          </>
        )}
      />
      <Controller
        control={control}
        name='password'
        render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
          <>
            <TextInput
              placeholder='Password'
              style={styles.input}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry
              placeholderTextColor='#aaa'
              autoCapitalize='none'
              editable={!formState.isSubmitting}
              textContentType='password'
              keyboardType='default'
              inputMode='text'
              passwordRules='minlength: 6;'
            />
            {error && <Text style={styles.error}>{error.message}</Text>}
          </>
        )}
      />
      <Pressable
        style={[styles.button, styles.signInButton]}
        onPress={() => handleSubmit(signIn)()}
        disabled={formState.isSubmitting}
      >
        {({ pressed }) => (
          <Text style={{ ...styles.buttonText, opacity: pressed ? 0.5 : 1 }}>Sign In</Text>
        )}
      </Pressable>
      <Pressable
        style={[styles.button, styles.signUpButton]}
        onPress={() => handleSubmit(signUp)()}
        disabled={formState.isSubmitting}
      >
        {({ pressed }) => (
          <Text
            style={{
              ...styles.buttonText,
              opacity: pressed ? 0.5 : 1,
            }}
          >
            Sign Up
          </Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '100%',
    backgroundColor: 'black',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: null,
    height: null,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#ddd',
    marginBottom: 32,
  },
  input: {
    width: '90%',
    padding: 12,
    marginBottom: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    fontSize: 16,
    color: '#000',
  },
  button: {
    padding: 16,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
  },
  signInButton: {
    backgroundColor: '#6a1b9a',
    marginBottom: 16,
  },
  signUpButton: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 16,
    textAlign: 'left',
    width: '90%',
  },
});

export default Auth;
