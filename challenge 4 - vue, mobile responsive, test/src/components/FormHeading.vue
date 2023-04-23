<template>
    <div class="heading">
        <h2 v-if="option=='login'">Sign in</h2>
        <h2 v-else-if="option=='signup'">Create Account</h2>
    </div>
</template>

<script>
export default {
    name: "FormHeading",
    props: {
        option: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped lang="scss">

.heading {
    text-align: center;
    padding-top: 10px;
    height: 40px;

    @media (max-width: $breakpoint) {
        text-align: left;
        padding-left: 30px;
    }
}

</style>
