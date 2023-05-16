<template>
    <div class="base-pagination">
        <Button :disabled="isPreviousButtonDisabled" @click="previousPage">
            Back
        </Button>
        <Button :disabled="isNextButtonDisabled" @click="nextPage">
            Next
        </Button>
    </div>
</template>

<script>
export default {
    props: {
        currentPage: {
            type: Number,
            required: true,
        },
        totalPages: {
            type: Number,
            required: true,
        }
    },
    computed: {
        isPreviousButtonDisabled(){
            return this.currentPage === 1;
        },
        isNextButtonDisabled(){
            return this.currentPage === this.totalPages;
        }
    },
    methods: {
        nextPage() {
            this.$emit('nextPage')
        },
        previousPage() {
            this.$emit('previousPage')
        },
    }
}
</script>

<stype scoped></stype>