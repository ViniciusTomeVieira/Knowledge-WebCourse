<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Dashboard"
            sub="Base de Conhecimento" />
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'

export default {
    name: 'Home',
    components: { PageTitle},
}
</script>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
