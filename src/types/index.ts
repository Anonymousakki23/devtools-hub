export interface Tool {
  id: number;
  name: string;
  slug: string;
  description: string;
  url: string;
  category: string;
  tags: string;
  source: string;
  source_id: string;
  stars: number;
  last_updated: string;
  featured: number;
  affiliate_url: string | null;
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
  updated_at: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  tool_count: number;
}

export interface AnalyticsEvent {
  id: number;
  event_type: string;
  page_path: string;
  referrer: string | null;
  user_agent: string | null;
  timestamp: string;
  metadata: string | null;
}

export interface PageMetrics {
  page_path: string;
  views: number;
  unique_visitors: number;
  avg_time_on_page: number;
  bounce_rate: number;
  affiliate_clicks: number;
  last_updated: string;
}

export interface KeywordPerf {
  keyword: string;
  impressions: number;
  clicks: number;
  ctr: number;
  avg_position: number;
  page_path: string;
  last_updated: string;
}

export interface OptimizationConfig {
  id: number;
  key: string;
  value: string;
  updated_at: string;
}

export interface DataCollectionResult {
  tools: number;
  errors: string[];
  sources: Record<string, number>;
}

export interface PipelineResult {
  collection: DataCollectionResult;
  generated_pages: number;
  optimization_applied: string[];
  timestamp: string;
}
