
<template>
  <v-app>
    <v-app-bar color="#9575CD" elevation="1">
      <v-app-bar-title>
        Convertidor de Monedas
      </v-app-bar-title>
    </v-app-bar>

    <v-main class="fondo">
      <v-container class="py-10">

        <h2 class="text-center mb-2">
          Bienvenidos
        </h2>

        <p class="text-center mb-8 subtitulo">
          Convertí tus monedas fácilmente
        </p>

        <v-row justify="center">
          <v-col cols="12" sm="8" md="6">

            <v-card rounded="lg" elevation="2" class="pa-3">

              <v-list bg-color="white">

                <v-list-item
                  to="/dolares-pesos"
                  title="Dólares a pesos"
                  color="#9575CD"
                />

                <v-divider />

                <v-list-item
                  to="/pesos-dolares"
                  title="Pesos a dólares"
                  color="#9575CD"
                />

                <v-divider />

                <v-list-item
                  to="/euros-pesos"
                  title="Euros a pesos"
                  color="#9575CD"
                />

                <v-divider />

                <v-list-item
                  to="/pesos-euros"
                  title="Pesos a euros"
                  color="#9575CD"
                />

                <v-divider />

                <v-list-item
                  to="/reales-pesos"
                  title="Reales a pesos"
                  color="#9575CD"
                />

              </v-list>

            </v-card>

          </v-col>
        </v-row>

        <div class="mt-8">
          <router-view />
        </div>

      </v-container>
    </v-main>
  </v-app>
</template>



<style scoped>
.fondo {
  background-color: #F8F6FC;
}

.v-card {
  background-color: white;
  border: 1px solid #DCCFED;
}

h2 {
  color: #9575CD;
}

.v-btn {
  background-color: #9575CD !important;
  color: white !important;
}

h3 {
  color: #9575CD;
}
</style>


