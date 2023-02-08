import { colors } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, value]) => (
    <div key={key} style={{ backgroundColor: value, padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: getContrast(value, '#FFF') < 3.5 ? '#333' : '#FFF',
        }}
      >
        <strong>{key}</strong>
        <span>{value}</span>
      </div>
    </div>
  ))
}
