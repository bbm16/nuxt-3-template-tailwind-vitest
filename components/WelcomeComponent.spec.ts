import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import WelcomeComponent from "./WelcomeComponent.vue";

describe("Given Welcome Component", () => {
  it("Then it renders the welcome message prop correctly", async () => {
    await renderSuspended(WelcomeComponent, {
      props: {
        message: "Hello World",
      },
    });
    expect(screen.getByText("Hello World")).toBeDefined();
  });
});
