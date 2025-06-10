export interface WorkOrder {
  EstimateId: string;
  Vehicle: string;
  ServiceWriter: string;
  Date: string;
}

export interface InspectionPart {
  quadrant: string;
  status: 'GREEN' | 'YELLOW' | 'RED' | 'NA';
  note?: string;
  photoUrl?: string;
}
