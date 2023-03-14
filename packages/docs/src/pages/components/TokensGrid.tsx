import '../styles/tokens-grid.css'

export interface TokensGridProps {
  tokens: Record<string, string>
  hasPixelValue: boolean
  hasSpaceView: boolean
}

export function TokensGrid({
  hasPixelValue,
  hasSpaceView,
  tokens,
}: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Size</th>
          {hasPixelValue && <th>Pixels</th>}
          {hasSpaceView && <th></th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasPixelValue && (
                <td>{Number(value.replace('rem', '')) * 16}px</td>
              )}
              {hasSpaceView && (
                <td>
                  <div className="tokens-size" style={{ width: value }} />
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
