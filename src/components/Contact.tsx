import { useState, type FormEvent } from 'react';
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  Mail,
  Send,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getPortfolioData } from '../data/portfolio';
import { UI_TRANSLATIONS, type UiTranslations } from '../data/translations';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof ContactFormValues, string>>;

const INITIAL_VALUES: ContactFormValues = {
  name: '',
  email: '',
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContactForm(
  values: ContactFormValues,
  messages: UiTranslations['contact']['errors']
): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = messages.nameRequired;
  }
  if (!values.email.trim()) {
    errors.email = messages.emailRequired;
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = messages.emailInvalid;
  }
  if (!values.message.trim()) {
    errors.message = messages.messageRequired;
  } else if (values.message.trim().length < 10) {
    errors.message = messages.messageMinLength;
  }

  return errors;
}

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  children: JSX.Element;
}

function FormField({ id, label, error, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-mono text-muted mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <p
          role="alert"
          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400 font-mono"
        >
          <AlertCircle className="w-3.5 h-3.5" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}

const INPUT_CLASS =
  'w-full rounded-lg bg-canvas border border-line focus:border-volt px-4 py-3 text-sm text-white placeholder-muted/50 focus:outline-none transition-colors';

export function Contact() {
  const { locale } = useLanguage();
  const { ownerProfile } = getPortfolioData(locale);
  const t = UI_TRANSLATIONS[locale].contact;

  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>(
    'idle'
  );
  const { copied, copy } = useCopyToClipboard(2500);

  const updateField = (field: keyof ContactFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validateContactForm(values, t.errors);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');
    window.setTimeout(() => {
      setStatus('success');
      setValues(INITIAL_VALUES);
      setErrors({});
    }, 250);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[600px] mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs text-volt tracking-wider">
              {t.terminalLabel}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              {t.heading}
            </h2>
            <p className="text-sm md:text-base text-muted">{t.subtitle}</p>

            <div className="pt-2 flex justify-center">
              <button
                type="button"
                onClick={() => copy(ownerProfile.email)}
                aria-label={`${t.copyEmailAriaPrefix} ${ownerProfile.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-line hover:border-volt text-xs font-mono text-muted hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-volt" />
                <span>{ownerProfile.email}</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4 rounded-2xl bg-surface/60 border border-line p-6 sm:p-8 shadow-xl"
          >
            <FormField id="contact-name" label={t.nameLabel} error={errors.name}>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder={t.namePlaceholder}
                value={values.name}
                onChange={(e) => updateField('name', e.target.value)}
                className={INPUT_CLASS}
              />
            </FormField>

            <FormField
              id="contact-email"
              label={t.emailLabel}
              error={errors.email}
            >
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder={t.emailPlaceholder}
                value={values.email}
                onChange={(e) => updateField('email', e.target.value)}
                className={INPUT_CLASS}
              />
            </FormField>

            <FormField
              id="contact-message"
              label={t.messageLabel}
              error={errors.message}
            >
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder={t.messagePlaceholder}
                value={values.message}
                onChange={(e) => updateField('message', e.target.value)}
                className={`${INPUT_CLASS} resize-y`}
              />
            </FormField>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-volt text-ink font-semibold py-3.5 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-volt-glow-sm disabled:opacity-60"
            >
              <Send className="w-4 h-4 text-ink" />
              <span>
                {status === 'submitting' ? t.submittingButton : t.sendButton}
              </span>
            </button>

            {status === 'success' && (
              <div
                role="status"
                className="mt-3 rounded-lg bg-emerald-500/10 border border-emerald-500/40 p-3.5 flex items-center justify-between text-xs font-mono text-emerald-300"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.successMessage}</span>
                </div>
                <a
                  href={`mailto:${ownerProfile.email}`}
                  className="underline text-volt ml-2 shrink-0"
                >
                  {t.openMail}
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
