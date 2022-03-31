import logger from 'jet-logger';
import app from './app';

// Constants
const serverStartMsg = 'Express smithoo server started on port: ';
const port = process.env.PORT || 8000;

// Start server
app.listen(port, () => {
    logger.info(serverStartMsg + port);
});
