import * as React from 'react'
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'

/**
 * https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
 *
 * Modified `useCallback` that can be used when dependencies change too frequently. Can occur when:
 * e.g. user props are depedencies which could change on every render
 * e.g. volatile values (i.e. useState/useDispatch) are dependencies which could change frequently
 *
 * This should not be used often, but can be a useful re-render optimization since the callback is
 * a ref and will not be invalidated between rerenders.
 *
 * @param {Function} fn The callback function that will be used
 */
export default function useEventCallback(fn) {
  const callbackRef = React.useRef(() => {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error('Cannot call an event handler while rendering...')
    }
  })

  useIsomorphicLayoutEffect(() => {
    callbackRef.current = fn
  }, [fn])

  return React.useCallback(
    (...args) => {
      const callback = callbackRef.current

      return callback(...args)
    },
    [callbackRef],
  )
}
