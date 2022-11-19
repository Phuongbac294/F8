
export const TYPE__LOG = 'log';
export const TYPE__WARN = 'warn';
export const TYPE__ERROR = 'error';

function logger(log, type = 'log') {
    console[type](log);
}

export default logger;