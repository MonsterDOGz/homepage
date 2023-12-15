<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ msg: string }>()

const serverMsg = ref('')

const query = async () => {
  const res = await fetch('/api/test')
  const data = await res.json()
  console.log(data)
  serverMsg.value = data.msg
}
query()

</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ serverMsg }}</h2>
</template>

<style scoped>
</style>
