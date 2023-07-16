export interface AppTypeInitialState{
    toasts: string[];
};



export interface PokemonInitialStateType{
    allPokemon: undefined | genericPokemonType[];
    randomPokemons: undefined | generatedPokemonType[];
    compareQueue: generatedPokemonType[];

};


export interface genericPokemonType{
    name: string;
    url: string;
}

export interface generatedPokemonType{
    name: string;
    id: number;
    image:string;
    types:pokemonTypeInterface[]
    
}

export interface pokemonTypeInterface{
    [key:string]: {
        image:String,
        resistance: string[];
        strength: string[];
        weakness: string[];
        vulnerable: string[];
    };
}

export interface userPokemonsType extends generatedPokemonType{
    firebaseId?: string;

} 