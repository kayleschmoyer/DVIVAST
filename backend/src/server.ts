import app from './app';
import { log, LogLevel } from './utils/logger';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  log(LogLevel.INFO, `Server listening on port ${PORT}`);
});
