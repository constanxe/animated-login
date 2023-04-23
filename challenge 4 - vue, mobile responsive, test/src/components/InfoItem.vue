<template>
    <div class="info-item log-in" v-if="option=='login'">
        <div class="info">
            <h1>Hello There</h1>
            <p>Don't have an account?<br>Sign up with us today!</p>
        </div>
    </div>

    <div class="info-item sign-up" v-else-if="option=='signup'">
        <div class="info">
            <h1>Lets get you started</h1>
            <p>Be part of our awesome<br>team and have fun with us</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "InfoItem",
    props: {
        option: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped lang="scss">

.info-item {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    &.log-in {
        background-color: $primary-light;
    }

    &.sign-up {
        background-color: $secondary;
        color: $primary-light;
        opacity: 0;

        @media (max-width: $breakpoint) {
            color: $primary-dark;
            opacity: 0.9;
        }
    }
}

</style>
