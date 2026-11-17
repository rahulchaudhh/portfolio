import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  accountId: "bf67f0053264b0ed6759d4b46678a630",
  worker: defineWorker({
    name: "rahulchaudhary-portfolio-preview",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-11-17",
    assets: {
      htmlHandling: "none",
      notFoundHandling: "none",
      runWorkerFirst: ["/*", "!/_next/static/*", "!/*/_next/static/*"],
    },
    env: {
      ASSETS: bindings.assets(),
    },
  }),
});
