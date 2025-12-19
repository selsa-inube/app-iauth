const addPercentage = (value: number): string => {
  if (typeof value !== 'number' || isNaN(value)) {
    return '0%';
  }
  
  return `${value.toFixed()}%`;
};

export { addPercentage };
