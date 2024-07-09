/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KaYEXsJnLdp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-6 text-center">
              <h2 className="text-2xl font-semibold mb-10 text-neutral-600 tracking-tighter sm:text-2xl md:text-3xl">Passions</h2>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                <div className="space-y-3">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      alt="Travel"
                      className="rounded-lg object-cover w-full"
                      height={200}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">Travel</h3>
                      <p className="text-sm">Explore new destinations and immerse yourself in diverse cultures.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <PlaneIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full flex-1">
                      <div className="h-full bg-primary rounded-full w-[80%]" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      alt="Cooking"
                      className="rounded-lg object-cover w-full"
                      height={200}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">Cooking</h3>
                      <p className="text-sm">Discover new flavors and master the art of culinary creativity.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CookingPotIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full flex-1">
                      <div className="h-full bg-primary rounded-full w-[70%]" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      alt="Music"
                      className="rounded-lg object-cover w-full"
                      height={200}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">Music</h3>
                      <p className="text-sm">Lose yourself in the rhythm and melody of your favorite tunes.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MusicIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full flex-1">
                      <div className="h-full bg-primary rounded-full w-[90%]" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      alt="Reading"
                      className="rounded-lg object-cover w-full"
                      height={200}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">Reading</h3>
                      <p className="text-sm">Immerse yourself in captivating stories and expand your mind.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full flex-1">
                      <div className="h-full bg-primary rounded-full w-[85%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-6 text-center">
              <h2 className="text-2xl font-semibold mb-10 text-neutral-600 tracking-tighter sm:text-2xl md:text-3xl">Hobbies</h2>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                <div className="space-y-3">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      alt="Photography"
                      className="rounded-lg object-cover w-full"
                      height={200}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">Photography</h3>
                      <p className="text-sm">Capture the beauty of the world through the lens.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CameraIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full flex-1">
                      <div className="h-full bg-primary rounded-full w-[75%]" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      alt="Gardening"
                      className="rounded-lg object-cover w-full"
                      height={200}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">Gardening</h3>
                      <p className="text-sm">Nurture your green thumb and create a lush oasis.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FlowerIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full flex-1">
                      <div className="h-full bg-primary rounded-full w-[65%]" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      alt="Painting"
                      className="rounded-lg object-cover w-full"
                      height={200}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">Painting</h3>
                      <p className="text-sm">Express your creativity through the art of painting.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <PaletteIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full flex-1">
                      <div className="h-full bg-primary rounded-full w-[80%]" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      alt="Hiking"
                      className="rounded-lg object-cover w-full"
                      height={200}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">Hiking</h3>
                      <p className="text-sm">Explore the great outdoors and connect with nature.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MountainIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full flex-1">
                      <div className="h-full bg-primary rounded-full w-[60%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  function BookIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    )
  }
  
  
  function CameraIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    )
  }
  
  
  function CookingPotIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12h20" />
        <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
        <path d="m4 8 16-4" />
        <path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" />
      </svg>
    )
  }
  
  
  function FlowerIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
        <path d="M12 7.5V9" />
        <path d="M7.5 12H9" />
        <path d="M16.5 12H15" />
        <path d="M12 16.5V15" />
        <path d="m8 8 1.88 1.88" />
        <path d="M14.12 9.88 16 8" />
        <path d="m8 16 1.88-1.88" />
        <path d="M14.12 14.12 16 16" />
      </svg>
    )
  }
  
  
  function MountainIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    )
  }
  
  
  function MusicIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    )
  }
  
  
  function PaletteIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    )
  }
  
  
  function PlaneIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
      </svg>
    )
  }