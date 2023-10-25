<template>
    <h1>{{ pokemon.name }}</h1><br>
    <img v-if="pokemon.sprites && pokemon.sprites.front_default" :src="pokemon.sprites.front_default" alt= "" class="img-lg"/><br>
    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
        <router-link :to="{ name: 'estaditica', params: { name: pokemon.name } }">
            <button type="button" class="btn btn-primary">Ver Estadísticas</button>
        </router-link>
            <router-link :to="{ name: 'habilidades', params: { name: pokemon.name } }">
                <button type="button" class="btn btn-primary" >Ver Habilidades</button>
            </router-link>
            <router-link :to="{ name: 'movimiento', params: { name: pokemon.name } }">
                <button type="button" class="btn btn-primary">Ver Movimientos</button>
            </router-link>
            
     </div>
    <router-view/>
</template>

<script>
import  PokemonServices from '@/services/PokemonServices'

export default{
    name:'PokemonsView',
    data(){
        return {
            pokemon:{}
        }
    },
    async created(){
        const pokemonName = this.$route.params.name; 
        this.pokemon = await PokemonServices.getPokemonDetail(pokemonName); 
        console.log(this.pokemon)
    }
}
</script>