<template>
    <section>
        <div class="characters">
            <div class="characters__item" v-for="character in characters" :key="character.id">
                <CardCharacter :character="character" />
            </div>
        </div>
    </section>
</template>

<script>
import { computed, onMounted } from 'vue'
import{ useStore } from 'vuex'


import CardCharacter from '@/components/CardCharacter'

export default {
    components: {
        CardCharacter
    },
    setup() {
        const store = useStore()
        const characters = computed(() => {
            return store.state.charactersFilter
        })
        onMounted(() => {
            store.dispatch('getCharacters')
        })

        return{
            characters
        }
    },
}
</script>


<style>
    .characters {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }

    .characters__item {
        transition: 0.3s;
        cursor: pointer;
    }

    .characters__item:hover{
        scale: 1.1;
    }

    @media(max-width: 1024px) {
        .characters{grid-template-columns: repeat(2, 1fr);}
    }

    @media(max-width: 720px) {
        .characters{grid-template-columns: repeat(1, 1fr);}
    }
</style>