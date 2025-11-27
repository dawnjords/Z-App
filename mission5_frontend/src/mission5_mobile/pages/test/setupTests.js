// src/mission5_mobile/pages/test/setupTests.js
import { afterEach, expect } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

// add jest-dom's custom matchers to vitest's expect
expect.extend(matchers);

// clean up the DOM after each test
afterEach(() => {
  cleanup();
});
