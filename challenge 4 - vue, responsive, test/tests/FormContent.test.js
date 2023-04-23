import { shallowMount } from "@vue/test-utils";
import FormContent from "../src/components/FormContent.vue";

describe("FormContent", () => {

    let wrapper;

    describe("Login Form rendered correctly", () => {

        beforeEach(() => {
            wrapper = shallowMount(FormContent, {
                propsData: {
                    option: {
                        class: "",
                        alert: "login!"
                    }
                }
            });
        });

        it("should have the correct input fields", () => {
            expect(wrapper.find("[name='email']").exists()).toBeTruthy();
            expect(wrapper.find("[name='Password']").exists()).toBeTruthy();
            expect(wrapper.find("[name='ConfirmPassword']").exists()).not.toBeTruthy();
            expect(wrapper.find(".btn").exists()).toBeTruthy();
        });

        it("should not submit when inputs are invalid", () => {
            // Mock alert functionality
            window.alert = jest.fn();

            // Set user inputs
            wrapper.find("[name='email']").setValue("alice");
            wrapper.find("[name='Password']").setValue("12345");

            // Submit user inputs
            wrapper.find("form").trigger("submit.prevent");

            // Check that there is no alert
            expect(window.alert).not.toHaveBeenCalled();
        });

        it("should submit when inputs are valid", () => {
            // Mock alert functionality
            window.alert = jest.fn();

            // Set user inputs
            wrapper.find("[name='email']").setValue("alice@wonderland.com");
            wrapper.find("[name='Password']").setValue("123456");

            // Submit user inputs
            wrapper.find("form").trigger("submit.prevent");

            // Check that there is an alert
            expect(window.alert).toHaveBeenCalled();

            // Check message
            expect(window.alert).toHaveBeenCalledWith("login!");
        });

    });

    describe("Signup Form rendered correctly", () => {

        beforeEach(() => {
            wrapper = shallowMount(FormContent, {
                propsData: {
                    option: {
                        class: "sign-up",
                        alert: "register!"
                    }
                }
            });
        });

        it("should have the correct input fields", () => {
            expect(wrapper.find("[name='email']").exists()).toBeTruthy();
            expect(wrapper.find("[name='Password']").exists()).toBeTruthy();
            expect(wrapper.find("[name='ConfirmPassword']").exists()).toBeTruthy();
            expect(wrapper.find(".btn").exists()).toBeTruthy();
        });

        it("should not submit when passwords do not match", () => {
            // Mock alert functionality
            window.alert = jest.fn();

            // Set user inputs
            wrapper.find("[name='email']").setValue("alice@wonderland.com");
            wrapper.find("[name='Password']").setValue("123456");
            wrapper.find("[name='ConfirmPassword']").setValue("000000");

            // Submit user inputs
            wrapper.find("form").trigger("submit.prevent");

            // Check that there is no alert
            expect(window.alert).not.toHaveBeenCalled();
        });

        it("should submit when passwords match", () => {
            // Mock alert functionality
            window.alert = jest.fn();

            // Set user inputs
            wrapper.find("[name='email']").setValue("alice@wonderland.com");
            wrapper.find("[name='Password']").setValue("123456");
            wrapper.find("[name='ConfirmPassword']").setValue("123456");

            // Submit user inputs
            wrapper.find("form").trigger("submit.prevent");

            // Check that there is an alert
            expect(window.alert).toHaveBeenCalled();

            // Check message
            expect(window.alert).toHaveBeenCalledWith("register!");
        });
    });

});