const formatDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const boardRouteRegex = /^(\/dashboard)?\/boards\/[a-z0-9]{25}(\/[\w-]+)?$/;

const isBoardRoute = (route: string) => boardRouteRegex.test(route);

export { formatDate, isBoardRoute };
