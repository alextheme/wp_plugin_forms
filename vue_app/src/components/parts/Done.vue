<template>
    <section class="form_done" :style="{ backgroundImage: 'url(' + url + bg + ')' }">

        <div class="form_done__in">

           <div class="form_done__row">
               <h2 class="title">Your quote is on the way!</h2>

               <p class="subtitle">Here’s what happens next:</p>

               <div class="upcoming_events" v-if="nextHappens.length > 0">
                   <ul class="list_upcoming_events">
                       <li class="item" v-for="(item, i) in nextHappens">
                           <div class="item__in">
                               <div class="item__number">{{ String(i + 1).padStart(2, '0') }}</div>
                               <div class="item__content">
                                   <p class="text" v-for="text in item.content">{{ text }}</p>
                               </div>
                           </div>
                       </li>
                   </ul>
               </div>


               <p class="text_above_button">Thank you for your recent quote request; you’re on your way to enjoying great deals!</p>

               <a class="go_home_btn" :href="url">Go home page</a>

               <p class="text_below_button">
                   If you would rather give us a call directly, you can reach us at
                   <a href="tel: 888-298-4206">888-298-4206</a>.
               </p>
           </div>

            <div class="form_done__row">
                <p class="working_title">Working with us</p>

                <Splide class="form_done_slider" :options="slideOptions" @splide:arrows:mounted="onArrowsMounted">
                    <SplideSlide v-for="ins in images">
                        <img :src="`${pluginUrl}/assets/front/images/${ins}.webp`" alt="">
                    </SplideSlide>
                </Splide>
            </div>

        </div>
    </section>
</template>

<script>

import bg from '../../assets/images/bg.png'
import { Splide, SplideSlide } from '@splidejs/vue-splide' // https://splidejs.com/guides/options/
import '@splidejs/vue-splide/css'   // https://splidejs.com/guides/options/

export default {
    components: { Splide, SplideSlide },

    props: {
        sendContentAjax: {type: Function, requare: true},
        homeUrl: String,
    },

    data: () => ({
        url: sfi_params.homeUrl,
        bg: bg,
        images: +sfi_params.countImages,
        pluginUrl: sfi_params.pluginUrl,
        isSliderHoverMouse: false,
        perPage: window.innerWidth < 800 ? 2 : 4,
        nextHappens: [
            { content: ['We’ll contact you shortly to validate your information.'] },
            { content: ['Then we’ll discuss your coverage options and present you with the best available plan for you.'] },
            { content: ['You’ll choose the plan coverage that fits your needs – it’s that easy!'] },
        ],
    }),

    computed: {
        slideOptions() {
            return {
                rewind: true,
                gap   : '1rem',
                type   : 'loop',
                drag   : 'free',
                // focus  : 'center',
                perPage: this.perPage,
                perMove: 1,
                speed: 2000,
                autoScroll: true,
                autoStart: true,
            }
        }
    },

    methods: {
        onArrowsMounted(splide, prev, next) {

            setInterval(() => {
                if ( ! this.isSliderHoverMouse) {
                    prev.click()
                }
            }, 2000)
        }
    },

    mounted() {
        document.body.addEventListener('mousemove', e => {
            this.isSliderHoverMouse = !!e.target.closest('.form_done_slider')
        })
        window.addEventListener('resize', e => {
            this.perPage = window.innerWidth < 800 ? 2 : 4
        })
    },
}

</script>