const svgUrlToFile = async (url: string): Promise<File> => {
  const response = await fetch(url);
  const blob = await response.blob();
  
  const fileName = url.split('/').pop() || 'security-image.svg';

  const file = new File([blob], fileName, { type: 'image/svg+xml' });
  
  return file;
};

export { svgUrlToFile };
