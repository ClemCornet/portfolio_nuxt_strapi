/* eslint-disable */
const SHORTCUTS = [
  { id: 'direction', attr: 'flexDirection' },
  { id: 'align', attr: 'alignItems' },
  { id: 'alignSelf', attr: 'alignSelf' },
  { id: 'justify', attr: 'justifyContent' },
  { id: 'wrap', attr: 'flexWrap' },
  { id: 'height', attr: 'height' },
  { id: 'width', attr: 'width' },
  { id: 'flex', attr: 'flex' },
  { id: 'basis', attr: 'flexBasis' },
  { id: 'shrink', attr: 'flexShrink' },
  { id: 'grow', attr: 'flexGrow' }
]

export const props = {
  component: {
    type: [Object, String],
    default: 'div'
  },
  inline: Boolean
}

SHORTCUTS.forEach((shortcut) => {
  props[shortcut.id] = String
})

export const style = $props => SHORTCUTS.reduce((accu, { id, attr }) => {
  if ($props[id]) accu[attr] = $props[id]
    return accu     
}, $props.style || {})