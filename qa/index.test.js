import { assertEquals } from "https://deno.land/std@0.133.0/testing/asserts.ts";

Deno.test("url test", () => {
    const url = new URL("./", "https://api.sauveur.xyz/");
    assertEquals(url.href, "https://api.sauveur.xyz/");
});