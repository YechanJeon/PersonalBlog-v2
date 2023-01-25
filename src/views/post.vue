<template>
    <Suspense>
        <template #default><Posta/></template>
       
    </Suspense>
</template>

<script setup>
import Posta from "./posta.vue"

console.log(document.getElementsByTagName("h1"))
</script>