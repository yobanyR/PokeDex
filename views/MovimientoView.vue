<template>
    <div class="container mt-4">
      <h1 class="mb-4">Movimientos del Pokémon</h1>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            v-for="movimiento in pokemon.moves"
            :key="movimiento.move.name"
          >
            {{ movimiento.move.name }}
            <span class="badge bg-primary rounded-pill">Tipo: {{ movimiento.move.url }}</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import PokemonServices from '@/services/PokemonServices';
  
  export default {
    name: 'MovimientoView',
    data() {
      return {
        pokemon: {},
      };
    },
    async created() {
      const pokemonName = this.$route.params.name;
      this.pokemon = await PokemonServices.getPokemonDetail(pokemonName);
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  
  .mb-4 {
    margin-bottom: 1.5rem;
  }
  
  .card {
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    margin-bottom: 1rem;
  }
  
  .list-group-flush {
    padding: 0;
  }
  
  .list-group-item {
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
  
  .badge {
    font-size: 0.8rem;
  }
  </style>
  