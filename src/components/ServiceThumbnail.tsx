import type { ComponentType } from 'react';
import { Code2, Cpu, LineChart } from 'lucide-react';
import type { ServiceId } from '../types/portfolio';

function FullStackThumbnail() {
  return (
    <div className="w-full sm:w-40 h-28 rounded-lg bg-canvas border border-line p-2.5 flex flex-col justify-between shrink-0 overflow-hidden">
      <div className="flex items-center justify-between text-[9px] font-mono text-muted">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-volt" />
          NEXT.JS / TS
        </span>
        <span>HTTP 200</span>
      </div>
      <div className="my-auto space-y-1.5">
        <div className="h-2 w-3/4 rounded bg-volt/80" />
        <div className="grid grid-cols-3 gap-1">
          <div className="h-7 rounded bg-surface border border-line flex items-center justify-center text-[8px] font-mono text-white">
            UI
          </div>
          <div className="h-7 rounded bg-surface border border-line flex items-center justify-center text-[8px] font-mono text-volt">
            DB
          </div>
          <div className="h-7 rounded bg-surface border border-line flex items-center justify-center text-[8px] font-mono text-emerald-400">
            API
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-[9px] font-mono text-muted">
        <span>Full-Stack</span>
        <Code2 className="w-3.5 h-3.5 text-volt" />
      </div>
    </div>
  );
}

function IotAutomationThumbnail() {
  return (
    <div className="w-full sm:w-40 h-28 rounded-lg bg-canvas border border-line p-2.5 flex flex-col justify-between shrink-0 overflow-hidden">
      <div className="flex items-center justify-between text-[9px] font-mono text-emerald-400">
        <span>ESP32 // MQTT</span>
        <span>24/7</span>
      </div>
      <div className="my-auto grid grid-cols-3 gap-1.5 items-end pt-1">
        <div className="bg-surface border border-line rounded p-1 text-center">
          <div className="text-[8px] font-mono text-muted">US-1..6</div>
          <div className="text-[10px] font-mono font-bold text-volt">58cm</div>
        </div>
        <div className="bg-surface border border-line rounded p-1 text-center">
          <div className="text-[8px] font-mono text-muted">DHT11</div>
          <div className="text-[10px] font-mono font-bold text-emerald-400">
            27°C
          </div>
        </div>
        <div className="bg-surface border border-line rounded p-1 text-center">
          <div className="text-[8px] font-mono text-muted">VPS</div>
          <div className="text-[10px] font-mono font-bold text-sky-400">WAL</div>
        </div>
      </div>
      <div className="flex items-center justify-between text-[9px] font-mono text-muted">
        <span>ndgl.cloud</span>
        <Cpu className="w-3.5 h-3.5 text-emerald-400" />
      </div>
    </div>
  );
}

function DataMlThumbnail() {
  return (
    <div className="w-full sm:w-40 h-28 rounded-lg bg-canvas border border-line p-2.5 flex flex-col justify-between shrink-0 overflow-hidden">
      <div className="flex items-center justify-between text-[9px] font-mono text-sky-400">
        <span>CRISP-DM</span>
        <span>ML</span>
      </div>
      <div className="my-auto flex items-end gap-1.5 h-10 px-1">
        <div className="w-1/5 bg-line h-4 rounded-t" />
        <div className="w-1/5 bg-sky-400/60 h-6 rounded-t" />
        <div className="w-1/5 bg-volt h-9 rounded-t" />
        <div className="w-1/5 bg-emerald-400/80 h-7 rounded-t" />
        <div className="w-1/5 bg-sky-400 h-10 rounded-t" />
      </div>
      <div className="flex items-center justify-between text-[9px] font-mono text-muted">
        <span>Scikit-Learn</span>
        <LineChart className="w-3.5 h-3.5 text-sky-400" />
      </div>
    </div>
  );
}

const THUMBNAILS: Record<ServiceId, ComponentType> = {
  'fullstack-web': FullStackThumbnail,
  'iot-automation': IotAutomationThumbnail,
  'data-ml': DataMlThumbnail,
};

export function ServiceThumbnail({ serviceId }: { serviceId: ServiceId }) {
  const Thumbnail = THUMBNAILS[serviceId];
  return <Thumbnail />;
}
