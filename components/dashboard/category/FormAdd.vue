<template>
    <div class="font-nunito">
        <h1 class="text-3xl font-bold">Danh mục</h1>
        <div class="w-full flex mt-10">
            <div class="w-1/4">
                <h2 class="text-lg font-semibold">Thêm danh mục</h2>
                <form class="mt-4">
                    <div class="mb-8">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Tên
                        </label>
                        <input
                            class="appearance-none border border-black  rounded w-full py-1.5 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name" type="text">
                    </div>

                    <div class="mb-8">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Đường dẫn thân thiện(slug)
                        </label>
                        <input
                            class="appearance-none border border-black  rounded w-full py-1.5 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name" type="text">
                    </div>

                    <div class="mb-8">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Danh mục cha
                        </label>
                        <select class="py-1 px-2">
                            <option class="" value="">Trống</option>
                            <option class="" value="">Thức ăn cho chó</option>
                        </select>
                    </div>

                    <button class="py-1 px-4 bg-blue-500 rounded-sm text-white hover:bg-blue-700">
                        Thêm danh mục
                    </button>
                </form>
            </div>
            <div class="w-3/4"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>