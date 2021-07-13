import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { compose } from 'redux';

import { getInstantVectorStats } from '@console/internal/components/graphs/utils';

import DashboardCard from '@console/shared/src/components/dashboard/dashboard-card/DashboardCard';
import DashboardCardBody from '@console/shared/src/components/dashboard/dashboard-card/DashboardCardBody';
import DashboardCardHeader from '@console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader';
import DashboardCardTitle from '@console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle';
import DetailItem from '@console/shared/src/components/dashboard/details-card/DetailItem';
import DetailsBody from '@console/shared/src/components/dashboard/details-card/DetailsBody';
import { usePrometheusQueries } from '@console/shared/src/components/dashboard/utilization-card/prometheus-hook';

import { BlockPoolDashboardContext } from './block-pool-dashboard-context';
import { getPoolQuery, StorageDashboardQuery } from '../../../queries/ceph-queries';

const parser = compose((val) => val?.[0]?.y, getInstantVectorStats);

export const CompressionDetailsCard: React.FC = () => {
  const { t } = useTranslation();
  const { obj } = React.useContext(BlockPoolDashboardContext);
  const { compressionMode } = obj.spec;
  const compressionEnabled = compressionMode !== 'none';
  const { name } = obj.metadata;

  // Metrics
  const queries = React.useMemo(
    () => [
      getPoolQuery([name], StorageDashboardQuery.POOL_COMPRESSION_SAVINGS),
      getPoolQuery([name], StorageDashboardQuery.POOL_COMPRESSION_ELIGIBILITY),
      getPoolQuery([name], StorageDashboardQuery.POOL_COMPRESSION_RATIO),
    ],
    [name],
  );

  const [values, loading] = usePrometheusQueries(queries, parser as any);
  const poolCompressionSavings = (values?.[0] ?? 0) as number;
  const poolCompressionEligibility = (values?.[1] ?? 0) as number;
  const poolCompressionRatio = (values?.[2] ?? 0) as number;

  return (
    <DashboardCard data-test-id="compression-details-card">
      <DashboardCardHeader>
        <DashboardCardTitle>{t('ceph-storage-plugin~Compression')}</DashboardCardTitle>
      </DashboardCardHeader>
      <DashboardCardBody>
        <DetailsBody>
          <DetailItem isLoading={!obj} title={t('ceph-storage-plugin~Compression Status')}>
            {!compressionEnabled ? 'Disabled' : obj.spec.compressionMode}
          </DetailItem>
          {compressionEnabled && (
            <>
              <DetailItem
                isLoading={loading}
                title={t('ceph-storage-plugin~Compression Eligibility')}
              >
                {poolCompressionEligibility}
              </DetailItem>
              <DetailItem isLoading={loading} title={t('ceph-storage-plugin~Compression Ratio')}>
                {poolCompressionRatio}
              </DetailItem>
              <DetailItem isLoading={loading} title={t('ceph-storage-plugin~Compression Savings')}>
                {poolCompressionSavings}
              </DetailItem>
            </>
          )}
        </DetailsBody>
      </DashboardCardBody>
    </DashboardCard>
  );
};
