import { Camera, Sliders } from 'lucide-react';

const OPERATIONS = [
  'Histogram Eq',
  'Thresholding',
  'Edge Detect',
  'Sharpening',
  'Gaussian Blur',
  'Median Blur',
  'Bilateral Blur',
  'Sketch',
  'Grayscale',
  'Negative',
  'Mirroring',
] as const;

const HISTOGRAM_BARS = [35, 60, 85, 45, 95, 70, 50, 80] as const;

export function ImageProcessingPreview() {
  return (
    <div className="h-full flex flex-col justify-between p-4 sm:p-5 bg-telemetry-grid">
      <div className="flex items-center justify-between border-b border-line pb-2.5">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-volt" />
          <span className="font-mono text-xs font-semibold text-white">
            13-OPERATION DIGITAL IMAGE PROCESSING LAB
          </span>
        </div>
        <span className="inline-flex items-center gap-1 font-mono text-[10px] text-ink bg-volt px-2 py-0.5 rounded font-semibold">
          <Camera className="w-3 h-3" />
          LIVE WEBCAM + SNAPSHOT
        </span>
      </div>

      <div className="grid grid-cols-12 gap-2.5 my-3">
        <div className="col-span-7 rounded-lg bg-canvas border border-line p-2.5 flex flex-col justify-between">
          <div className="flex justify-between text-[9px] font-mono text-muted mb-1.5">
            <span>ACTIVE KERNEL PIPELINE</span>
            <span className="text-volt">2D CONVOLUTION</span>
          </div>
          <div className="flex flex-wrap gap-1 font-mono text-[9px]">
            {OPERATIONS.map((operation) => (
              <span
                key={operation}
                className="px-1.5 py-0.5 rounded bg-surface border border-line text-white"
              >
                {operation}
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-5 rounded-lg bg-canvas border border-line p-2.5 flex flex-col justify-between font-mono">
          <span className="text-[9px] text-muted">HISTOGRAM EQUALIZATION</span>
          <div className="flex items-end gap-1 h-12 pt-1">
            {HISTOGRAM_BARS.map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-volt/80 rounded-t"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <span className="text-[9px] text-emerald-400">
            HTML5 Canvas Real-Time
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-muted pt-1 border-t border-line">
        <span>13 Spatial, Frequency &amp; Histogram Transforms</span>
        <span className="text-white">WebRTC Stream Ready</span>
      </div>
    </div>
  );
}
