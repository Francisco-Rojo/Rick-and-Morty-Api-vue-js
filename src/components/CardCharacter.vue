<template>
    <div class="character">
        <img :src="character.image" :alt="character.name">
        <div class="character__info">
            <h3>{{ character.name }}</h3>
            <div>
                <div class="status">
                    <span :class="
                        character.status == 'Alive' ? 'alive':
                        character.status == 'Dead' ? 'dead' :
                        'default' ">
                        
                    </span>
                    <span>{{character.status}} - {{ character.species}} </span>
                </div>
                <div class="origin">
                    <span>
                        Origin:
                        {{character.origin.name}}
                    </span>
                </div>
                <div class="location">
                    <span>
                        Location: 
                        {{character.location.name}}
                    </span>
                </div>
            </div>
            
        </div>
    </div>
</template>


<script>
export default {
//los props nos sirven para jalar información
    props: ['character']
}
</script>


<style>
    .character {
        min-height: 460px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .character__info {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        background-color: var(--background-card);
        border-radius: 0 0 8px 8px;
    }

    .status {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .status span:first-child {
        width: 10px;
        height: 10px;
        border-radius: 50%;
    }
    .alive {background-color: green;}
    .dead {background-color: red;}
    .default {background-color: white;}
    
</style>