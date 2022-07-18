# Cookies

Yum :)

## Setup

1. Fork and clone [this] repository.
2. Install the dependencies using `npm i`.
3. Start the project using `npm start`.

## Cookie List

1. Go to `src/pages/CookieList/index.tsx`.
2. Use `useAppSelector` to get the cookies from the store.
   - You will replace the current `const cookies: Cookie[] = []` with the data received from `useAppSelector`.

## Cookie Add

1. Go to `src/features/cookies/cookieSlice.tsx`.
   - In our reducers we have an `addCookie` key, you will be adding your logic here.
   - Mutate the state and add a new cookie to our cookie array.
2. Go to `src/pages/CookieAdd/index.tsx`.
   - Import our `addCookie` action and our `useAppDispatch` hook.
   - Set `dispatch` equal to the return from our `useAppDispatch` hook.
   - Add an `onSubmit` function that will take `data` that is of type `Cookie` (imported from our models) and return nothing.
     - In our submit handler we will dispatch our `addCookie` action and pass it the data received from the form.
   - Pass our `onSubmit` handler to the `CookieForm` component.

## Cookie Remove

1. Go to `src/features/cookies/cookieSlice.tsx`.
   - In our reducers we have an `removeCookie` key, you will be adding your logic here.
   - Mutate the state and remove the cookie from our cookie array that matches the `id` in the payload.
2. Go to `src/pages/CookieShow/index.tsx`
   - Import our `removeCookie` action and our `useAppDispatch` hook.
   - Set `dispatch` equal to the return from our `useAppDispatch` hook.
   - Dispatch our `removeCookie` action and pass it `cookie.id` inside of our `handleDelete`
