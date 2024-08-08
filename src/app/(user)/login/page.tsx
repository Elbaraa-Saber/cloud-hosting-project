// More About Routing:
// i wrote this file by this way (user) to told next.js that this file is not route
// and it is just for collecting routes login and register

import LoginForm from "./LoginForm"

// if we want to do privete folder in app and not routes, like css files, we have to add firstly _nameFolder

// if we write folder by this way [...nameFloder] that means 
// if we write in url path any thing after nameFloder/anything
// will open for us url/nameFolder/, and anything will saved in props like opject
// opject will called {nameFolder = {anything, anything}}

// if we have card folder than not have a prge, and into this folder another folder named products and page.tsx
// if we write in url path url/card will show not found page
// but if we want to show products page when we write 'url/card' we have to called products page like this
// [[...products]]

const LoginPage = () => {
  return (
    <section className="fix-height container m-auto px-7 flex items-center justify-center">
      <div className="m-auto bg-white rounded-lg p-5 w-full md:w-2/3">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">Log In</h1>
        <LoginForm/>
      </div>
    </section>
  )
}

export default LoginPage
