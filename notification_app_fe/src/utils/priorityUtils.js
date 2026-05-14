const weights = {
  Placement: 3,
  Result: 2,
  Event: 1
};
export function getTopNotifications(
  notifications,
  topN = 10
) {
  return [...notifications]
    .sort((a, b) => {
      if (
        weights[b.type] !== weights[a.type]
      ) {
        return (
          weights[b.type] -
          weights[a.type]
        );
      }
      return (
        new Date(b.timestamp) -
        new Date(a.timestamp)
      );
    })
    .slice(0, topN);
}