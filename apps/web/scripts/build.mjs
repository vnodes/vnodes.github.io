import { createSitemap } from "./create-site-map.mjs";
import { sendSitemap } from "./send-sitemap.mjs";
async function build() {
    await createSitemap();
    await sendSitemap();

}
build()



