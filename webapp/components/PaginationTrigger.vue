<template>
    <span class="pagination-trigger" @click="onClick">
    {{ pageNumber }}
  </span>
</template>

<script>
export default {
    props: {
        pageNumber: {
            type: Number,
            required: true
        }
    },
    methods: {
        onClick() {
            this.$emit('loadPage', this.pageNumber)
        }
    }
}
</script>

<style scoped>
.pagination-trigger {
  cursor: pointer;
  transition: all 300ms ease;
}
.pagination-trigger:hover {
  color: #dd8346;
}
</style>