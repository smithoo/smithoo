import logger from 'jet-logger';
import app from './app';

// Constants
const serverStartMsg = 'Express server started on port: ';
const port = process.env.PORT || 2999;

// Start server
app.listen(port, () => {
    logger.info(serverStartMsg + port);
});
