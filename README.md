useState:
--useState is used for managing state within functional components in React.
--It returns a pair: the current state value and a function that lets you update it.
--When the state is updated, React re-renders the component and gives it the new state value.

useRef:

--useRef is primarily used to persist values across renders without causing re-renders.
--It returns a mutable ref object whose .current property is initialized to the passed argument.
--The value of the ref persists between renders and is not affected by them. Changing the current property does not trigger a re-render.