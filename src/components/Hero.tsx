import Image from 'next/image'
import SearchBar from './SearchBar'
export default function Hero() {
  return (
    <div className="relative h-[calc(70vh-4rem)] w-full">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Beautiful travel destination"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-10 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl md:text-2xl text-white">
            Explore the most beautiful destinations
          </p>
          <SearchBar/>
      </div>
    </div>
  )
}

