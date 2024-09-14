<template>
    <div class="parent">
        <div class="div1 center"><v-avatar image="../assets/Photo_CV.png" size="180"></v-avatar></div>
        <div class="div2 center">
            <v-list lines=false class="list">
                <v-list-item style="margin-top: 2%;" title="PROFIL"></v-list-item>
                <v-list-item :subtitle="t('age')"></v-list-item>
                <v-list-item :subtitle="t('diplome')"></v-list-item>
                <v-list-item subtitle="TOEIC : 895/990"></v-list-item>
            </v-list>
        </div>
        <div class="div3">
            <v-list-item style="display: flex; justify-content: center; align-items:center; margin-top: 2%;">{{
                    $t('textProfil') }}</v-list-item>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style>
.parent {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 80%;
    height: 85%;
    margin: auto;
    /* margin-top: 1%; */
}

.div1 {
    grid-area: 1 / 1 / 4 / 3;
    margin: auto;
    width: 90%;
    height: 85%;
}

.div2 {
    grid-area: 1 / 3 / 4 / 6;
    width: 95%;
    height: 100%;
    background-color: transparent !important;
}

.div3 {
    grid-area: 4 / 1 / 6 / 6;
    margin: auto;
    width: 96%;
    height: 90%;
    background-color: transparent !important;
}

.list-horizontal {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    background-color: transparent !important;
    color: black !important;
}

v-list-item {
    background-color: transparent !important;
    color: inherit;
}
</style>
