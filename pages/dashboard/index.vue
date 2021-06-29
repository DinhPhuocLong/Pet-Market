<template>
    <div>
        <button @click="click()">
            clicked
        </button>
    </div>
</template>

<script>
export default {
    layout: 'dashboard',
    middleware: ['authenticated'],
    methods: {
        
    }

}
</script>

<style>

</style>