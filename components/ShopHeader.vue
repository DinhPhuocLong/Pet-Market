<template>
    <div>
        <div class="border-b border-solid border-gray-100 border-opacity-20">
            <div class="w-11/12 mx-auto py-4">
                <!-- header top -->
                <div class="flex items-center justify-between">
                    <div class="flex items-center flex-grow">
                        <!-- logo -->
                        <a href="#"
                            ><img
                                class="max-h-11 pr-10"
                                src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/logo.png"
                                alt="logo"
                        /></a>

                        <DropdownMenu />
                    </div>

                    <!-- icon right -->
                    <div
                        class="w-1/4 flex justify-end gap-5 text-2xl text-black pl-10"
                    >
                        <div>
                            <a href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-user"
                                    width="27"
                                    height="27"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="white"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <circle cx="12" cy="7" r="4" />
                                    <path
                                        d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-heart"
                                    width="27"
                                    height="27"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="white"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path
                                        d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div class="shopping-cart relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-shopping-cart"
                                width="27"
                                height="27"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="white"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <circle cx="6" cy="19" r="2" />
                                <circle cx="17" cy="19" r="2" />
                                <path d="M17 17h-11v-14h-2" />
                                <path d="M6 5l14 1l-1 7h-13" />
                            </svg>
                            <span
                                class="inline-block nav-color w-5 h-5 leading-5 absolute rounded-full font-sans text-white text-xs text-center -top-2 -right-3"
                            >
                                0
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Breadcum />
    </div>
</template>

<style scoped>
.nav-color {
    background-color: #ed6436 !important;
}
</style>
