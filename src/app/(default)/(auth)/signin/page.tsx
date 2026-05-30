import { redirect } from 'next/navigation';

import { isGatewayConfigured } from '@/shared/api';
import SignInTemplate from '@/features/auth/components/SignInTemplate';
import { AUTH_DEFAULT_NEXT_PATH, DEFAULT_LOCALE, normalizeRedirectPath } from '@/shared/config';
import { buildStartFrontendSignInUrl, isExternalStartFrontend } from '@/shared/lib';
import type { SearchRouteProps } from '@/app/route-factories';

async function SignInPage({ searchParams }: SearchRouteProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const nextParam = resolvedSearchParams?.next;
  const nextPath = normalizeRedirectPath(Array.isArray(nextParam) ? nextParam[0] : nextParam);
  const authConfigured = isGatewayConfigured();
  const resolvedNextPath = nextPath || AUTH_DEFAULT_NEXT_PATH;

  if (isExternalStartFrontend()) redirect(buildStartFrontendSignInUrl(resolvedNextPath));

  return (
    <SignInTemplate
      title="로그인"
      desc="로그인합니다."
      dividerText="또는"
      locale={DEFAULT_LOCALE}
      authConfigured={authConfigured}
      nextPath={resolvedNextPath}
    />
  );
}

export default SignInPage;
