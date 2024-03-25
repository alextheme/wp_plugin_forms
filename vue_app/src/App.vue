<template>
    <div class="base" id="form_insurance">

        <forms v-if="form!=='auto'" :form="form" :qs="qs"></forms>
        <auto v-if="form==='auto'" :form="form" :qs="qs"></auto>

    </div>
</template>

<script>
import Forms from './components/Forms.vue'
import Auto from './components/Auto.vue'
// import questions from './assets/data/questions.js'
import questions from './assets/data/questions_value.js'
// window.formId = 'test'

export default {
    components: { Forms, Auto },

    data: () => ({
        form: window.formId,
        qs: questions[window.formId],
    })
}
</script>
