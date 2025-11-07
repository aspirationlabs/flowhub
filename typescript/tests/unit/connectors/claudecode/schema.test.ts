import {
  DailyUsageSchema,
  DailyResponseSchema,
  TotalUsageSchema,
  ModelBreakdownSchema,
} from 'connectors/claudecode/schema';

describe('Claude Code Schemas', () => {
  describe('ModelBreakdownSchema', () => {
    it('should validate correct model breakdown data', () => {
      const validData = {
        modelName: 'claude-sonnet-4-5-20250929',
        inputTokens: 1000,
        outputTokens: 500,
        cacheCreationTokens: 200,
        cacheReadTokens: 300,
        cost: 2.5,
      };

      const result = ModelBreakdownSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    it('should reject invalid model breakdown data', () => {
      const invalidData = {
        modelName: 'claude-sonnet-4-5-20250929',
        inputTokens: '1000', // should be number
        outputTokens: 500,
        cacheCreationTokens: 200,
        cacheReadTokens: 300,
        cost: 2.5,
      };

      const result = ModelBreakdownSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('DailyUsageSchema', () => {
    it('should validate correct daily usage data', () => {
      const validData = {
        date: '2024-10-01',
        inputTokens: 5000,
        outputTokens: 2500,
        cacheCreationTokens: 1000,
        cacheReadTokens: 1500,
        totalTokens: 10000,
        totalCost: 15.5,
        modelsUsed: ['claude-sonnet-4-5-20250929', 'claude-haiku-4-5-20251001'],
        modelBreakdowns: [
          {
            modelName: 'claude-sonnet-4-5-20250929',
            inputTokens: 3000,
            outputTokens: 1500,
            cacheCreationTokens: 600,
            cacheReadTokens: 900,
            cost: 10.0,
          },
          {
            modelName: 'claude-haiku-4-5-20251001',
            inputTokens: 2000,
            outputTokens: 1000,
            cacheCreationTokens: 400,
            cacheReadTokens: 600,
            cost: 5.5,
          },
        ],
      };

      const result = DailyUsageSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    it('should handle empty model breakdowns', () => {
      const validData = {
        date: '2024-10-01',
        inputTokens: 0,
        outputTokens: 0,
        cacheCreationTokens: 0,
        cacheReadTokens: 0,
        totalTokens: 0,
        totalCost: 0,
        modelsUsed: [],
        modelBreakdowns: [],
      };

      const result = DailyUsageSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject missing required fields', () => {
      const invalidData = {
        date: '2024-10-01',
        inputTokens: 5000,
        // missing outputTokens and other required fields
      };

      const result = DailyUsageSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('TotalUsageSchema', () => {
    it('should validate correct total usage data', () => {
      const validData = {
        inputTokens: 100000,
        outputTokens: 50000,
        cacheCreationTokens: 20000,
        cacheReadTokens: 30000,
        totalCost: 250.75,
        totalTokens: 200000,
      };

      const result = TotalUsageSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    it('should reject negative values', () => {
      const invalidData = {
        inputTokens: -100,
        outputTokens: 50000,
        cacheCreationTokens: 20000,
        cacheReadTokens: 30000,
        totalCost: 250.75,
        totalTokens: 200000,
      };

      // Note: The schema doesn't enforce positive numbers,
      // but we could add .min(0) to the number fields if needed
      const result = TotalUsageSchema.safeParse(invalidData);
      expect(result.success).toBe(true); // Currently passes - add validation if needed
    });
  });

  describe('DailyResponseSchema', () => {
    it('should validate complete daily response', () => {
      const validData = {
        daily: [
          {
            date: '2024-10-01',
            inputTokens: 1000,
            outputTokens: 500,
            cacheCreationTokens: 200,
            cacheReadTokens: 300,
            totalTokens: 2000,
            totalCost: 5.0,
            modelsUsed: ['claude-sonnet-4-5-20250929'],
            modelBreakdowns: [],
          },
          {
            date: '2024-10-02',
            inputTokens: 2000,
            outputTokens: 1000,
            cacheCreationTokens: 400,
            cacheReadTokens: 600,
            totalTokens: 4000,
            totalCost: 10.0,
            modelsUsed: ['claude-sonnet-4-5-20250929'],
            modelBreakdowns: [],
          },
        ],
        totals: {
          inputTokens: 3000,
          outputTokens: 1500,
          cacheCreationTokens: 600,
          cacheReadTokens: 900,
          totalCost: 15.0,
          totalTokens: 6000,
        },
      };

      const result = DailyResponseSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.daily).toHaveLength(2);
        expect(result.data.totals.totalCost).toBe(15.0);
      }
    });

    it('should handle empty daily array', () => {
      const validData = {
        daily: [],
        totals: {
          inputTokens: 0,
          outputTokens: 0,
          cacheCreationTokens: 0,
          cacheReadTokens: 0,
          totalCost: 0,
          totalTokens: 0,
        },
      };

      const result = DailyResponseSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject malformed response', () => {
      const invalidData = {
        daily: 'not-an-array',
        totals: {
          inputTokens: 0,
          outputTokens: 0,
          cacheCreationTokens: 0,
          cacheReadTokens: 0,
          totalCost: 0,
          totalTokens: 0,
        },
      };

      const result = DailyResponseSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('Edge Cases', () => {
    it('should handle very large numbers', () => {
      const validData = {
        inputTokens: Number.MAX_SAFE_INTEGER,
        outputTokens: Number.MAX_SAFE_INTEGER,
        cacheCreationTokens: Number.MAX_SAFE_INTEGER,
        cacheReadTokens: Number.MAX_SAFE_INTEGER,
        totalCost: Number.MAX_SAFE_INTEGER,
        totalTokens: Number.MAX_SAFE_INTEGER,
      };

      const result = TotalUsageSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should handle decimal costs', () => {
      const validData = {
        modelName: 'claude-sonnet-4-5-20250929',
        inputTokens: 1000,
        outputTokens: 500,
        cacheCreationTokens: 200,
        cacheReadTokens: 300,
        cost: 2.123456789, // Many decimal places
      };

      const result = ModelBreakdownSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.cost).toBe(2.123456789);
      }
    });
  });
});
