<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4" v-for="pokemon in pokemons" :key="pokemon.name">
                <div class="card mb-3">
                    <div class="card-body">
                        <router-link :to="{ path: '/pokemon-detail/' + pokemon.name }">
                            {{ pokemon.name }}
                        </router-link>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PokemonServices from '@/services/PokemonServices'

export default {
    name: 'PokemonsView',
    data() {
        return {
            pokemons: []
        }
    },
    async created() {
        this.pokemons = await PokemonServices.getPokemons()
    }
}
</script>
