export default async function(language: string, file: string) {
  if (language == "") {
    return (await import(`./content/${file}.json`)).default;
  }
  return (await import(`./content/${language}/${file}.json`)).default;
};
