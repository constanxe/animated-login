<template>
    <form class="form" ref="form" @submit.prevent="processForm">
        <div class="form-group">
            <label for="email">Email</label>
            <input name="email" placeholder="pigeon@nestcoop.com" type="email" class="form-control" required/>
        </div>

        <div class="form-group">
            <label for="Password">Password</label>
            <input name="Password" placeholder="******" type="Password" minlength="6" class="form-control" required v-model="Password" ref="Password"/>
        </div>

        <div class="form-group" v-if="option.class=='sign-up'">
            <label for="ConfirmPassword">Confirm Password</label>
            <input name="ConfirmPassword" placeholder="******" type="Password" class="form-control" v-model="ConfirmPassword" ref="ConfirmPassword" @keyup="match"/>
        </div>

        <button type="submit" class="btn">{{option.btn}}</button>
    </form>
</template>

<script>
export default {
    name: "FormContent",
    props: {
        option: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            Password: "",
            ConfirmPassword: ""
        };
    },
    methods: {
        match() {
            if (this.Password !== this.ConfirmPassword) {
                this.$refs.ConfirmPassword.setCustomValidity("password does not match");
            } else {
                this.$refs.ConfirmPassword.setCustomValidity("");
            };
        },
        processForm() {
            if (this.ConfirmPassword) {
                this.match();
            }
            if (!this.$refs.form.checkValidity()) {
                this.$refs.form.reportValidity();
            } else {
                alert(this.$props.option.alert);
            };
        }
    }
};
</script>

<style scoped lang="scss">

.form {
    @include handle-text;
    height: 140px;
}

input {
    @include handle-component;
    margin: 2px 0 10px;
    width: 210px;
    border-width: 1px;

    @media (max-width: $breakpoint) {
        width: 246px;
    }
}
.btn {
    @include handle-component;
    color: #fff;
    text-align: center;
    border: none;
    border-radius: 18px;
}
.login {
    .btn {
        background-color: $primary-dark;
    }
    .swap:hover {
        color: $primary-light;
    }
}
.register {
    .btn {
        background-color: $secondary;
    }
    .swap:hover {
        color: $secondary;
        opacity: 0.6;
    }
}

</style>
