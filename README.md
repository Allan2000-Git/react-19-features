# React 19 Features
- useActionState hook: We need create states for loading/pending. This hooks avoids that and simplifies it for us
- useFormStatus: Avoids usage of context api. Gives us pending state of a form without having to pass it as a prop to its child elements because this hook checks nearest parent form.
- useOptimistic
- use(): way of handling data fetching
- Eliminates the use of forwardRef() when we use to take ref as a prop

# React Optimizations
- Reduce DOM size: use react-window (https://react-window.vercel.app/#/examples/list/fixed-size)
- Lazy loading of images: https://codesandbox.io/p/sandbox/lazyloadimage-final-1cdzl?
