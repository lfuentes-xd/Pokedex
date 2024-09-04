import { useQuery } from '@tanstack/react-query';
import { View } from 'react-native';
import { ActivityIndicator, Button } from 'react-native-paper'
import { getPokemons } from '../../../Actions/pokemons';

export default function Home() {

  const { isLoading, data } = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons(0),
    staleTime: 1000 * 60 * 60 //60 inutos mantiene la infromacion 
  });

  // getPokemons(0);
  return (
    <View>
      {
        isLoading ? (
          <ActivityIndicator />
        ) : (
          <Button
            mode='contained'
            onPress={() => console.log('pressed')}>
            press me
          </Button>
        )
      }
    </View>
  )
}