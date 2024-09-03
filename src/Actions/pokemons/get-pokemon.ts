import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";
import { pokeApi } from "../../Config/Api/PokeAPI";
import type { Pokemon } from "../../Domain/Entities/Entities";
import type { PokeApipaginatedResponse, PokeAPIPokemon } from "../../Infraestructure/Interfaces";
import { PokemonMapper } from "../../Infraestructure/Mappers/pokemon.mapper";

export const getPokemons = async (page: number, limit: number = 20): Promise<Pokemon[]> => {
    try {
        const url: string = `pokemon`;
        const { data } = await pokeApi.get<PokeApipaginatedResponse>(url, {
            params: {
                offset: page * 10,
                limit,
            }
        });

        const pokemonPromises = data.results.map(info =>{
            return pokeApi.get<PokeAPIPokemon>(info.url);
        });

        const PokeAPIPokemon = await Promise.all(pokemonPromises);
        const pokemons = PokeAPIPokemon.map(item=>
            PokemonMapper.pokeApiPokemonToEntity(item.data),
        )

        return [];
    } catch (error) {
        throw new Error('error al obtener la data. ' + error);
    }
};



