<template>
    <section class="form_done" :style="{ backgroundImage: 'url(' + url + bg + ')' }">
        <div class="form_done__in">
            <h2 class="title">We are checking insurance <br> with many companies.</h2>
            <p class="descr">Our advisor will contact you.</p>

            <a class="go_home_btn" :href="url">Go home page</a>

            <p class="working_title">Working with us</p>
            <ul class="working_list">
                <li class="working_item" v-for="img in images">
                    <img :src="url + img" alt="working with us logo">
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import img0 from '../../assets/images/work/0.png'
import img1 from '../../assets/images/work/1.png'
import img2 from '../../assets/images/work/2.png'
import img3 from '../../assets/images/work/3.png'
import bg from '../../assets/images/bg.png'

export default {
    props: {
        sendContentAjax: { type: Function, requare: true },
        homeUrl: String,
    },

    data: () => ({
        url: sfi_params.homeUrl,
        bg: bg,
        images: [img0, img2, img3, img1],
    }),
}

</script>