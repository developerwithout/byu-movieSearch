<template>
    <ul class="pagination">
        <li v-if="currentPage > 1">
            <a href="#" @click="prevPage">Previous</a>
        </li>
        <li v-for="page in pages" :key="page">
            <a href="#" @click="changePage(page)">
                <span>{{ page }}</span>
            </a>
        </li>
        <li v-if="currentPage < pages">
            <a href="#" @click="nextPage">Next</a>
        </li>
    </ul>
</template>
  
<script>
export default {
    name: "Pagination",
    props: {
        current:{
            type: Number,
            default: 1
        },
        pages:{
            type: Number,
            default: 1
        },
    },
    methods: {
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.pages) {
                this.currentPage++;
            }
        },
        changePage(page) {
            this.currentPage = page;
        },
    },
};
</script>
  
<style>
.pagination {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.pagination li {
    display: inline-block;
    margin-right: 4px;
}

.pagination li a {
    border: 1px solid #ccc;
    padding: 2px 10px;
    text-decoration: none;
    color: #333;
}

.pagination li a:hover {
    background-color: #eee;
}

.pagination li.active a {
    background-color: #000;
    color: #fff;
}
</style>
  