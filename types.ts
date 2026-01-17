
// Fix: Import React to provide access to React namespace and ReactNode type
import React from 'react';

export interface PillarProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PartnerProps {
  name: string;
  logoUrl: string;
}
