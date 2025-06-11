export interface WorkOrder {
  EstimateId: string;
  Vehicle: string;
  ServiceWriter: string;
  Date: string;
}

export interface QuadrantData {
  status: 'GREEN' | 'YELLOW' | 'RED' | 'NA';
  note?: string;
  photoUri?: string;
}

export interface InspectionPart {
  quadrant: string;
  status: 'GREEN' | 'YELLOW' | 'RED' | 'NA';
  note?: string;
  photoUrl?: string;
}
