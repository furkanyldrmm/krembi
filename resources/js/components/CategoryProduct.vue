<template>
    <div>

        <div class="container mt-5">
            <div class="row">
                <div v-for="item in items" :key="item.id" class="col-sm-3" v-bind:href="item.id">

                    <div class="card">
                        <img class="card-img-top img-fluid" :src="item.image" alt="Card image cap">
                        <div class="card-block">
                            <h6 class="card-title">{{item.name}}</h6>
                            <p class="card-text">{{item.description}}</p>
                            <p class="card-price">{{item.price}} <span class="italic">₺</span></p>

                            <p class="card-value">{{item.discount_amount}} <span class="italic">₺</span></p>

                            <b-button class="card-button" block variant="info" :href="'/#/detay/'+item.id">Ürüne Git</b-button>

                        </div>
                    </div>

                </div>

            </div>
        </div>

        <nav aria-label="Page navigation example">
            <ul class="pagination" >
                <li v-bind:class="[{disabled: !pagination.prev_page_url}]" class="page-item"><a class="page-link"   @click="fetchItems(pagination.prev_page_url)">Previous</a></li>

                <li class="page-item disabled"><a class="page-link text-dark" href="#">Page {{ pagination.current_page }} of {{ pagination.last_page }}</a></li>

                <li v-bind:class="[{disabled: !pagination.next_page_url}]" class="page-item"><a class="page-link"  @click="fetchItems(pagination.next_page_url)">Next</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>

    export default {
        props: [
            'category_id'

        ],
        watch: {
            '$route.params.category_id': {
                handler(newValue) {
                    this.id = newValue

                    this.fetchItems()
                },
                immediate: true,
            }
        },

        data() {
            return {
                items: [],
                item: {
                    id: '',
                    name: '',
                    price:'',
                    description: '',
                    image:'',
                    discount_amount:''

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
            functiona(){
                window.scrollTo(0, 0);

            },
            fetchItems(page_url) {
                let vm = this;
                page_url =  (page_url)  ? page_url : 'https://gorest.co.in/public-api/products?categories='+this.category_id+'&page=1';
                fetch(page_url)
                    .then(res => res.json())
                    .then(res => {
                        this.items = res.data;
                        vm.makePagination(res.meta.pagination);
window.scrollTo(0,0);
                    })
                    .catch(err => console.log(err));
            },

            makePagination(meta) {
                let metaPage=parseInt(meta.page);
                let prev =  ((metaPage==1) ? null :  "https://gorest.co.in/public-api/products?categories="+this.category_id+ "&page="+(metaPage-1)) ;
                let next =  ((metaPage+1<=meta.pages) ? "https://gorest.co.in/public-api/products?categories="+this.category_id+ "&page="+ (metaPage+1) : null);

                let pagination = {
                    current_page: meta.page,
                    last_page: meta.pages,
                    next_page_url: next,
                    prev_page_url:prev
                };
                this.pagination = pagination;
                console.log(this.pagination)
            },


        }
    }

</script>

<style scoped>

</style>
