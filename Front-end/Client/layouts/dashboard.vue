<template>
    <client-only>
    <div class="leading-normal tracking-normal" id="main-body">
        <div class="flex flex-wrap">

            <DashboardSideBar />

            <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" id="main-content">

                <DashboardNavBar />

                <div class="p-6 bg-gray-100 mb-20">
                    <Nuxt />
                </div>


            </div>
        </div>
    </div>
    </client-only>
</template>