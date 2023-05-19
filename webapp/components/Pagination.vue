<template>
    <div class="pagination">
        <button class="btn btn-round btn-back btn-warning" :disabled="isPreviousButtonDisabled" @click="previousPage">
            Back
        </button>

        <PaginationTrigger v-for="paginationTrigger in paginationTriggers"
            :class="{ 'current': paginationTrigger === currentPage }" :key="paginationTrigger"
            :pageNumber="paginationTrigger" @loadPage="onLoadPage" class="page" />
        <button class="btn btn-round btn-next btn-warning" :disabled="isNextButtonDisabled" @click="nextPage">
            Next
        </button>
    </div>
</template>

<script>
export default {
    props: {
        visiblePagesCount: {
            type: Number,
            default: 5
        },
        currentPage: {
            type: Number,
            required: true,
        },
        pageCount: {
            type: Number,
            required: true,
        }
    },
    computed: {
        isPreviousButtonDisabled() {
            return this.currentPage === 1;
        },
        isNextButtonDisabled() {
            return this.currentPage === this.totalPages;
        },
        paginationTriggers() {
            const currentPage = this.currentPage;
            const pageCount = this.pageCount;
            const visiblePagesCount = this.visiblePagesCount
            const visiblePagesThreshold = (visiblePagesCount - 1) / 2;
            const pagintationTriggersArray = Array(this.visiblePagesCount - 1).fill(0)

            if (currentPage <= visiblePagesThreshold + 1) {
                pagintationTriggersArray[0] = 1
                const pagintationTriggers = pagintationTriggersArray.map(
                    (paginationTrigger, index) => {
                        return pagintationTriggersArray[0] + index
                    }
                )
                pagintationTriggers.push(pageCount)
                return pagintationTriggers
            }

            if (currentPage >= pageCount - visiblePagesThreshold + 1) {
                const pagintationTriggers = pagintationTriggersArray.map(
                    (paginationTrigger, index) => {
                        return pageCount - index
                    }
                )
                pagintationTriggers.reverse().unshift(1)
                return pagintationTriggers
            }

            pagintationTriggersArray[0] = currentPage - visiblePagesThreshold + 1
            const pagintationTriggers = pagintationTriggersArray.map(
                (paginationTrigger, index) => {
                    return pagintationTriggersArray[0] + index
                }
            )
            pagintationTriggers.unshift(1);
            pagintationTriggers[pagintationTriggers.length - 1] = pageCount
            return pagintationTriggers
        }
    },
    methods: {
        nextPage() {
            this.$emit('nextPage')
        },
        previousPage() {
            this.$emit('previousPage')
        },
        onLoadPage(value) {
            this.$emit('loadPage', value)
        }
    }
}
</script>

<style scoped>
.btn {
    outline: none;
    transition: all 300ms ease-in-out;
}

.btn[disabled] {
    opacity: 0.3;
}

.btn-warning {
    background-color: #ff9a57;
}

.btn-warning .btn-ellipse-icon {
    color: #fff;
    background-color: #ff9a57
}

.btn-round {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: none;
}

.btn-round svg {
    color: #fff;
}
.pagination {
    margin: 1rem auto; 
    display: flex;
    justify-content: center;
    align-items: center;
}

.page {
    display: flex;
    margin: 0 17px;
    font-size: 16px;
    font-weight: 600;
}

.current {
    color: #ff9a57;
}
</style>