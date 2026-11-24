
<template>
  <v-card class="pa-5 mx-auto" max-width="450" rounded="lg">
    <h2 class="text-center mb-4">Pesos a euros</h2>

    <v-text-field
      v-model="pesos"
      label="Cantidad de pesos"
      type="number"
    />

<v-btn color="#9575CD"  @click="convertir">
  Convertir
</v-btn>

    <h3 v-if="resultado !== null" class="text-center mt-4">
      Resultado: €{{ resultado.toFixed(2) }}
    </h3>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      pesos: 0,
      resultado: null
    }
  },

  methods: {
    convertir() {
      this.resultado = Number(this.pesos) / 1700
    }
  }
}
</script>
