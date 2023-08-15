import * as React from 'react'

type ControllInit = {
  controlled?: any
  defaultValue?: any
}

// TODO: Replace "any" type with a generic.
const useControlled = ({ controlled, defaultValue }: ControllInit) => {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const { current: isControlled } = React.useRef(controlled !== undefined)
  const [valueState, setValue] = React.useState(defaultValue)
  const value = isControlled ? controlled : valueState

  const setValueIfUncontrolled = React.useCallback((newValue: any) => {
    if (!isControlled) {
      setValue(newValue)
    }
  }, [])

  return [value, setValueIfUncontrolled]
}

export default useControlled
