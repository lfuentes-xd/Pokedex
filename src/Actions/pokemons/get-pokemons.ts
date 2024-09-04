import { pokeApi } from "../../Config/Api/pokeApi";
import type { Pokemon } from "../../Domain/Entities/pokemon";
import type { PokeAPIPaginatedResponse, PokeAPIPokemon } from "../../Infraestructure/Interfaces";
import { PokemonMapper } from "../../Infraestructure/Mappers/pokemon.mapper";

export const getPokemons = async (page: number, limit: number = 20): Promise<Pokemon[]> => {
    try {
        const url: string = `pokemon`;
        const { data } = await pokeApi.get<PokeAPIPaginatedResponse>(url, {
            params: {
                offset: page * 10,
                limit,
            }
        });

        const pokemonPromises = data.results.map( (info) =>{
            return  pokeApi.get<PokeAPIPokemon>(info.url)
        });

        const PokeApiPokemons = await Promise.all(pokemonPromises);
        const pokemons = PokeApiPokemons.map( (item) => PokemonMapper.pokeApiPokemonToEntity(item.data));
        return pokemons;
    } catch (error) {
        throw new Error('error al obtener la data. ' + error);
    }
};



