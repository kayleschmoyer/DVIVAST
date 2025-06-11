import app from './app';
import Logger from './utils/Logger';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  Logger.info(`Server listening on port ${PORT}`);
});
