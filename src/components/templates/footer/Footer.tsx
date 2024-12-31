'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { Container } from '@src/components/shared/container';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t-color mt-10 border-t border-gray200">
      <Container className="py-8">
        <h2 className="h4 mb-4">{t('footer.aboutUs')}</h2>
        <div className="max-w-4xl">
          {t(
            'Explore comprehensive resources on trade finance, factoring, and invoice financing at TradeFinance360. Get expert advice, industry trends, and actionable insights for businesses seeking financing solutions, cash flow management, and risk mitigation in global trade.',
          )}
        </div>
        <div className="mt-8">
          {t('footer.powerBy')}{' '}
          <Link
            href="https://www.tradefinance360.com"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue500"
          >
            TradeFinance360
          </Link>
        </div>
      </Container>
    </footer>
  );
};
