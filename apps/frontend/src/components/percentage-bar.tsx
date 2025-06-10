export interface Segment {
  label: string;
  value: number;
  color?: string;
}

export interface PercentageBarProps {
  segments: Segment[];
  height?: string; // e.g. "h-3", "h-4", defaults to "h-4"
}

export const PercentageBar: React.FC<PercentageBarProps> = ({
  segments,
  height = "h-4",
}) => {
  const total = segments.reduce((sum, seg) => sum + seg.value, 0);

  // Fallback palette if no color provided
  const defaultColors = [
    "#60a5fa", // blue-400
    "#4ade80", // green-400
    "#fcd34d", // yellow-300
    "#f87171", // red-400
    "#a78bfa", // purple-400
  ];

  return (
    <div className='w-full'>
      {/* The bar */}
      <div className={`flex ${height} bg-gray-200 rounded overflow-hidden`}>
        {segments.map((seg, idx) => {
          const percent = total > 0 ? (seg.value / total) * 100 : 0;
          const bgColor =
            seg.color ?? defaultColors[idx % defaultColors.length];
          return (
            <div
              key={seg.label}
              className='h-full'
              style={{
                width: `${percent}%`,
                backgroundColor: bgColor,
              }}
              aria-label={`${seg.label}: ${Math.round(percent)}%`}
              title={`${seg.label}: ${Math.round(percent)}%`}
            />
          );
        })}
      </div>

      {/* The labels */}
      <div className='flex mt-2 text-sm text-gray-700'>
        {segments.map((seg) => {
          const percent = total > 0 ? (seg.value / total) * 100 : 0;
          return (
            <div
              key={seg.label}
              className='text-center truncate'
              style={{ width: `${percent}%` }}
            >
              {seg.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
