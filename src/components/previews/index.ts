import type { ComponentType } from 'react';
import type { ProjectId } from '../../types/portfolio';
import { BankMarketingPreview } from './BankMarketingPreview';
import { ImageProcessingPreview } from './ImageProcessingPreview';
import { MoodleBotPreview } from './MoodleBotPreview';
import { SateSoloPreview } from './SateSoloPreview';
import { SmartRackPreview } from './SmartRackPreview';

export const PROJECT_PREVIEWS: Record<ProjectId, ComponentType> = {
  'smart-rack-warehouse': SmartRackPreview,
  'sate-solo-landing-page': SateSoloPreview,
  'digital-image-processing': ImageProcessingPreview,
  'moodle-attendance-bot': MoodleBotPreview,
  'bank-marketing-crisp-dm': BankMarketingPreview,
};
