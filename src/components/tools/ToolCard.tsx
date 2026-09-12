import Link from 'next/link';

interface ToolCardProps {
  tool: {
    name: string;
    slug: string;
    description: string;
    category: string;
    stars: number;
    tags: string[];
    url: string;
  };
  featured?: boolean;
}

export default function ToolCard({ tool, featured = false }: ToolCardProps) {
  const starsDisplay = tool.stars >= 1000
    ? `${(tool.stars / 1000).toFixed(1)}k`
    : String(tool.stars);

  const categoryLabel = tool.category.replace(/-/g, ' ');

  return (
    <Link
      href={`/tools/${tool.slug}/`}
      className={`block bg-white rounded-lg border p-5 hover:border-brand-300 hover:shadow-md transition-all group ${
        featured ? 'ring-2 ring-brand-100' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-1">
          {tool.name}
        </h3>
        <span className="flex-shrink-0 text-xs text-gray-500 flex items-center gap-1 bg-gray-50 px-2 py-0.5 rounded">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          {starsDisplay}
        </span>
      </div>

      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
        {tool.description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500 capitalize bg-gray-50 px-2 py-0.5 rounded">
          {categoryLabel}
        </span>
        {tool.tags.length > 0 && (
          <div className="flex gap-1">
            {tool.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-xs text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
