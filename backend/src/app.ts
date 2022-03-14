import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import logger from 'jet-logger';
import StatusCodes from 'http-status-codes';
import router from './routes';
import cors from 'cors';

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Security (helmet recommended in express docs)
if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
}

app.use('/', router);

// catch 404 and forward to error handler
// app.use((req, res, next) => {
//     next(createError(StatusCodes.BAD_REQUEST));
// });

app.use((err: Error, req, res, next) => {
    logger.err(err, true);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: err.message,
    });
});

export default app;
