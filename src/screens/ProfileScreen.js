import React, { useState, useEffect } from 'react';
import { Center, Box, VStack, Avatar, Text, Divider, Button, HStack, Icon, Badge, ScrollView, Alert, Progress, Skeleton, Spinner, Toast,
  useToast } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useColorMode } from 'native-base';

const ProfileScreen = () => {

  const [showAlert, setShowAlert] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const toast = useToast();

  useEffect(() => {
    //Simula la carga de datos del perfil de usuario

    const loadUserData = async () => {
      setLoading(true);
      setProgress(20);

      //Simulación de progreso
      setTimeout(() => setProgress(60), 1000);
      setTimeout(() => setProgress(100), 2000);

      setTimeout(() => {
        setUserData({
          name: "Juan Pérez",
          email: "juan.perez@example.com",
          bio: "Desarrollador de software apasionado por React Native y el desarrollo móvil."
        });
        setLoading(false);

        toast.show({
          title: "Perfil cargado",
          status: "success",
          description: "El perfil del usuario ha sido cargado exitosamente.",
          duration: 3000,
          isClosable: true
        });
      }, 5000);
    };

    loadUserData();
  }, []);

  return(
    <Center flex={1} px={4}>
      <VStack space={4} w="100%">

        {/* Alerta de error */}
        {showAlert && (
          <Alert w="100%" status="error" colorScheme="error"
          onClose={() => setShowAlert(false)}>
            <Alert.Icon /> {/* Icono de error */}
            <Text color= "error.700"> Hubo un error al cargar los datos</Text>
          </Alert>
        )}

        {/* Simulación de carga de datos */}
        {loading ? (
          <>
          <Text>Cargando perfil del usuario...</Text>
          <Progress value={progress} colorScheme="blue" />
          <Skeleton.Text lines={3} mt={4} />
          <Skeleton mt={2} h="20" />
          <Skeleton mt={2} h="20" />
          <Spinner size="lg" color="blue.500" mt={4} />
          </>
        ) : (
          <>
          {/* Información de usuario */}
          <Box p={4} bg="white" rounded="lg" shadow={1}>
            <Text fontSize="xl" fontWeight="bold">{userData.name}</Text>
            <Text color="gray.500">{userData.email}</Text>
            <Text mt={2}>{userData.bio}</Text>
          </Box>

          <Button colorScheme="danger" onPress={() => setShowAlert(true)}>
            AUXILIO
          </Button>
          </>
        )}
      </VStack>
    </Center>
  );
};
  export default ProfileScreen;

//   const { colorMode } = useColorMode();

//   return (
//     <ScrollView>
//     <Center flex={1} bg={colorMode === 'light' ? 'coolGray.100' : 'coolGray.800'} p={4}>
//       <Box
//         bg={colorMode === 'light' ? 'white' : 'coolGray.700'}
//         rounded="lg"
//         shadow={6}
//         width="90%"
//         maxWidth="400px"
//         p={6}
//       >
//         <VStack space={4} alignItems="center">
//           <Avatar
//             size="xl"
//             source={{
//               uri: './assets/jinx.jpg',
//             }}
//           />
//           <Text fontSize="2xl" fontWeight="bold">
//             John Doe
//           </Text>
//           <Text fontSize="md" color="gray.500">
//             john.doe@example.com
//           </Text>
//           <Text fontSize="sm" color="gray.400" italic>
//             Desarrollador de aplicaciones móviles
//           </Text>
//         </VStack>

//         <Divider my={4} />

//         <VStack space={2}>
//           <Text fontSize="md" fontWeight="medium">
//             Bio
//           </Text>
//           <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
//             Apasionado por el desarrollo de aplicaciones móviles con experiencia en React Native,
//             JavaScript y diseño de interfaces de usuario. Siempre dispuesto a aprender y colaborar
//             en proyectos desafiantes.
//           </Text>
//         </VStack>

//         <VStack space={2}>
//           <Text fontSize="md" fontWeight="medium">
//             Habilidades
//           </Text>
//           <HStack space={2} flexWrap="wrap">
//             <Badge colorScheme="info" variant="outline">
//               React Native
//             </Badge>
//             <Badge colorScheme="info" variant="outline">
//               JavaScript
//             </Badge>
//             <Badge colorScheme="info" variant="outline">
//               UI/UX Design
//             </Badge>
//             <Badge colorScheme="info" variant="outline">
//               Firebase
//             </Badge>
//           </HStack>

//         </VStack>

//         <Divider my={4} />

//         <HStack space={6} justifyContent="center" alignItems="center">
//           <Button variant="ghost" leftIcon={<Icon as={Ionicons} name="logo-linkedin" size="sm" />} colorScheme="blue">
//             LinkedIn
//           </Button>
//           <Button variant="ghost" leftIcon={<Icon as={Ionicons} name="logo-github" size="sm" />} colorScheme="dark">
//             GitHub
//           </Button>
//           <Button variant="ghost" leftIcon={<Icon as={Ionicons} name="mail-outline" size="sm" />} colorScheme="red">
//             Email
//           </Button>
//         </HStack>

//         <Divider my={4} />

//         <VStack space={2} alignItems="flex-start">
//           <Text fontSize="md" fontWeight="medium">
//             Detalles adicionales
//           </Text>
//           <HStack JustifyContent="space-between" width="100%">
//             <Text fontSize="sm" color="gray.500">
//               Ubicación:
//             </Text>
//             <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
//               Ciudad de México, México
//             </Text>
//           </HStack>
//           <HStack justifyContent="space-between" width="100%">
//             <Text fontSize="sm" color="gray.500">
//               Idiomas:
//             </Text>
//             <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
//               Español, Inglés
//             </Text>
//           </HStack>
//           <HStack justifyContent="space-between" width="100%">
//             <Text fontSize="sm" color="gray.500">
//               Experiencia:
//             </Text>
//             <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
//               5 años
//             </Text>
//           </HStack>"
//         </VStack>
//       </Box>
//     </Center>
//     </ScrollView>
//   );
// };

