export const useTitleFormatter = (title) =>
{
  title = title.charAt(0).toUpperCase() + title.slice(1)
  return title && title.trim().length
    ? `${title.trim()}`
    : siteTitle
}
