
REACTNODE

On peut faire passer `children` via le type `ReactNode` qui représente :

```JS
type ReactNode =
        | ReactElement
        | string
        | number
        | Iterable<ReactNode>
        | ReactPortal
        | boolean
        | null
        | undefined
        | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES[
            keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES
        ];
```

