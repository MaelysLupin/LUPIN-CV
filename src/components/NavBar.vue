<template>
  <v-card color="basil">
    <v-card-title class="card-title">
      <div class="text-container">
        <h3 class="responsive-text text-basil">
          Maelys LUPIN
        </h3>
      </div>
      <ChangeLg class="change-lg" />
    </v-card-title>
  </v-card>
</template>

<style scoped>
.card-title {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 0 1rem;
}

.text-container {
  width: 100%;
  margin-top: 1vh;
}

.responsive-text {
  font-size: 5vw;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
}

@media (max-width: 768px) {
  .card-title {
    justify-content: flex-start;
  }

  .responsive-text {
    font-size: 6vw;
    text-align: left;
  }
}

@media (max-width: 480px) {
  .responsive-text {
    font-size: 8vw;
  }

}
</style>
