// Database configuration and overridable table names
export const dbConfig = {
  user: 'vastoffice',
  password: 'snowdrift',
  database: 'VastOffice',
  server: 'localhost',
  options: {
    trustServerCertificate: true
  }
};

export const tableNames = {
  estimateHeader: 'EstmteHdr',
  lineItem: 'LineItem',
  mechanic: 'MECHANIC'
};
