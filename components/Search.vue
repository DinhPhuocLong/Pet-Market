<template>
    <form class="flex flex-1 justify-center">
        <input
            type="text"
            class="w-full py-3.5 border border-solid border-gray-400 rounded-l-full pl-7 outline-none text-sm font-bold"
            placeholder="Email Address"
            style="max-width: 700px"
        />
        <button type="submit" class="bg-black text-white px-7 rounded-r-full">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-search"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="white"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
        </button>
    </form>
</template>
