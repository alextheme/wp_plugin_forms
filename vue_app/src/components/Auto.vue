<template>
    <div class="form_insurance--wrapper form--auto">

        <!-- Navigations -->
        <nav class="form_nav">
            <ul class="section_in">
                <li @click="goTab(tab)" class="button" :class="navClass(tab)" v-for="(item, tab) in ['Vehicles', 'Drivers', 'Final Details', 'Quotes']">
                    <icon-ok />
                    <span class="text">{{ item }}</span>
                </li>
            </ul>

            <!-- Progress bar -->
            <div class="form_progress"><span :style="{ width: progress + '%' }"></span></div>
        </nav>

        <form class="form_questions" v-if="!showDonePage" method="post"><div class="section_in">

            <!-- Header -->
            <header class="form_header">
                <span class="icon_wrapper">
                    <svg class="icon" width="82" height="76" viewBox="0 0 82 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M82.0034 53.4891C82.0034 44.1445 80.3839 34.9571 77.1927 26.1831L69.8674 6.0418C68.6477 2.6798 65.4189 0.417969 61.8417 0.417969H20.1618C16.5845 0.417969 13.3592 2.67639 12.136 6.0418L4.81067 26.1831C1.61608 34.9571 0 44.1445 0 53.4891V61.9214H6.83333V75.5881H23.9167V61.9214H58.0833V75.5881H75.1667V61.9214H82L82.0034 53.4891ZM15.3477 7.2103C16.0823 5.19105 18.0161 3.83805 20.1618 3.83805H61.8417C63.9873 3.83805 65.9212 5.19105 66.6557 7.2103L73.9811 27.3516C74.0289 27.4848 74.0597 27.6215 74.1075 27.7547H7.89592C7.94375 27.6215 7.9745 27.4848 8.02233 27.3516L15.3477 7.2103ZM20.5034 72.1714H10.2534V61.9214H20.5034V72.1714ZM30.7534 58.5047V51.6714H51.2534V58.5047H30.7534ZM71.7534 72.1714H61.5034V61.9214H71.7534V72.1714ZM78.5867 58.5047H54.6701V48.2547H27.3368V58.5047H3.42008V53.4891C3.42008 49.4266 3.78225 45.4018 4.41775 41.4214H13.6701V38.0047H5.06692C5.54183 35.7019 6.1295 33.4264 6.81967 31.1714H75.1872C75.8773 33.4264 76.465 35.7019 76.9399 38.0047H68.3367V41.4214H77.5891C78.2246 45.3984 78.5867 49.4232 78.5867 53.4891V58.5047Z" fill="#05005C"/>
                    </svg>
                </span>

                <h2 v-if="tab.active === 0" class="title">Hello, Let's see how much we can <br> save you on car insurance.</h2>
                <h2 v-if="tab.active === 1" class="title">Ok great! <br> Let's get a few details about you.</h2>
                <h2 v-if="tab.active === 2" class="title">Almost done, {{ userNameObj.full_name }}<br> Just a few final details.</h2>
            </header>

            <!-- Questions List -->
            <ul class="questions__list">

                <template v-for="(field, i) in questions">
                    <template v-if="field.group !== 'vehicle2' || field.group === 'vehicle2' && isSecondVehicle">

                        <li v-if="field.type === 'select_auto' && tabPosition(i) === tab.active" :ref="'qs' + i" :key="field.title" :class="[ 'q_item', 'id'+i, 'q_item--select_auto', {show: field.show, complete: field.complete} ]">
                            <question-header :title="field.title" :descr="field.descr" />

                            <div class="q_item_in" :class="{ complete: field.complete }">
                                <select-dropdown
                                    :class="{ show: true }"
                                    :options="field.options.years"
                                    :default="field.value.auto_year"
                                    @input="validateSelectAuto(field,'auto_year', $event, i)"
                                    @click="loadAutoData(field, 'auto_year', $event, i)"
                                />
                                <select-dropdown
                                    :class="{ show: !!(field.value.auto_year) }"
                                    :options="field.options.makes"
                                    :default="field.value.auto_make"
                                    :load="field.load.makes"
                                    @input="validateSelectAuto(field,'auto_make', $event, i)"
                                    @click="loadAutoData(field, 'auto_make', $event, i)"
                                />
                                <select-dropdown
                                    :class="{ show: !!(field.value.auto_year && field.value.auto_make) }"
                                    :options="field.options.models"
                                    :default="field.value.auto_model"
                                    :load="field.load.models"
                                    @input="validateSelectAuto(field,'auto_model', $event, i)"
                                    @click="loadAutoData(field, 'auto_model', $event, i)"
                                />
                            </div>
                        </li>

                        <li v-if="field.type === 'select' && tabPosition(i) === tab.active" :ref="'qs' + i" :key="field.title" :class="[ 'q_item', 'id'+i, 'q_item--select_one', {show: field.show, complete: field.complete} ]">
                            <question-header :title="field.title" :descr="field.descr" />
                            <select-dropdown
                                :default="field.value"
                                :options="field.options"
                                @input="validateSelect($event.value, i, field)"
                            />
                        </li>

                        <li v-if="field.type === 'radio' && tabPosition(i) === tab.active" :ref="'qs' + i" :key="field.title" :class="[ 'q_item', 'id'+i, 'q_item--radio', {show: field.show, complete: field.complete} ]">
                            <question-header :title="replaceTitle(field.title)" :descr="field.descr" />

                            <ul v-if="field.descrList?.length" class="radio__descr_list">
                                <li v-for="item in field.descrList" class="radio__descr_item"><span>{{ item }}</span></li>
                            </ul>

                            <FormKit
                                v-model="field.value"
                                type="radio"
                                :options="field.options"
                                @input="validateRadio(field, i)"
                            />
                        </li>

                        <li v-if="field.type === 'radio_star' && tabPosition(i) === tab.active" :ref="'qs' + i" :key="field.title" :class="[ 'q_item', 'id'+i, 'q_item--star_mod', {show: field.show, complete: field.complete} ]">
                            <question-header :title="field.title" :descr="field.descr" />
                            <FormKit
                                v-model="field.value"
                                name="coverage_radio"
                                type="radio"
                                :options="field.options"
                                @input="scrollController(field.type, i)"
                            >
                                <template #label="context">
                            <span class="label__in">
                                <span class="title">{{ context.option.value }}</span>
                                <span class="stars">
                                    <span class="icon_wrapper icon_star_wrap" v-for="star in context.option.star">
                                        <svg class="icon icon_star" width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5767 2.21993C10.9183 1.39864 12.0817 1.39864 12.4233 2.21993L14.4395 7.06735C14.5835 7.41358 14.9091 7.65015 15.2829 7.68012L20.5161 8.09966C21.4027 8.17074 21.7623 9.27725 21.0867 9.85592L17.0996 13.2713C16.8148 13.5153 16.6904 13.8981 16.7774 14.2628L17.9956 19.3695C18.202 20.2348 17.2607 20.9186 16.5016 20.455L12.0213 17.7184C11.7012 17.5229 11.2988 17.5229 10.9787 17.7184L6.4984 20.455C5.7393 20.9186 4.79805 20.2348 5.00444 19.3695L6.22257 14.2628C6.30958 13.8981 6.18521 13.5153 5.90042 13.2713L1.91328 9.85592C1.23774 9.27725 1.59727 8.17074 2.48392 8.09966L7.71712 7.68012C8.09091 7.65015 8.41652 7.41358 8.56052 7.06735L10.5767 2.21993Z" fill="#F1B312" stroke="#F1B312" stroke-width="2"/>
                                        </svg>
                                    </span>
                                </span>
                                <span class="footer_text">
                                    <span class="text" v-for="text in context.option.descr.split('\n').map(s => s.trim())">{{ text }}</span>
                                </span>
                            </span>
                                </template>
                            </FormKit>
                        </li><!-- /Stars -->

                        <li v-if="field.type === 'user_birth' && tabPosition(i) === tab.active" :ref="'qs' + i" :key="field.title" :class="[ 'q_item', 'id'+i, 'q_item--date_mod', {show: field.show, complete: field.complete} ]">
                            <question-header :title="field.title" :descr="field.descr" />

                            <div class="q_item_in">
                                <FormKit
                                    name="user_age"
                                    type="group"
                                >

                                    <FormKit
                                        v-model="field.value.mm"
                                        type="number"
                                        label="Month"
                                        number
                                        name="mm"
                                        :value="field.value.mm"
                                        :validation-rules="{ validateDate }"
                                        validation="validateDate"
                                        @input="validateDate(field.type, i)"
                                    />

                                    <FormKit
                                        v-model="field.value.dd"
                                        type="number"
                                        label="Day"
                                        number
                                        name="dd"
                                        :value="field.value.dd"
                                        :validation-rules="{ validateDate }"
                                        validation="validateDate"
                                        @input="validateDate(field.type, i)"
                                    />

                                    <FormKit
                                        v-model="field.value.yyyy"
                                        type="number"
                                        label="Year"
                                        number
                                        name="yyyy"
                                        :value="field.value.yyyy"
                                        :validation-rules="{ validateDate }"
                                        validation="validateDate"
                                        @input="validateDate(field.type, i)"
                                    />
                                </FormKit>
                            </div>

                            <div v-if="field.value.error.show" class="field_messages">
                                <span class="message">{{ field.value.error.text }}</span>
                            </div>
                        </li>

                        <li v-if="field.type === 'user_name' && tabPosition(i) === tab.active" :ref="'qs' + i" :key="field.title" :class="[ 'q_item', 'id'+i, 'q_item--user_name_mod', {show: field.show, complete: field.complete} ]">
                            <question-header :title="field.title" :descr="field.descr" />

                            <FormKit
                                id="FkUserName"
                                name="user_name"
                                type="group"
                                v-model="field.value"
                            >

                                <template #default="{ state: { valid } }">

                                    <FormKit
                                        type="text"
                                        label="Full Name"
                                        number
                                        name="full_name"
                                        help=""
                                        placeholder="Full Name"
                                        :validation="field.validation.full_name"

                                        :user_name_valid="userNameValid = valid"
                                        @input="validateUserName(field, valid, 'full_name', i)"
                                        @animationstart="checkAnimation"
                                    />

                                    <FormKit
                                        type="text"
                                        label="Last Name"
                                        number
                                        name="last_name"
                                        help=""
                                        placeholder="Last Name"
                                        :validation="field.validation.last_name"

                                        :user_name_valid="userNameValid = valid"
                                        @input="validateUserName(field, valid, 'last_name', i)"
                                        @animationstart="checkAnimation"
                                    />
                                </template>

                            </FormKit>
                        </li>

                        <li v-if="field.type === 'address' && tabPosition(i) === tab.active" :ref="'qs' + i" :key="field.title" :class="[ 'q_item', 'id'+i, 'q_item--address_mod', {show: field.show, complete: field.complete} ]">
                            <question-header :title="field.title" :descr="field.descr" />

                            <div class="q_item_in">

                                <FormKit name="user_name" type="group">
                                    <template #default="{ state: { valid } }">
                                        <FormKit
                                            v-model="field.value.address"
                                            name="address"
                                            label="Address"
                                            type="text"
                                            :validation="field.validation.address"
                                            @input="validateAddress(field, 'address', i, $event.value)"
                                            @animationstart="checkAnimation"
                                            :addressValid="addressValid = valid"
                                        />
                                        <FormKit
                                            v-model="field.value.unit"
                                            name="unit"
                                            label="Unit #"
                                            type="text"
                                            :validation="field.validation.unit"
                                            @input="validateAddress(field, 'unit', i, $event.value)"
                                            @animationstart="checkAnimation"
                                            :addressValid="addressValid = valid"
                                        />
                                        <FormKit
                                            v-model="field.value.apt"
                                            name="apt"
                                            label="Apt or unit (optional)"
                                            type="text"
                                            :validation="field.validation.apt"
                                            @input="validateAddress(field, 'apt', i, $event.value)"
                                            @animationstart="checkAnimation"
                                            :addressValid="addressValid = valid"
                                        />

                                        <div class="select_dropdown">
                                            <label>State: </label>
                                            <select-dropdown
                                                name="state"
                                                :default="field.value.state"
                                                :options="field.options"
                                                @input="validateAddress(field, 'state', i, $event.value)"
                                            />
                                        </div>

                                        <FormKit
                                            v-model="field.value.zip"
                                            label="Enter ZIP Code"
                                            type="text"
                                            name="zip"
                                            :validation="field.validation.zip"
                                            @input="validateAddress(field, 'zip', i, $event.value)"
                                            @animationstart="checkAnimation"
                                            :addressValid="addressValid = valid"
                                        />
                                    </template>
                                </FormKit>

                            </div>
                        </li>

                    </template>
                </template>

                <li :class="['button_next_tab', { done: !isTabs }]" ref="btnNextTab_1" v-show="tab.active === 0 && tab.complete[0]">
                    <button type="button" @click="goTab(1, true)">
                        <span v-if="isTabs">Next Step</span>
                        <span v-if="!isTabs">Send Request</span>
                    </button>
                </li>

                <li :class="['button_next_tab']" ref="btnNextTab_2" v-show="isTabs && tab.active === 1 && tab.complete[0] && tab.complete[1]">
                    <button type="button" @click="goTab(2, true)">Continue to Final Step</button>
                </li>

                <li :class="['button_next_tab', { done: isTabs }]" ref="btnNextTab_3" v-show="isTabs && tab.active === 2 && tab.complete[0] && tab.complete[1] && tab.complete[2]">
                    <button type="button" @click="goTab(3, true)">Get my good quotes</button>
                </li>

                <privacy-policy :show-no-spam-info="!isTabs" v-if="showPrivacyPolicy" />

            </ul>

        </div></form>

        <done v-if="showDonePage" :sendContentAjax="sendContent" :homeUrl="paramsPhp.homeUrl" class="form--auto" />
    </div>

