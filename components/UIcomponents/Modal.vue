<template>
    <div
        v-if="isShowing"
        class="fixed right-0 top-0 z-50 w-96 h-screen flex items-center justify-center bg-indigo-100"
    >
        The modal will go here.
    </div>
</template>
<script>
export default {
    props: {
        isShowing: {
            required: true,
            type: Boolean
        }
    }
};
</script>

<style></style>
