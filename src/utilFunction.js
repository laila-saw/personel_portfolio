export function getDuration(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    const yearsDiff = end.getFullYear() - start.getFullYear();
    const monthsDiff = end.getMonth() - start.getMonth();
  
    let duration = "";
  
    if (yearsDiff > 0) {
      duration += `${yearsDiff} year${yearsDiff > 1 ? 's' : ''}`;
    }
  
    if (monthsDiff > 0) {
      duration += ` ${monthsDiff} month${monthsDiff > 1 ? 's' : ''}`;
    }
  
    return duration.trim();
  }
  