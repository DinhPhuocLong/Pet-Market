<template>
    <form class="flex flex-col md:flex-row md:gap-x-4 w-full">
        <div class="order-2 md:w-1/2">
            <p>
                <input
                    class="block focus:outline-none w-full border border-solid border-gray-300 px-4 py-5 mb-6 rounded-md overflow-hidden"
                    type="text"
                    placeholder="Name*"
                />
            </p>
            <p>
                <input
                    class="block focus:outline-none w-full border border-solid border-gray-300 px-4 py-5 mb-6 rounded-md overflow-hidden"
                    type="text"
                    placeholder="Email*"
                />
            </p>

            <button
                class="text-xs uppercase focus:outline-none w-full border border-solid border-black hover:border-petshop-orange hover:bg-petshop-orange hover:text-white font-bold py-6 rounded-md overflow-hidden"
            >
                Submit
            </button>
        </div>

        <p class="w-full mb-6 order-1 md:order-2 md:w-1/2">
            <textarea
                class="w-full p-4 border border-solid border-gray-300 focus:outline-none rounded-md overflow-hidden"
                id="comment"
                name="comment"
                placeholder="Your Reviews *"
                cols="45"
                rows="9"
            ></textarea>
        </p>
    </form>
</template>
