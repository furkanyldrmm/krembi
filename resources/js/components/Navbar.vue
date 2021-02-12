<template>
    <div style="width: 100%">
        <b-navbar id="top" toggleable="lg" type="dark" variant="info">
            <b-navbar-brand class="site-name":to="'/'">Krembi</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>

                    <b-nav-item :class="{active: $route.params.category_id==item.id}" v-for="item in items" v-bind:key="item.id"  :to="'/category/'+item.id">{{item.name}}</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->





            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [],
                item: {
                    id: '',
                    name: '',
                    description: ''
                },

                article_id: '',
                pagination: {},
                edit: false
            };
        },
        created() {
            this.fetchItems();
        },
        methods: {
            fetchItems(page_url) {
                let vm = this;
                page_url = page_url || 'https://gorest.co.in/public-api/categories';
                fetch(page_url)
                    .then(res => res.json())
                    .then(res => {
                        this.items = res.data;
                    })
                    .catch(err => console.log(err));
            },


        }
    }
</script>

<style scoped>

</style>
