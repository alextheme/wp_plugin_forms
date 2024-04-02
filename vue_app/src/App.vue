<template>
    <div class="base" id="form_insurance">

        <forms :form="form" :qs="qs"></forms>

    </div>
</template>

<script>
import Forms from './components/Forms.vue'
// import questions from './assets/data/questions.js'
import questions from './assets/data/questions_value.js'
// window.formId = 'test'

export default {
    components: { Forms },

    data: () => ({
        form: window.formId,
        qs: questions[window.formId],
    })
}
</script>
