import { ConvexError, v } from "convex/values";

import { mutation, query } from "./_generated/server";

export const getUrl = mutation({
    args: {
        storageId: v.id("storage"),
    },
    handler: async (ctx, args) => {
        return await ctx.storage.getUrl(args.storageId)
    },
});