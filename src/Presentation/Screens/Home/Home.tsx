import { useQuery } from '@tanstack/react-query';
import { View } from 'react-native';
import { Button } from 'react-native-paper'
import { getPokemons } from '../../../Actions/pokemons';

export default function Home() {

  const {isLoading, data } = useQuery({
    queryKey: ['getPokemons'],
    queryFn: () => getPokemons(0),
    staleTime: 1000 * 60 * 60 //60 inutos mantiene la infromacion 
  });


  return (
    <View>
      <Button icon="camera-outline" mode='contained'>
        Press me
      </Button>
    </View>
  )
}