import { Database, Terminal } from 'lucide-react';

export function MoodleBotPreview() {
  return (
    <div className="h-full flex flex-col justify-between p-4 sm:p-5 bg-telemetry-grid">
      <div className="flex items-center justify-between border-b border-line pb-2.5">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-volt" />
          <span className="font-mono text-xs font-semibold text-white">
            SYSTEMD // MOODLE ATTENDANCE TELEGRAM BOT
          </span>
        </div>
        <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
          ACTIVE (RUNNING) 24/7
        </span>
      </div>

      <div className="my-2.5 rounded-lg bg-canvas border border-line p-3 font-mono text-[10px] space-y-1.5">
        <div className="text-emerald-400">
          $ systemctl status moodle-attendance-bot.service
        </div>
        <div className="text-muted">
          ● moodle-bot.service — Ubuntu VPS 24/7 Async LMS Worker
        </div>
        <div className="text-white">
          [WORKER] Polling Moodle LMS schedule &amp; CSRF token...{' '}
          <span className="text-volt">ATTENDANCE SUBMITTED</span>
        </div>
        <div className="text-muted flex items-center justify-between pt-1 border-t border-line/70">
          <span>DB: SQLite (WAL Mode)</span>
          <span className="text-sky-400">Vault: Fernet AES-128</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-muted pt-1 border-t border-line">
        <span className="flex items-center gap-1">
          <Database className="w-3.5 h-3.5 text-volt" />
          python-telegram-bot + Asyncio
        </span>
        <span className="text-white">Ubuntu Cloud VPS</span>
      </div>
    </div>
  );
}
