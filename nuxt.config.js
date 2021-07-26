require('dotenv').config()
export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'server',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Pet-Market',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            }
        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Nunito&display=swap",
            },
            {
                rel: 'stylesheet',
                href: '/uikit-core.min.css'
            },
        ],
        // script: [{
        //     type: 'module',
        //     src: 'uikit.min.js',
        //     ssr: false
        // }],

    },

    router: {
        extendRoutes(routes, resolve) {

        }
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // 1. Configure the css location of element-ui in css
        'quill/dist/quill.snow.css',
        'quill/dist/quill.bubble.css',
        'quill/dist/quill.core.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{
            src: 'plugins/quill.js',
            ssr: false
        },
        'plugins/services.js',
        'plugins/vee-validate.js',
        'plugins/filters.js',
        {
            src: 'plugins/uikit.js',
            ssr: false
        }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        '@nuxtjs/dotenv',
    ],

    axios: {
        credentials: true // Attention, credentials not withCredentials
    },
    auth: {
        redirect: false,
        strategies: {
            'laravelJWT': {
                provider: 'laravel/jwt',
                url: process.env.BASE_URL,
                token: {
                    property: 'token',
                    required: true,
                    type: 'Bearer'
                },
                user: {
                    property: false, // <--- Default "user"
                    autoFetch: true
                },
                endpoints: {
                    login: {
                        url: '/login',
                    },
                    user: {
                        url: '/user',
                        method: 'get',
                    },
                    logout: {
                        url: '/logout'
                    }
                },
            }
        },
    },


    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ['vee-validate'],
    },
}
