
<template>
  <v-card class="pa-5 mx-auto" max-width="450" rounded="lg">
    <h2 class="text-center mb-4">Euros a pesos</h2>

    <v-text-field
      v-model="euros"
      label="Cantidad de euros"
      type="number"
    />

   <v-btn color="#9575CD"  @click="convertir">
  Convertir
</v-btn>

    <h3 v-if="resultado !== null" class="text-center mt-4">
      Resultado: ${{ resultado.toFixed(2) }}
    </h3>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      euros: 0,
      resultado: null
    }
  },

  methods: {
    convertir() {
      this.resultado = Number(this.euros) * 1700
    }
  }
}
</script>
