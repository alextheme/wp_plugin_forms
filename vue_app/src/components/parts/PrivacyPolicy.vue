<template>
    <!-- No Spam Info -->
    <li class="no_spam_info" v-if="showNoSpamInfo">
        <img :src="url + img" alt="">
        <ok />
        <span class="text">No Spam Guaranteed</span>
    </li>

    <!-- Privacy Policy and Terms of Use -->
    <li class="form_pptu">

        <div class="form_pptu_checkbox">
            <input id="form_pptu_checkbox__input" type="checkbox">
            <label for="form_pptu_checkbox__input">
                <span>Optional: sign up to receive sms rate updates from our insurance concierge</span>
            </label>
        </div>

        <div class="form_pptu_descr">
            <p>
                By clicking the "Show My Quotes" button,
                I provide my electronic signature and represent that I am at least 18 and agree to this website's
                <a :href="privacyPolicyLink">Privacy Policy</a> and <a :href="termsUseLink">Terms of Use</a>.
            </p>

            <p>
                By clicking the "Show My Quotes" button, I provide my express written consent and
                authorization to the owner of this website and/or the agents of one or more of the
                <a :href="listedBusinessesLink">listed businesses</a> to contact me for marketing/telemarketing purposes at the number and
                address provided above, including my wireless number if provided, using live operators,
                automated telephone dialing systems, artificial voice or pre-recorded messages,
                text messages and/or emails, if applicable, even if I have previously registered
                the provided number on any Federal or State Do Not Call Registry.
                I understand that my consent is not required as a condition of purchasing goods or services and can be revoked at any time.
            </p>
        </div>

    </li>
</template>

<script>
import Ok from "./IconOk.vue";
import img from '../../assets/images/icons/girl.png'

export default {
    components: { Ok },
    props: {
        showNoSpamInfo: Boolean
    },
    data: () => ({
        url: sfi_params.homeUrl,
        privacyPolicyLink: `${sfi_params.homeUrl}/${sfi_params.privacy_policy_link}`,
        termsUseLink: `${sfi_params.homeUrl}/${sfi_params.terms_use_link}`,
        listedBusinessesLink: `${sfi_params.homeUrl}/${sfi_params.listed_businesses_link}`,
        img
    }),
}

</script>