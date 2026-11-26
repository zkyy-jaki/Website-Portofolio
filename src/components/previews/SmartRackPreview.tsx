import { Cpu, Radio } from 'lucide-react';

const RACK_ROWS = [
  {
    row: 'ROW-A',
    us1: '12 cm',
    us2: '14 cm',
    fill: '82%',
    led: 'bg-emerald-400',
    status: 'OPTIMAL',
  },
  {
    row: 'ROW-B',
    us1: '29 cm',
    us2: '31 cm',
    fill: '54%',
    led: 'bg-volt',
    status: 'MEDIUM',
  },
  {
    row: 'ROW-C',
    us1: '52 cm',
    us2: '55 cm',
    fill: '18%',
    led: 'bg-red-500',
    status: 'LOW STOCK',
  },
] as const;

const TELEMETRY_READOUTS = [
  { label: 'DHT11', value: '27.4°C / 62%', tone: 'text-white' },
  { label: 'MQ2 GAS', value: '142 PPM (SAFE)', tone: 'text-emerald-400' },
  { label: 'WIFI PORTAL', value: 'CAPTIVE DNS', tone: 'text-volt' },
  { label: 'BACKEND', value: 'Prisma + SQLite', tone: 'text-white' },
] as const;

export function SmartRackPreview() {
  return (
    <div className="h-full flex flex-col justify-between p-4 sm:p-5 bg-telemetry-grid">
      <div className="flex items-center justify-between border-b border-line pb-2.5">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-volt" />
          <span className="font-mono text-xs font-semibold text-white">
            ESP32 // SMART RACK TELEMETRY
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-mono text-[10px]">
          <Radio className="w-3 h-3 animate-pulse" />
          MQTT → ndgl.cloud
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2.5 my-3">
        {RACK_ROWS.map((tier) => (
          <div
            key={tier.row}
            className="rounded-lg bg-canvas/90 border border-line p-2.5 space-y-1.5"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-white font-semibold">
                {tier.row}
              </span>
              <span
                className={`w-2 h-2 rounded-full ${tier.led}`}
                title={`RGB LED: ${tier.status}`}
              />
            </div>
            <div className="w-full bg-surface h-2 rounded-full overflow-hidden">
              <div
                className="bg-volt h-full rounded-full"
                style={{ width: tier.fill }}
              />
            </div>
            <div className="flex justify-between font-mono text-[9px] text-muted">
              <span>{tier.us1}</span>
              <span>{tier.us2}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-2 pt-2 border-t border-line font-mono text-[10px]">
        {TELEMETRY_READOUTS.map((item) => (
          <div
            key={item.label}
            className="bg-canvas border border-line rounded px-2 py-1.5"
          >
            <span className="text-muted block text-[9px]">{item.label}</span>
            <span className={`${item.tone} font-semibold`}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
