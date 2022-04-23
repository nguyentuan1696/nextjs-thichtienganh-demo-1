const IconClose = ({  width = 21,
  height = 21,
  color = 'currentColor',
  strokeWidth = 1.2,}) =>
{
  return (
    <svg viewBox="0 0 15 15" width={width} height={height}>
      <g stroke={color} strokeWidth={strokeWidth}>
        <path d="M.75.75l13.5 13.5M14.25.75L.75 14.25" />
      </g>
    </svg>
  )
}
export default IconClose