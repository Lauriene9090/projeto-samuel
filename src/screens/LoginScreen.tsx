import { useState } from 'react'
import { router } from 'expo-router'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'

import { supabase } from '../services/supabase'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] =
    useState('')

  async function handleRegister() {
  const { data, error } =
    await supabase.auth.signUp({
      email,
      password,
    })

  console.log(data)

  if (error) {
    alert(error.message)
  } else {
    alert('Conta criada')
  }
}

  async function handleLogin() {
  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    })

  console.log(data)
  console.log(error)

  if (error) {
    alert(error.message)
  } else {
    alert('LOGIN OK')

    router.push('./Home')
  }
}

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#111827',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 32,
          fontWeight: 'bold',
          marginBottom: 10,
        }}
      >
        StudyFlow
      </Text>

      <Text
        style={{
          color: '#9CA3AF',
          marginBottom: 30,
        }}
      >
        Organize seus estudos
      </Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#9CA3AF"
        value={email}
        onChangeText={setEmail}
        style={{
          backgroundColor: '#1F2937',
          color: 'white',
          padding: 15,
          borderRadius: 10,
          marginBottom: 15,
        }}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#9CA3AF"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{
          backgroundColor: '#1F2937',
          color: 'white',
          padding: 15,
          borderRadius: 10,
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: '#7C3AED',
          padding: 15,
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleRegister}
        style={{
          backgroundColor: '#2563EB',
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Criar Conta
        </Text>
      </TouchableOpacity>
    </View>
  )
}