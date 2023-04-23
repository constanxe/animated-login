<template>
  	<div id="app">
    	<div id="container" :class="{active:isActive}">
			<InfoContainer/>
			<FormContainer @toggle="toggleActive"/>
		</div>
	</div>
</template>

<script>
import InfoContainer from "./components/InfoContainer.vue";
import FormContainer from "./components/FormContainer.vue";

export default {
    name: "App",
    components: {
        InfoContainer,
        FormContainer
    },
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        toggleActive() {
            this.isActive=!this.isActive;
            return this.isActive;
        }
    }
};
</script>

<style lang="scss">
html {
    overflow: hidden;
    font-family: sans-serif;
}
#container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;

    @media (max-width: $breakpoint) {
        margin-left: -50%;
    }

    &.active {
        @media (min-width: $breakpoint) {
            .container-info {
                left: 0;

                .info-item {
                    &.log-in {
                        opacity: 0;
                    }
                    &.sign-up {
                        opacity: 1;
                    }
                }
            }
        }
    }

    /* transition: sign up */
    @media (max-width: $breakpoint) {
        .container-form {
            // transform: translateX(340px);
            margin-left: 680px;
            .form-item {
                &.login {
                    opacity: 1;
                }
                &.register {
                    opacity: 0;
                }
            }
        }

        &.active {
            .container-form {
                transform: translateX(-340px);

                .form-item {
                    &.login {
                        opacity: 0;
                    }
                    &.register {
                        opacity: 1;
                    }
                }
            }
        }
    }
}

</style>