<template>

    <nav class="form_nav">
        <ul class="section_in">

            <li class="button" v-for="item in ['Vehicles', 'Drivers', 'Final Details', 'Quotes']">
                <ok />
                <span class="text">{{ item }}</span>
            </li>

<!--            <li class="button" v-for="item in ['Vehicles', 'Owner', 'Final Details', 'Quotes']">-->
<!--                <ok />-->
<!--                <span class="text">{{ item }}</span>-->
<!--            </li>-->

        </ul>

        <progress-steps :progress="28"></progress-steps>
    </nav>

</template>

<script>
import Ok from './IconOk.vue';
import ProgressSteps from "./Progress.vue";

export default {
    components: {
        Ok, ProgressSteps
    },
    data: () => ({

    }),
    methods: {

    }
}
</script>
