import React, { useState } from 'react';
import {
  Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center,
} from "native-base";
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen({ onLogin }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    onLogin();
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input 
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input 
              type="password" 
              value={password}
              onChangeText={setPassword}
            />
            <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500"
            }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleLogin}>
            Sign in
          </Button>

          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600">
              I'm a new user.{" "}
            </Text>
            <Pressable onPress={() => navigation.navigate('Registro')}>
              <Text color="indigo.500" fontWeight="medium" fontSize="sm">
                Sign Up
              </Text>
            </Pressable>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
