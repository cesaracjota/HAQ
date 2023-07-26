import React from 'react';
import { Box, Heading, Text, Button, Flex, Image } from '@chakra-ui/react';
import { FaAndroid } from 'react-icons/fa'; 
import feature1 from '../../assets/feature-1.jpg';
import feature2 from '../../assets/feature-2.jpg';
import feature3 from '../../assets/feature-3.jpg';

const Home = () => {
  return (
    <Box px={8} py={12} minH="100vh">
      <Box maxW="5xl" mx="auto" textAlign="center" mb={10}>
        <Heading as="h1" size="2xl" mb={4}>
          Himnario Adventista Quechua
        </Heading>
        <Text fontSize="lg">
          Desarrollo de software personalizado para potenciar tu negocio y superar tus metas
        </Text>
      </Box>

      <Box mx="auto">
        <Flex flexDirection={['column', 'column', 'row']} alignItems="center" justifyContent="space-between">
          <Box flex="1" p={6} shadow="none" alignItems={'center'} justifyContent={'center'} borderRadius="md" mb={[8, 8, 0]}>
            <Image src={feature1} alt="Feature 1" align={'center'} textAlign={'center'} w="250px" mb={4} borderRadius={'xl'}/>
            <Heading as="h2" size="md" mb={4} textAlign={'center'}>
              Himnos Organizados
            </Heading>
            <Text fontSize="sm" textAlign={'center'}>
              Encuentra los himnos que necesitas rápidamente.
            </Text>
          </Box>
          <Box flex="1" p={6} shadow="xl" alignItems={'center'} justifyContent={'center'} borderRadius="xl" borderWidth={'1px'} mb={[8, 8, 0]} zIndex={'2'}>
            <Image src={feature3} alt="Feature 2" mb={4} alignSelf={'center'} align={'center'} textAlign={'center'} w="350px" borderRadius={'xl'} />
            <Heading as="h2"  size="md" mb={4} textAlign={'center'}>
              Búsqueda Avanzada
            </Heading>
            <Text fontSize="sm" textAlign={'center'}>
              Utiliza nuestra búsqueda avanzada para encontrar himnos por número, título o contenido.
            </Text>
          </Box>
          <Box flex="1" p={6} shadow="none" borderRadius="md">
            <Image src={feature2} alt="Feature 3" mb={4} w="250px" borderRadius={'xl'} />
            <Heading as="h2"  size="md" mb={4} textAlign={'center'}>
              Personalización
            </Heading>
            <Text fontSize="sm" textAlign={'center'}>
              Personaliza la apariencia y el contenido de la aplicación según tus preferencias.
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* CTA (Call to Action) */}
      <Box maxW="xl" mx="auto" textAlign="center" mt={10}>
        <Heading as="h3" size="xl" mb={4}>
          Descarga la aplicación ahora mismo
        </Heading>
        <Button colorScheme="purple" size="lg" leftIcon={<FaAndroid size={28} />}
          as="a" href="https://play.google.com/store/apps/details?id=com.agylcode.himnarioquechua" target="_blank" rel="noopener noreferrer"
          _dark={{
            bg: 'purple.500',
            color: 'white',
            _hover: {
              bg: 'purple.700',
            }
          }}
        >
            Descargar para Android
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
