import { z } from 'zod';

export const ModelBreakdownSchema = z.object({
  modelName: z.string(),
  inputTokens: z.number(),
  outputTokens: z.number(),
  cacheCreationTokens: z.number(),
  cacheReadTokens: z.number(),
  cost: z.number(),
});

export const DailyUsageSchema = z.object({
  date: z.string(), // Format: "YYYY-MM-DD"
  inputTokens: z.number(),
  outputTokens: z.number(),
  cacheCreationTokens: z.number(),
  cacheReadTokens: z.number(),
  totalTokens: z.number(),
  totalCost: z.number(),
  modelsUsed: z.array(z.string()),
  modelBreakdowns: z.array(ModelBreakdownSchema),
});

export const TotalUsageSchema = z.object({
  inputTokens: z.number(),
  outputTokens: z.number(),
  cacheCreationTokens: z.number(),
  cacheReadTokens: z.number(),
  totalCost: z.number(),
  totalTokens: z.number(),
});

export const DailyResponseSchema = z.object({
  daily: z.array(DailyUsageSchema),
  totals: TotalUsageSchema,
});

export type DailyUsage = z.infer<typeof DailyUsageSchema>;
export type DailyResponse = z.infer<typeof DailyResponseSchema>;
export type TotalUsage = z.infer<typeof TotalUsageSchema>;
export type ModelBreakdown = z.infer<typeof ModelBreakdownSchema>;
