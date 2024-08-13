import React from "react"
const page = () => {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-80 h-100md:w-68 md:h-auto md:rounded-none rounded-full mx-auto" src="/ai.jpg" alt="" width="540" height="800" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium bg-pink-200">
              “Artificial Intelligence is not just a tool but a transformative force,
              redefining the boundaries of what machines can achieve and how they interact with the
              human experience As 'AI continues to evolve,it challenges us to reconsider the essence of human creativity and intelligence, questioning what it
              truly means to be sentient and innovative.
              ”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-blue-500 dark:text-blue-400">
              Maham Maqbool
            </div>
            <div className="text-red-700 dark:text-red-500">
              Staff Engineer
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  )
}
export default page