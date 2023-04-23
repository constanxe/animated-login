<template>
    <div class="wrapper">
        <div class="container-info">
            <InfoItem :option="'login'"/>
            <InfoItem :option="'signup'"/>
        </div>
    </div>
</template>

<script>
import InfoItem from "./InfoItem.vue";

export default {
    name: "InfoContainer",
    components: {
        InfoItem
    }
};
</script>

<style scoped lang="scss">
.wrapper {
    position: relative;
    display: flex;
    align-items: center;
}
.container-info {
    position: absolute;
    left: 300px;
    width: 300px;
    height: 380px;
    background-color: $primary-light;
    transition: all 0.3s;

    @media (max-width: $breakpoint) {
        display: none;
    }
}
</style>
