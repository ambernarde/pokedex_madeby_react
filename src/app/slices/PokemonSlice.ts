import { getPokemonData } from './../reducers/getPokemonData';
import { PokemonInitialStateType,  generatedPokemonType } from '../../utils/types';
import { createSlice } from '@reduxjs/toolkit';
import { getInitialPokemonData } from '../reducers/getInitialPokemonData';

const initialState: PokemonInitialStateType = {
    allPokemon: undefined,
    randomPokemons : undefined,
    compareQueue: [],
};

export const PokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers:{
        addToCompare:(state,action)=> {
            const index = state.compareQueue.findIndex(
                (pokemon: generatedPokemonType) => pokemon.id === action.payload.id
                ); 
                if(index === -1){
                    if(state.compareQueue.length ===2){
                        state.compareQueue.pop();
                    }
                    state.compareQueue.unshift(action.payload);
                }
        },
        removeFromCompare:(state,action) => {
            const index = state.compareQueue.findIndex(
                (pokemon: generatedPokemonType) => pokemon.id === action.payload.id
                );
                const queue = [...state.compareQueue];
                queue.splice(index,1);
                state.compareQueue = queue;
             },
        },
    extraReducers: (builder) => {
        builder.addCase(getInitialPokemonData.fulfilled,(state,action) => {
            state.allPokemon = action.payload;
        });
        builder.addCase(getPokemonData.fulfilled,(state,action) => {
            state.randomPokemons= action.payload;
        });        
    },
});

export const {addToCompare,removeFromCompare} = PokemonSlice.actions;

