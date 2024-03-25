<template>
    <div class="question_header">
        <h3 class="title">
            <ok />
            <span class="title__text_wrap">
            <span class="text" v-for="text in getTitle">{{ text }}</span>
        </span>
        </h3>
        <p class="description" v-if="getDescription.length">
            <span v-for="text in getDescription">{{ text }}</span>
        </p>

    </div>
</template>

<script>
import Ok from "./IconOk.vue";

export default {
    components: { Ok },
    props: {
        title: { type: String, required: true, default: '' },
        descr: { type: String, required: false, default: '' },
    },
    computed: {
        getTitle() {
            return this.title.split('\n').map(str => str.trim())
        },
        getDescription() {
            const arr = this.descr.split('\n').map(str => str.trim())
            if (arr.every(el => el !== '')) {
                return this.descr.split('\n').map(str => str.trim())
            } else {
                return []
            }
        }
    },
}
</script>