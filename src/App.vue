<template>
    <v-app>
        <v-navigation-drawer
                v-model="drawer"
                fixed
                app
        >
            <v-list>
                <v-list-tile avatar>
                    <v-list-tile-avatar color="white">
                        <img src='./assets/logo.png' alt="logo">
                    </v-list-tile-avatar>
                    <v-list-tile-title>
                        SÀI GÒN XUÂN PHÁT
                    </v-list-tile-title>
                </v-list-tile>
                <v-divider/>
                <v-list-tile
                        to="/user">
                    <v-list-tile-action>
                        <v-icon>account_circle</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Quản lý tài khoản</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile
                        to="/document">
                    <v-list-tile-action>
                        <v-icon>mdi-file-document</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Quản lý văn bản</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="indigo" dark fiexed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
            <v-spacer/>
            <v-btn icon>
                <v-menu
                        bottom
                        left
                        content-class="dropdown-menu"
                        offset-y
                        transition="slide-y-transition">
                    <router-link
                            v-ripple
                            slot="activator"
                            class="toolbar-items"
                            to=""
                    >
                        <v-badge
                                color="error"
                                overlap
                        >
                            <template slot="badge">
                                {{ notifications.length }}
                            </template>
                            <v-icon color="white">mdi-bell</v-icon>
                        </v-badge>
                    </router-link>
                    <v-card>
                        <v-list dense>
                            <v-list-tile
                                    v-for="notification in notifications"
                                    :key="notification"
                                    @click=""
                            >
                                <v-list-tile-title
                                        v-text="notification"
                                />
                            </v-list-tile>
                        </v-list>
                    </v-card>
                </v-menu>
            </v-btn>
            <v-btn icon>
                <v-menu
                        bottom
                        left
                        content-class="dropdown-menu"
                        offset-y
                        transition="slide-y-transition">
                    <router-link
                            v-ripple
                            slot="activator"
                            class="toolbar-items"
                            to=""
                    >
                        <v-badge>
                            <v-icon color="white">mdi-account</v-icon>
                        </v-badge>
                    </router-link>
                    <v-card>
                        <v-list dense>
                            <v-list-tile
                                    @click=""
                            >
                                <v-list-tile-title>
                                    Xem thông tin
                                </v-list-tile-title>
                            </v-list-tile>
                            <v-list-tile
                                    @click="">
                                <v-list-tile-title>
                                    Đăng xuất
                                </v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-card>
                </v-menu>
            </v-btn>
        </v-toolbar>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
        <v-footer color="indigo" app>
            <span class="white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            logo: './assets/logo.png',
            notifications: [
                'Mike, John responded to your email',
                'You have 5 new tasks',
                'You\'re now a friend with Andrew',
                'Another Notification',
                'Another One'
            ],
            title: null,
            drawer: null
        }),
        props: {
            source: String
        },

        watch: {
            '$route'(val) {
                this.title = val.name
            }
        },
    }
</script>