import { BarChart3 } from 'lucide-react';

const CRISP_DM_PHASES = [
  '1.Business',
  '2.Data Und',
  '3.Data Prep',
  '4.Modeling',
  '5.Eval',
  '6.Deploy',
] as const;

const ML_SUMMARY_CARDS = [
  { label: 'TARGET', value: 'Term Deposit (y/n)', tone: 'text-white' },
  { label: 'ENGINE', value: 'Pandas + Sklearn', tone: 'text-volt' },
  { label: 'VALIDATION', value: 'ROC-AUC & F1', tone: 'text-emerald-400' },
] as const;

export function BankMarketingPreview() {
  return (
    <div className="h-full flex flex-col justify-between p-4 sm:p-5 bg-telemetry-grid">
      <div className="flex items-center justify-between border-b border-line pb-2.5">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-volt" />
          <span className="font-mono text-xs font-semibold text-white">
            CRISP-DM // BANK MARKETING PREDICTIVE ML
          </span>
        </div>
        <span className="font-mono text-[10px] text-sky-400 bg-sky-500/10 border border-sky-500/30 px-2 py-0.5 rounded">
          SCIKIT-LEARN PIPELINE
        </span>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 my-3 font-mono text-[9px]">
        {CRISP_DM_PHASES.map((phase, index) => (
          <div
            key={phase}
            className={`rounded p-1.5 text-center border ${
              index >= 3
                ? 'bg-volt/15 border-volt text-volt font-semibold'
                : 'bg-canvas border-line text-white'
            }`}
          >
            {phase}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 font-mono text-[10px]">
        {ML_SUMMARY_CARDS.map((card) => (
          <div key={card.label} className="rounded bg-canvas border border-line p-2">
            <span className="text-[9px] text-muted block">{card.label}</span>
            <span className={`${card.tone} font-semibold`}>{card.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
