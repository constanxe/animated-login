<template>
    <div class="container-form">

        <div class="form-item login">
            <InfoItem :option="'login'"/>
            <FormHeading :option="'login'"/>
            <FormContent :option="login"/>
            <div class="swap" @click="toggle">Create account</div>
        </div>

        <div class="form-item register">
            <InfoItem :option="'signup'"/>
            <FormHeading :option="'signup'"/>
            <FormContent :option="signup"/>
            <div class="swap" @click="toggle">Already have an account?</div>
        </div>

    </div>
</template>

<script>
import InfoItem from "./InfoItem.vue";
import FormHeading from "./FormHeading.vue";
import FormContent from "./FormContent.vue";

export default {
    name: "FormContainer",
    components: {
        InfoItem,
        FormHeading,
        FormContent
    },
    methods: {
        toggle() {
            this.$emit("toggle");
        }
    },
    data() {
        return {
            login: {
                btn: "Login",
                alert: "login!"
            },
            signup: {
                class: "sign-up",
                btn: "Create",
                alert: "register!"
            }
        };
    }
};
</script>

<style scoped lang="scss">

.container-form {
    width: 600px;
    display: flex;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);

    @media (max-width: $breakpoint) {
        box-shadow: none;
        left: -300px;

        /* transition: log in */
        transform: translateX(0);
        transition: all 0.3s;
        transition-timing-function: ease-out;

        .form-item {
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);

            &.login {
                opacity: 0;
                transition: all 0.7s;
            }
            &.register {
                opacity: 1;
                transition: all 0.3s;
                transition-timing-function: ease-out;
            }
        }
    }

    .info-item {
        display: none;

        @media (max-width: $breakpoint) {
            display: block;
            position: relative;
            display: flex;
            justify-content: left;
            text-align: left;
            padding: 10px 30px;
            height: 140px;
            width: 277px;
            font-size: 90%;
        }
    }
}

.swap {
    @include handle-text;
    background-color: transparent;
    text-decoration-line: underline;
    text-align: right;
    cursor: pointer;
}

</style>
