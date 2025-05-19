import arcjet, { tokenBucket, detectBot, shield } from "@arcjet/next";
import { isSpoofedBot } from "@arcjet/inspect";

const ARCJET_KEY = process.env.ARCJET_KEY!;

export default arcjet({
    key: ARCJET_KEY,
    characteristics: ["ip.src"],
    rules: [
        shield({ mode: "LIVE"  }),
        detectBot({
            mode: "LIVE",
            allow: [
                "CATEGORY:SEARCH_ENGINE", /* Mecanismos de pesquisa como Google, Bing, etc */
                "CATEGORY:MONITOR", /* Serviços de monitoramento */
                "CATEGORY:PREVIEW", /* Links preview como Discord etc */
            ]
        }),
        tokenBucket({
            mode: "LIVE",
            refillRate: 5, // Refill 5 tokens per interval
            interval: 10, // Refill every 10 seconds
            capacity: 10, // Bucket capacity of 10 tokens
        }),
    ]
})