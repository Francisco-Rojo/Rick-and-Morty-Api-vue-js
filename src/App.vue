<template>
  <div class="container">
    <h1>Rick and Morty</h1>
    <ListCharacters />
  </div>
</template>

<script>
import ListCharacters from '@/components/ListCharacters'
export default {

  name: 'App',
  components: {
    ListCharacters
  }
}
</script>

<style lang="scss">
  :root {
    --background-body: #24282F;
    --background-card: #3c3e44;
    --text-white: #FFFFFF;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--background-body);
    color: var(--text-white);
    font-family: Tahoma, Verdana, sans-serif;
  }

  .container {
    margin: auto;
    width: 90%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    padding: 40px 20px;
  }
</style>
