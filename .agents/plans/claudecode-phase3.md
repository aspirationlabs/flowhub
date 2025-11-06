# Claude Code Connector - Future Phases

## Phase 3: Data Transformation Layer

### Objectives
**Only implement utilities required for phase 4**
- Build utilities for transforming raw MCP data for widget consumption
- Cache transformed data for analytics widget display (for phase 4)

### Tasks

1. **Create Aggregation Utilities** (`typescript/utils/claudecode-aggregation.ts`)
   - `aggregateByDateRange(data: DailyResponse, start: Date, end: Date): AggregatedData`
   - `filterByModels(data: DailyResponse, models: string[]): DailyResponse`
   - `getTodaysCost(data: DailyResponse): number`
   - `prepareTableData(data: DailyResponse, filters: FilterOptions): TableRow[]`
   - `calculateTrends(data: DailyResponse): TrendMetrics`

2. **Memory Caching Strategy**
   - Implement React Context for cached transformed data
   - Use React Query or SWR for smart caching with TTL
   - Cache invalidation on filter changes
   - Prevent redundant transformations

3. **Data Types**
   ```typescript
   interface ClaudeCodeDayModelCostRow {
     date: string;
     model: string;
     inputTokens: number;
     outputTokens: number;
     cacheTokens: number;
     totalTokens: number;
     cost: number;
   }
   ```

## Phase 4: Full Widget Implementation

### Objectives
- Replace simple analytics widget with full-featured components
- Add today's cost widget
- Implement comprehensive analytics dashboard

### Tasks

1. **ClaudeCodeCostWidget** (`ClaudeCodeCostWidget.tsx`)
   - Display today's total cost prominently
   - Show cost trend (up/down from yesterday)
   - Mini sparkline for last 7 days
   - Auto-refresh on sync period
   - Scrollable table from latest to oldest ClaudeCodeDayModelCostRow

2. **Enhanced ClaudeCodeAnalyticsWidget**

   **Filters Section:**
   - Date range picker with calendar UI
     - Default: Today (start = end = today)
     - When users click the date (start, or end), they get a calendar dropdown and can click a date (up to 1 month ago)
   - Model filter multi-select dropdown
     - Show all available models from data
     - Select/deselect all option
   - Export button (CSV/JSON)

   **Summary Section:**
   - Total cost for selected period
   - Total tokens with breakdown by model type
   - Most used model

   **Data Table:**
   - Columns: Date | Model | Input | Output | Cache Create | Cache Read | Total | Cost
   - Sortable columns (click header to sort)
   - Pagination if > 30 rows
   - Row hover effects
   - Responsive mobile view (cards instead of table)

3. **UI Components Needed**
   - Calendar/DatePicker from Shadcn
   - Multi-select dropdown
   - Data table with sorting
   - Loading skeletons for each section
   - Error boundaries

## Phase 5: Polish & Optimization

### Objectives
- Improve error handling and resilience
- Add performance optimizations
- Enhance user experience

### Tasks

1. **Error Handling**
   - Exponential backoff for MCP retries
   - Graceful degradation when server unavailable
   - User-friendly error messages
   - Retry mechanisms with visual feedback
   - Connection status indicator

2. **Performance**
   - Virtual scrolling for large datasets
   - Lazy loading of chart libraries
   - IndexedDB for larger data storage (if localStorage limits hit)
   - Web Workers for heavy computations
   - Debounced filter updates

3. **UX Enhancements**
   - Auto-refresh toggle
   - Manual refresh button
   - Sync status in connector card (with last sync time)
   - Eagerly sync every syncPeriods when data loaded is stale
   - Keyboard shortcuts for common actions
   - Dark mode optimizations