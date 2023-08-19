export interface AppTypeInitialState{
    toasts: string[];
    userInfo: undefined | {email:string};
    currentPokemonTab: string;
};

export interface currentPokemonType {
    id:number,
    name:string,
    types:pokemonTypeInterface[];
    image:string;
    stats:pokemonStatsType[];
    encounters: string[];
    evolution : {level: number; pokemon:{name:string;url:string}}[];
    pokemonAbilities: {abilities:string[];moves:string[]};
    evolutionLevel:number;
}

export interface pokemonStatsType {
    name: string;
    value: string;
  }

export interface PokemonInitialStateType{
    allPokemon: undefined | genericPokemonType[];
    randomPokemons: undefined | generatedPokemonType[];
    compareQueue: generatedPokemonType[];
    userPokemons:  userPokemonsType[];
    currentPokemon: currentPokemonType | undefined

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


export type pokemonStatType =
  | "vulnerable"
  | "weakness"
  | "strength"
  | "resistance";

export type pokemonElementType =
  | "bug"
  | "dark"
  | "dragon"
  | "electric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water";
