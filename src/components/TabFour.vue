<template>
    <div class="Box-langues">
        <v-list-item class="contact-title">{{ $t('LV1') }}</v-list-item>
        <v-progress-linear v-model="francais" color="success" height="25"></v-progress-linear>
        <br>
        <v-list-item class="contact-title">{{ $t('LV2') }}</v-list-item>
        <v-progress-linear v-model="anglais" color="blue-grey" height="25"></v-progress-linear>
        <br>
        <v-list-item class="contact-title">{{ $t('LV3') }}</v-list-item>
        <v-progress-linear v-model="espagnol" color="teal" height="25"></v-progress-linear>
        <br>
    </div>
</template>

<script>
export default {
    data: () => ({
        francais: 100,
        anglais: 80,
        espagnol: 55,
    }),
}
</script>

<style>
.contact-title {
    /* font-weight: bold; */
    font-size: 1.2rem;
}

.Box-langues {
    width: 85%;
    margin: auto;

}
</style>
