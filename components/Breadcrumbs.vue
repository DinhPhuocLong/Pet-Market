<template>
    <div class="flex justify-center items-center bg-center bg-cover py-11">
        <div class="text-white text-center">
            <h1 class="text-4xl font-semibold">Shop</h1>
            <div class="mt-3 text-center text-sm">
                <a class="mr-1" href="#">
                    Home
                </a>
                <span class="mr-1">
                    /
                </span>
                Shop
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
            crumbs() {
                const crumbs = [];
                this.$route.matched.forEach((item, i, { length }) => {
                    const crumb = {};
                    crumb.path = item.path;
                    crumb.name = this.$i18n.t(
                        'route.' + (item.name || item.path)
                    );

                    // is last item?
                    if (i === length - 1) {
                        // is param route? .../.../:id
                        if (item.regex.keys.length > 0) {
                            crumbs.push({
                                path: item.path.replace(/\/:[^/:]*$/, ''),
                                name: this.$i18n.t(
                                    'route.' + item.name.replace(/-[^-]*$/, '')
                                )
                            });
                            crumb.path = this.$route.path;
                            crumb.name = this.$i18n.t(
                                'route.' + this.$route.name,
                                [crumb.path.match(/[^/]*$/)[0]]
                            );
                        }
                        crumb.classes = 'is-active';
                    }

                    crumbs.push(crumb);
                });

                return crumbs;
            }
        }
};
</script>
