class StreakService {
  static calculateStreaks(completedDates) {
    if (!completedDates || completedDates.length === 0) {
      return { currentStreak: 0, longestStreak: 0 };
    }

    const uniqueDates = [...new Set(completedDates)].sort();

    let longestStreak = 1;
    let currentRun = 1;

    for (let i = 1; i < uniqueDates.length; i++) {
      const prev = new Date(uniqueDates[i - 1]);
      const curr = new Date(uniqueDates[i]);

      const diffDays = Math.round((curr - prev) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        currentRun++;
        longestStreak = Math.max(longestStreak, currentRun);
      } else {
        currentRun = 1;
      }
    }

    let currentStreak = 1;

    for (let i = uniqueDates.length - 1; i > 0; i--) {
      const curr = new Date(uniqueDates[i]);
      const prev = new Date(uniqueDates[i - 1]);

      const diffDays = Math.round((curr - prev) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        currentStreak++;
      } else {
        break;
      }
    }

    return { currentStreak, longestStreak };
  }
}

module.exports = StreakService;