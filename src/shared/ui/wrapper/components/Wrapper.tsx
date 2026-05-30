import { getMessages } from '@/shared/utils/locale';
import {
  ReduxProvider,
  ThemeProvider,
  ClientProvider,
  TranslationsProvider,
} from '@/shared/providers';
import { DEFAULT_LOCALE } from '@/shared/config';
import { WrapperProps } from '@/shared/ui';

async function Wrapper({ children, modal, params }: WrapperProps) {
  const { lang } = params ? await params : {};
  const resolvedLang = lang ?? DEFAULT_LOCALE;
  const { common: messages } = getMessages(resolvedLang);

  return (
    <ReduxProvider>
      <ThemeProvider>
        <TranslationsProvider messages={messages} lang={resolvedLang}>
          <ClientProvider modal={modal}>{children}</ClientProvider>
        </TranslationsProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default Wrapper;
