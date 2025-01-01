import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import HomePageContent from "../src/components/HomePageContent.astro";

test("Home page content", async () => {
  const container = await AstroContainer.create();

  const result = await container.renderToString(HomePageContent);

  expect(result).toContain("Projects");
});
