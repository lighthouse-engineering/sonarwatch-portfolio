import { Platform } from '@sonarwatch/portfolio-core';
import { Fetcher } from '../../Fetcher';
import { Job } from '../../Job';
import { platform } from './constants';
import marketsJob from './poolsJob';

export const platforms: Platform[] = [platform];
export const jobs: Job[] = [marketsJob];
export const fetchers: Fetcher[] = [];
