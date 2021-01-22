function superbowlWin(record) {
	const winRecord = record.find(function(r) {
		return r.result === "W";
	});
	if (winRecord) {
		return winRecord.year;
	}
}