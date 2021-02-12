<template>
<div>
    <div class="row">
    <div class="card m-3 col-md-8 col-sm-12">
        <div class="row no-gutters" >
            <div class="col-md-6">
                <img :src="item.image" class="card-img" alt="">
            </div>
            <div class="col-md-6">
                <div class="card-body">
                    <h4 class="card-title">{{item.name}}</h4>
                    <p class="card-text">{{item.description}}</p>
                    <div class="row">
                    <div class="form-group col-md-6 custom-selects">
                        <label for="inputState">Color</label>
                        <select id="inputState" class="form-control">
                            <option selected>Choose</option>
                            <option>...</option>
                        </select>
                    </div>
                        <div class="form-group col-md-6 custom-selects">
                            <label for="inputState">Size</label>
                            <select id="inputState2" class="form-control">
                                <option selected>Choose</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>

                    <div class="cost">
                        <h3 class="detail-price"> {{item.price}} ₺</h3>

                        <h3 class="detail-value"> {{item.discount_amount}} ₺</h3>
                    </div>
<button class="btn btn-success buy payment" onclick="sweetAlert()">Buy</button>
                </div>
            </div>
            <div id="accordion" class="col-md-12">
                <div >
                    <div>
                        <h5 class="mb-0">
                            <button class="btn btn-success payment" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Payment Options

                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <table class="table table-striped col-md-12">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-3 m-3">
    <ul class="list-group">
        <li  v-for="category in categories" :key="category.id"  class="list-group-item custom-li" ><router-link :to="'/category/'+category.id ">{{category.name}}</router-link></li>
    </ul>
    </div>
</div>
    <div class="similar-products">
        <h5 class="similar-header">similar products
        </h5>
        <div class="container mt-5">
            <div class="row">
                <div v-for="similarItem in similarItems"  :key="similarItem.id" class="col-sm-3" v-bind:href="similarItem.id">
                    <div class="card">
                        <img class="card-img-top img-fluid" :src="similarItem.image" alt="Card image cap">
                        <div class="card-block">
                            <h6 class="card-title">{{similarItem.name}}</h6>
                            <p class="card-text">{{similarItem.description}}</p>
                            <p class="card-price">{{similarItem.price}} <span class="italic">₺</span></p>
                            <p class="card-value">{{similarItem.discount_amount}}  <span class="italic">₺</span></p>
                            <b-button class="card-button" block variant="info" :href="'/#/detay/'+similarItem.id">Ürüne Git</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>
</template>

<script>
    export default {
        props: [
            'id'

        ],
        watch: {
            '$route.params.id': {
                handler(newValue) {
                    this.id = newValue

                    this.fetchCategoriesWithProducts()
                },
                immediate: true,
            }
        },

        data() {
            return {

                forSimilar:'',
                categories:[],
                category:{
                    id:'',
                    name:'',
                },

                similarItems:[],
                similarItem:{
                    id: '',
                    name: '',
                    description: '',
                    price:'',
                    discount_amount:'',
                },

                items: [],
                item: {
                    id: '',
                    name: '',
                    description: '',
                    price:'',
                    discount_amount:''
                },

                article_id: '',
                pagination: {},
                edit: false
            };
        },
        created() {
            this.fetchCategoriesWithProducts();
            },
        methods: {
            fetchCategoriesWithProducts(page_url) {
                let vm = this;
                page_url = page_url || 'https://gorest.co.in/public-api/products/' + this.id;
                fetch(page_url)
                    .then(res => res.json())
                    .then(res => {

                        this.categories = res.data.categories;
                        this.forSimilar=res.data.categories[0].id;
                        this.item = res.data;
                        this.similarProducts(res.data.categories[0].id);
                        window.scrollTo(0,0);

                    })
                    .catch(err => console.log(err))
            },

            similarProducts(id) {
                let vm = this;
                let page_url ='https://gorest.co.in/public-api/products?categories='+id+ "&page=1";
                fetch(page_url)
                    .then(res => res.json())
                    .then(res => {
                        console.log(res.data);
                    this.similarItems=res.data;
                    })
                    .catch(err => console.log(err))
            },


        }
    }
</script>

<style scoped>

</style>
