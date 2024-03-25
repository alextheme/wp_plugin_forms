<template>
    <div :class="['custom-select', { load: this.load, complete: this.options && this.selected !== this.options[0] }]"
         :tabindex="tabindex"
         @blur="open = false">

        <div class="selected" :class="{ selectOpen: open }" @click="open = load ? open : !open">
            {{ selected }}
        </div>

        <span class="icon_wrapper icon_arrow_wrap">
            <svg class="icon icon_arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8">
                <path class="st0" d="M7,8C6.7,8,6.5,7.9,6.3,7.7l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0L7,5.6l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C7.5,7.9,7.3,8,7,8z"/>
            </svg>
        </span>

        <ul class="items" :class="{ selectHide: !open }">
            <li class="item" v-for="(option, i) of this.options"
                :key="i"
                @click="selected = option; open = false; $emit('input', { value: option === options[0] ? '' : option, complete: option !== options[0] })"
                :class="{ 'selected_value': option === selected }"
            >
                {{ option }}
            </li>
        </ul>

        <div class="loader"></div>
    </div>
</template>

<script>
export default  {
    props: {
        default: { type: String, required: false, default: null },
        tabindex: { type: Number, required: false, default: 0 },
        options: { type: Array, required: true },
        load: { type: Boolean, required: false, default: false }
    },
    data() {
        return {
            selected: this.default
                ? this.default
                : this.options && this.options.length > 0
                    ? this.options[0]
                    : null,
            open: false,
        };
    },
    mounted() {
        this.$emit("input", { value: this.options && this.selected === this.options[0] ? '' : this.selected, complete: this.options && this.selected !== this.options[0]} )
    }
}
</script>
