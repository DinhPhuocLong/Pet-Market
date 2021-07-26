<template>
    <div
        v-if="isShowing"
        class="fixed z-50 w-96 h-screen flex items-center justify-center bg-indigo-100"
    >
        <div>
            <h1></h1>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        isShowing: {
            required: true,
            type: Boolean
        },
        
    }
};
</script>

<style></style>
