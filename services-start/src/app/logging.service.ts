export class LoggingService {
	logSatusChange(status: string) {
		console.log('A server status changed, new status: ' + status);
	}
}