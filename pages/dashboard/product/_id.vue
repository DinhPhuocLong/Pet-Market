<template>
    <div class="container w-3/4">
        <div id="toolbar-container"></div>
        <div id="editor"></div>
    </div>
</template>

<script>
    let DecoupledEditor;
    if (process.browser) {
        DecoupledEditor = require("@ckeditor/ckeditor5-build-decoupled-document");
    }
    export default {
        layout: 'dashboard',
        mounted() {
            DecoupledEditor.create(document.querySelector('#editor'))
                .then((editor) => {
                    const toolbarContainer = document.querySelector('#toolbar-container')
                    toolbarContainer.appendChild(editor.ui.view.toolbar.element)
                })
                .catch((error) => {
                    // eslint-disable-next-line no-console
                    console.error(error)
                })
        }
    }
</script>

<style></style>