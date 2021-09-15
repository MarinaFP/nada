import react from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button, Container, Text } from '../styles/Container'

export default function Welcome() {
   const navigation = useNavigation()
   function handleGoodbye() {
      navigation.navigate('Goodbye');
   }
   return (
    <Container>
      <Text> Adote um amigo</Text>  
      <Button onPress={handleGoodbye} >
        <Text>Insira uam foto</Text>
      </Button>    
    </Container>
   );
}