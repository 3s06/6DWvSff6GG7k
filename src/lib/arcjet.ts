import arcjet, { shield } from "@arcjet/next";
import { detectBot, fixedWindow, tokenBucket } from "@arcjet/next";

const Arcjet = arcjet({
   key: process.env.ARCJET_KEY!,
   rules: [
     shield({
       mode: "LIVE",
   }),
   ],
});


export const aj = Arcjet.withRule(detectBot({
    mode: "LIVE",
    allow: [
        "CATEGORY:SEARCH_ENGINE",
        "POSTMAN"
        //"CATEGORY:MONITOR", // Uptime monitoring services
        //"CATEGORY:PREVIEW", // Link previews e.g. Slack, Discord
    ]
})).withRule(tokenBucket({
    mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
    refillRate: 5, // refill 5 tokens per interval
    interval: 10, // refill every 10 seconds
    capacity: 10, // bucket maximum capacity of 10 tokens
})).withRule(
    fixedWindow({
    mode: "LIVE",
    max: 100,
    window: "60s",
    }),
);