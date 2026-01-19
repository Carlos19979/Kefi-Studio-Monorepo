export default function Loading() {
  return (
    <div className="content-container flex flex-col small:flex-row small:items-start py-6 relative">
      <div className="block w-full small:w-[60%] relative pr-0 small:pr-8 lg:pr-16">
        <div className="w-full aspect-[29/34] bg-gray-100 animate-pulse" />
      </div>
      <div className="flex flex-col small:sticky small:top-24 w-full small:w-[40%] py-8 gap-y-8">
        <div className="w-3/4 h-8 bg-gray-100 animate-pulse" />
        <div className="w-1/2 h-6 bg-gray-100 animate-pulse" />
        <div className="w-full h-24 bg-gray-100 animate-pulse" />
        <div className="w-full h-12 bg-gray-100 animate-pulse" />
      </div>
    </div>
  )
}