</template>



<script>
import moment from 'moment'
import QuestionHeader from './parts/QuestionHeader.vue'
import Done from './parts/Done.vue'
import PrivacyPolicy from './parts/PrivacyPolicy.vue'
import SelectDropdown from './parts/SelectDropdown.vue'
import IconOk from './parts/IconOk.vue'
import axios from 'axios'
import {motorcycleCheckbox, motorcycleDatabase} from '../assets/data/moto.js'

export default {
    components: { Done, PrivacyPolicy, SelectDropdown, QuestionHeader, IconOk },
    props: {
        form: { type: String, required: true },
        qs: { type: Object, required: true },
    },
    data() {
        return {
            questions: this.qs.map((q, i) => { q.id = i; return q }),
            tab: { active: 0, complete: [0, 0, 0, 0], available: [0, 0, 0, 0] },
            tabs: [13, 24, -1],
            isValidDate: {mm: false, dd: false, yyyy: false},
            userNameValid: false,
            addressValid: false,
            userNameObj: '',
            company_name: '',
            autofilled: false,
            isSecondVehicle: false,
        }
    },
    computed: {
        paramsPhp() {
            let paramsPhp = {}
            if (typeof sfi_params !== 'undefined') {
                paramsPhp = sfi_params
            }

            if (!paramsPhp.homeUrl) {
                paramsPhp.homeUrl = 'http://localhost:8080/wp12/wp-content/plugins/shppb_forms_insurance/dist/'
            }

            return paramsPhp
        },
        autoMakeModel() {
            const autoQ = this.questions.find(q => q.type === 'select_auto' && q.key === 'select_auto')
            return autoQ.value.auto_make + ' ' + autoQ.value.auto_model
        },
        autoMakeModel2() {
            const autoQ2 = this.questions.find(q => q.type === 'select_auto' && q.key === 'select_auto2')
            return autoQ2.value.auto_make + ' ' + autoQ2.value.auto_model
        },
        progress() { return this.questions.filter(q => q.complete).length * 100 / this.questions.length },
        /** Find Question Birth */
        questionBirth() { return this.questions.find(q => q.type === 'user_birth') },
        isTabs() { return !!this.tabs },
        showPrivacyPolicy() {
            if (this.isTabs) {
                return this.tab.active === this.tabs.length - 1 && this.tab.complete[this.tab.active]
            } else {
                return this.tab.active !== 1 && this.tab.complete[this.tab.active]
            }
        },
        showDonePage() {
            if (this.isTabs) {
                return this.tab.active === this.tabs.length
            } else {
                return this.tab.active === 1
            }
        },
        isPenultimateTab() { return this.tab.active === ( this.tab.available.length - 1 ) },
    },
    methods: {
        navClass(tab) {
            return { active: this.tab.active === tab, complete: !!this.tab.complete[tab], available: !!this.tab.available[tab] }
        },
        replaceTitle(title) {
            if (title.includes('%%second_auto_make%%')) {
                return title.replace('%%second_auto_make%%', this.autoMakeModel2)
            }

            if (title.includes('%%auto_make%%')) {
                return title.replace('%%auto_make%%', this.autoMakeModel)
            }

            if (title.includes('%%company_name%%')) {
                return title.replace('%%company_name%%', this.company_name)
            }

            return title
        },

        /** Load Data */
        loadAutoData(field, key, event, id) {
            const self = this

            if (!event.target.classList.contains('selected')) {
                self.scrollController(key, id)
            }

            if (key === 'auto_year') {

                const elem = document.querySelector('.q_item--select_auto.id' + id)
                if (elem) this.scrollToSmoothly(this.getCoords(elem).top - 80)

                const year = self.questions[id].value.auto_year

                if (!!year) {
                    self.questions[id].load.makes = true
                    self.questions[id].value.auto_make = ''
                    self.questions[id].value.auto_model = ''

                    axios.get('https://www.fueleconomy.gov/ws/rest/vehicle/menu/make?year=' + year)
                        .then(function (data) {
                            const response = data.request.response
                            const object = JSON.parse(response)
                            const array = object.menuItem.map(elem => elem.value)
                            self.questions[id].options.makes = [self.questions[id].options.makes[0], ...array]

                        })
                        .catch(function (error) {
                            console.log(error.message)
                        })
                        .finally(function () {
                            self.questions[id].load.makes = false
                        })
                }
            }

            if (key === 'auto_make' && !!self.questions[id].value.auto_make) {

                self.questions[id].load.models = true

                const host = 'www.fueleconomy.gov'
                const make = self.questions[id].value.auto_make
                const year = self.questions[id].value.auto_year
                const url = 'https://' + host + '/ws/rest/vehicle/menu/model?year=' + year + '&make=' + make

                axios.get(url)
                    .then(function (data) {
                        const response = data.request.response
                        const obj = JSON.parse(response)
                        const arr = obj.menuItem.map(elem => elem.value)

                        self.questions[id].options.models = [ self.questions[id].options.models[0], ...arr ]
                    })
                    .catch(function (error) {
                        console.log(error.message)
                    })
                    .finally(function () {
                        self.questions[id].load.models = false
                    })
            }
        },

        /** Validate Field */
        validateSelectAuto(field, key, event, id) {
            const itemsSelected = document.querySelectorAll('.q_item--select_auto.id' + id + ' .custom-select .selected')

            if (key === 'auto_year' && !field.value.auto_make) {
                itemsSelected[1].innerText = field.options.makes[0]// 'Select Make'
                itemsSelected[2].innerText = field.options.models[0]// 'Select Model'
            }

            if (key === 'auto_make' && !field.value.auto_model) {
                itemsSelected[2].innerText = field.options.models[0]
            }

            field.value[key] = event.value
            field.complete = !!(field.value.auto_year && field.value.auto_make && field.value.auto_model)
        },
        validateSelect(value, i, field) {
            this.questions[i].value = value
            this.questions[i].complete = !!value

            if (field.key === 'select_insured_company') {
                this.company_name = value
            }

            this.scrollController(field.type, i)
        },
        validateRadioAndSelect(value, field, type, i) {

            if (type === 'radio') {
                const select = document.getElementById('radio_and_select__select')
                const option = select.querySelector('.item')

                if (select && option) {
                    const selected = select.querySelector('.selected')
                    selected.innerHTML = option.innerHTML
                    select.querySelectorAll('.item').forEach(elem => elem.classList.remove('selected_value'))
                }
            }

            if (type === 'select') {
                field.value = value
            }

            this.setMotorcycleModels(field)
            this.scrollController(field.type, i)
        },
        validateRadio(field, i) {

            if (field.key === 'add_second_vehicle') {
                const self = this
                setTimeout(() => {
                    self.isSecondVehicle = ('yes' === field.value?.toLowerCase())
                    this.managerTabs()
                }, 0)
            }

            this.scrollController(field.type, i)
        },
        validateDate(node, id) {
            if (node === 'user_birth') {
                this.scrollController(node, id)
            }

            if (this.questionBirth.optional) {
                this.questionBirth.value.error.show = false
                this.questionBirth.show = true
                this.questionBirth.complete = true
                return
            }

            const parent = node.at('$parent')

            if (!parent.value) return true

            const { mm, dd, yyyy } = parent.value
            const getMaxDate = (month, year) => {
                if (month === 2) {
                    return year ? moment(`${year}-02`, 'YYYY-MM').daysInMonth() : 29
                } else {
                    return [4, 6, 9, 11].includes(month) ? 30 : 31
                }
            }

            let isValid

            switch (node.name) {
                case 'mm':
                    this.isValidDate.mm = !(mm < 1 || mm > 12)
                    isValid = this.isValidDate.mm
                    break
                case 'dd':
                    this.isValidDate.dd = !(dd < 1 || dd > getMaxDate(mm, yyyy))
                    isValid = this.isValidDate.dd
                    break
                case 'yyyy':
                    this.isValidDate.yyyy = !(yyyy < 1900 || yyyy > 2024)
                    isValid = this.isValidDate.yyyy
                    break
            }

            let isAge = -1
            const isDateValid = this.isValidDate.mm && this.isValidDate.dd && this.isValidDate.yyyy

            if (isDateValid) {
                isAge = this.validateAge(mm, dd, yyyy)
            }

            if (parent.name === 'user_age') {
                this.questionBirth.value.error.show = isAge === 0
                this.questionBirth.complete = isAge === 1 && isDateValid
            }

            return isValid
        },
        validateAge(month, day, year, minAge = 18) {
            if ([month, day, year].includes(undefined)) {
                return -1
            }
            if (String(year).length !== 4) {
                return -1
            }



            // Перевірити валідність дати та кількість років

            let dateString = [year, month, day].join('-')

            // Отримати поточну дату
            const currentDate = moment()

            // Відняти minAge роки від поточної дати
            const lastYearDate = currentDate.subtract( minAge, 'years')

            let inputDate = null

            const timestamp = Date.parse(dateString)
            if (isNaN(timestamp) === false) {
                inputDate = new Date(timestamp)
            }

            if (inputDate) {

                if (moment(inputDate).isSameOrBefore(lastYearDate)) {
                    return 1
                } else {
                    return 0
                }

            } else {
                return -1
            }
        },
        validateUserName(field, valid, key, id) {

            setTimeout(() => {
                if (this.autofilled) {
                    field.complete = !!field.value.full_name && !!field.value.last_name
                } else {
                    field.complete = this.userNameValid
                    field.onInput = true
                    this.userNameObj = field.value
                }
            }, 300)

            this.scrollController(key, id)
        },
        validateAddress(field, name, id, value) {
            setTimeout(() => {
                let selectedState = !!field.value.state

                if (name === 'state') {
                    field.value.state = value
                    selectedState = !!value
                }

                if (this.autofilled) {
                    setTimeout(() => {
                        field.complete = !!field.value.address && !!field.value.unit && !!field.value.state && !!field.value.zip
                    }, 0)
                } else {
                    field.complete = this.addressValid && selectedState
                    field.onInput = true
                }

                this.setStatusCompleteQuestions()

                this.scrollController(field.type, id)
            }, 100)
        },

        /** Check Autofill */
        checkAnimation(e) {
            if(e.animationName === "onAutoFillStart") {
                this.autofilled = true;
            }
            else if(e.animationName === "onAutoFillCancel") {
                this.autofilled = false;
            }
        },

        /** Set Status Complete -- Validation */
        setStatusCompleteQuestions() {
            this.questions.forEach((q, inxQ) => {
                let complete

                if (q.optional) {
                    complete = true
                } else {

                    // Value Is Object

                    if (typeof q.value === 'object' && !Array.isArray(q.value) && q.value !== null) {
                        // Виключити з основного правила.
                        // Для цих полів індивідуальна валідація

                        // Name, Birth, Address
                        const inxAddr = this.questions.findIndex(q => q.type === 'address')
                        const inxAddr2 = this.questions.findIndex(q => q.type === 'address_v2')
                        const inxUserName = this.questions.findIndex(q => q.type === 'user_name')
                        const inxBirth = this.questions.findIndex(q => q.type === 'user_birth')

                        if ([inxUserName, inxBirth, inxAddr, inxAddr2].includes(inxQ)) {
                            complete = q.complete

                            if (q.type === 'address' && q.complete === undefined) {
                                complete = !!(q.value.address && q.value.unit && q.value.state && q.value.zip)
                            }

                            if (q.type === 'user_name' && !q.onInput) {
                                q.onInput = false
                                complete = !!q.value.full_name && !!q.value.last_name
                            }
                        }

                        // Для всих остальних
                        else {
                            complete = Object.entries(q.value).every(arr => !!arr[1])
                        }
                    }


                    // TYPE Checkbox
                    // Value is Array
                    else if (typeof q.value === 'object' && Array.isArray(q.value) && q.value !== null) {
                        complete = q.value.length > 0
                    }

                    // Email
                    else if (['email', 'text', 'number'].includes(q.type)) {
                        complete = q.complete
                    }

                    // Value is String
                    else {
                        complete = !!q.value
                    }
                }

                q.complete = complete
            })
        },

        tabPosition(i) {
            if (!this.isTabs) return 0

            let start = 0, tab = -1
            for (const end of this.tabs) {
                tab++
                if (i >= start && i < end) return tab
                start = end
            }
            return tab
        },
        managerTabs() {
            this.tab.complete = [] // [0, 0, 0, 0]
            this.tab.available = [] // [0, 0, 0, 0]

            const tabs = this.tabs || [0]

            // Complete Set

            let start = 0, tab = 0
            for (const count of tabs) {
                const end = count > 0 ? count : this.questions.length
                let complete = 1

                for (let j = start; j < end; j++) {

                    if (!this.isSecondVehicle && this.questions[j].group === 'vehicle2') {
                        continue
                    }

                    if (!this.questions[j].complete) {
                        complete = 0
                        break
                    }
                }

                this.tab.complete.push(complete)

                start = end
                tab++
            }
            this.tab.complete.push(0)  // + Done Tab


            // Available Set

            let prevComplete = undefined
            let prevAvailable = undefined
            let available = 1
            for (const complete of this.tab.complete) { // complete 0 or 1
                if (prevComplete === undefined) available = 1
                if (prevComplete === 0) available = 0
                if (prevComplete === 1) available = (prevAvailable === 0) ? 0 : 1

                this.tab.available.push(available)

                prevComplete = complete
                prevAvailable = available
            }

            this.tab.available[this.tab.available.length - 1] = 0
        },
        managerShowQuestions() {

            setTimeout(() => {
                for (let i = 0; i < this.questions.length; i++) {
                    let q = this.questions[i]
                    let next = this.questions[i + 1]


                    if (!this.isSecondVehicle) {
                        if (q.group === 'vehicle2') continue

                        if (next?.group === 'vehicle2') {
                            next = this.questions.find((e, n) => n > i && e.group !== 'vehicle2')
                        }
                    }

                    if (next) {
                        if (q.show && q.complete) {
                            next.show = true
                        }
                        if (q.show && !q.complete) {
                            next.show = false
                        }
                        if (!q.show) {
                            next.show = false
                        }
                    }
                }
            }, 100)
        },
        goTab(tab, isButton = false) {
            this.tab.active = tab

            window.scrollTo(0, 0)

            if (isButton && this.isPenultimateTab) {
                this.tab.available[this.tab.available.length - 1] = 1
                this.tab.complete[this.tab.complete.length - 1] = 1
                this.sendContent()
            }
        },

        /** SCROLL */
        getCoords(elem) { // crossbrowser version
            const box = elem.getBoundingClientRect()

            const body = document.body
            const docEl = document.documentElement

            const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
            const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft

            const clientTop = docEl.clientTop || body.clientTop || 0
            const clientLeft = docEl.clientLeft || body.clientLeft || 0

            const top  = box.top +  scrollTop - clientTop
            const left = box.left + scrollLeft - clientLeft

            return { top: Math.round(top), left: Math.round(left), height: box.height }
        },
        /*
           @param pos: the y-position to scroll to (in pixels)
           @param time: the exact amount of time the scrolling will take (in milliseconds)
        */
        scrollToSmoothly(pos, time) {
            var currentPos = window.pageYOffset;
            var start = null;
            if(time == null) time = 500;
            pos = +pos, time = +time;
            window.requestAnimationFrame(function step(currentTime) {
                start = !start ? currentTime : start;
                var progress = currentTime - start;
                if (currentPos < pos) {
                    window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
                } else {
                    window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
                }
                if (progress < time) {
                    window.requestAnimationFrame(step);
                } else {
                    window.scrollTo(0, pos);
                }
            });
        },
        scrollController(typeField, id) {
            const htmlElem = this.$refs['qs' + id][0]
            const elemCoord = this.getCoords(htmlElem)

            let offsetY = this.isTabs ? -80 : -40
            if (['radio', 'radio_star', 'select', 'radio_select'].includes(typeField)) {
                offsetY = elemCoord.height - (this.isTabs ? 20 : -20)
            }

            this.scrollToSmoothly(elemCoord.top + offsetY)
        },

        /** Send Content */
        sendContent() {
            let isSecondAuto = false

            // Create Html Content for PDF File
            let content = '<div>'
            content += `<h1>${this.userNameObj.full_name} ${this.userNameObj.last_name}</h1>`
            content += `<br>`
            content += `<span>Auto Form</span>`
            content += `<br>`
            this.questions.forEach(qsn => {

                if (qsn.key === 'add_second_vehicle') {
                    isSecondAuto = qsn.value.toLowerCase() === 'yes'
                }

                if (!isSecondAuto && qsn.group === 'vehicle2') {
                    return
                }

                let value = ''
                switch (qsn.type) {
                    case 'select_auto':
                        value = `${qsn.value.auto_year}, ${qsn.value.auto_make}, ${qsn.value.auto_model}`
                        break
                    case 'user_birth':
                        value = `${qsn.value.dd}-${qsn.value.mm}-${qsn.value.yyyy}`
                        break
                    case 'user_name':
                        value = `${qsn.value.full_name} ${qsn.value.last_name}`
                        break
                    case 'address':
                        value = `${qsn.value.address}, ${qsn.value.apt}, ${qsn.value.state}, ${qsn.value.unit}, ${qsn.value.zip}`
                        break
                    case 'address_v2':
                        value = `${qsn.value.address}, ${qsn.value.city}, ${qsn.value.state}, ${qsn.value.unit}, ${qsn.value.zip}`
                        break
                    default: value = qsn.value
                }
                content += `<div><h4>${ this.replaceTitle(qsn.title) }</h4><p>${ value }</p></div>`
            })
            content += '</div>'

            const data = {
                id: 'auto',
                user_name: this.userNameObj,
                car_make: this.autoMakeModel,
                car_make2: this.autoMakeModel2,
                content: content,
            }

            jQuery.ajax({
                url: sfi_params.adminUri,
                type: 'post',
                data: {
                    action: 'form_insurance_ajax',
                    nonce: sfi_params.nonce,
                    data,
                },
                success: function (data) {
                    console.log('success!')
                },
                error: function (error) {
                    console.log(error.message)
                },
            })
        },
    },
    mounted() {
        this.setStatusCompleteQuestions()
        this.managerTabs()
        window.scrollTo(0, 0)
        this.isSecondVehicle = this.questions.find(q => q.key === 'add_second_vehicle')?.value === 'Yes'
    },
    watch: {
        questions: {
            deep: true,
            handler(val, oldVal) {
                this.setStatusCompleteQuestions()
                this.managerTabs()
                this.managerShowQuestions()
            }
        }
    },
}
</script>