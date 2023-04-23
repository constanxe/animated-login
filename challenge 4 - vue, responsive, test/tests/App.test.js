import { mount } from "@vue/test-utils";
import App from "../src/App.vue";

describe.only("App should have the correct behaviour", () => {

    const wrapper = mount(App);
    // console.log(wrapper.html());

    describe.only("InfoContainer should slide left when button clicked", () => {

        test("Relevant components should exist", () => {
            expect(wrapper.find("#container").exists()).toBeTruthy();
            expect(wrapper.find(".form-item.login .swap").exists()).toBeTruthy();
        });

        test("InfoContainer should not contain active class initially", () => {
            expect(wrapper.find("#container").classes()).not.toContain("active");
        });

        test("InfoContainer should have the active class after the button is clicked", async () => {
            wrapper.find(".form-item.login .swap").trigger("click");
            await wrapper.vm.$nextTick();
            expect(wrapper.find("#container").classes()).toContain("active");
        });
    });
});