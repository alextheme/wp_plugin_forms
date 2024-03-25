<template>

  <!-- Header -->
  <header class="form_header section_in">
        <icon :icon_id="form" ></icon>

        <template v-if="form === 'car'">
            <h2 v-if="page === 0" class="title">Hello, Let's see how much we can <br> save you on car insurance.</h2>
            <h2 v-if="page === 1" class="title">Ok great! <br> Let's get a few details about you.</h2>
            <h2 v-if="page === 2" class="title">Almost done, <span>{{ userName }}</span><br> Just a few final details.</h2>
        </template>

        <template v-if="form === 'home'">
            <h2 v-if="page === 0" class="title">Hello, Let's see how much we can <br> save you on home insurance.</h2>
            <h2 v-if="page === 1" class="title">Ok great! <br> Let's get a few details about you.</h2>
            <h2 v-if="page === 2" class="title">Almost done, <span>{{ userName }}</span><br> Just a few final details.</h2>
        </template>

        <template v-if="form === 'life'">
            <h2 v-if="page === 0" class="title">Compare Life Insurance Rates</h2>
        </template>

        <template v-if="form === 'health'">
            <h2 v-if="page === 0" class="title">Compare Health Insurance Rates in Wielkopolskie</h2>
        </template>

        <template v-if="form === 'medic'">
            <h2 v-if="page === 0" class="title">Review Medicare Advantage Plans</h2>
        </template>

        <template v-if="form === 'business'">
            <h2 v-if="page === 0" class="title">Compare Business Insurance Rates</h2>
        </template>

        <template v-if="form === 'moto'">
            <h2 v-if="page === 0" class="title">Let’s get started! <br> Select Year of Motorcycle</h2>
        </template>

        <template v-if="form === 'key'">
            <h2 v-if="page === 0" class="title">Let’s get started! <br> Select Year of Motorcycle</h2>
        </template>

    </header>

</template>