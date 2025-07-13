// app/parallax-demo/page.tsx

import Parallax from "./Profile";


export default function ParallaxDemo() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero section with parallax background */}
      <div className="relative h-screen overflow-hidden">
        <Parallax speed={0.5} className="absolute inset-0 z-0">
          <div className="bg-blue-500 w-full h-full opacity-20"></div>
        </Parallax>
        
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Parallax speed={0.2}>
            <h1 className="text-6xl font-bold text-white">Parallax Effect</h1>
          </Parallax>
        </div>
      </div>

      {/* Content sections with different parallax speeds */}
      <section className="min-h-screen bg-white p-8 flex flex-col items-center justify-center">
        <Parallax speed={0.3} className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Section 1</h2>
        </Parallax>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Parallax speed={0.1}>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-64">
              <h3 className="text-2xl font-semibold mb-4">Item 1</h3>
              <p>This content moves slower than the background.</p>
            </div>
          </Parallax>
          
          <Parallax speed={0.4}>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-64">
              <h3 className="text-2xl font-semibold mb-4">Item 2</h3>
              <p>This content moves faster than the background.</p>
            </div>
          </Parallax>
        </div>
      </section>

      {/* Another section with image parallax */}
      <section className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          <Parallax speed={0.2} className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800">Image Parallax</h2>
          </Parallax>
          
          <div className="flex flex-col md:flex-row gap-8">
            <Parallax speed={0.5} className="md:w-1/2">
              <div className="relative h-96 overflow-hidden rounded-lg">
                {/* Replace with your actual image */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              </div>
            </Parallax>
            
            <Parallax speed={0.1} className="md:w-1/2 flex items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Content beside image</h3>
                <p className="text-gray-700">
                  The image moves faster than this text, creating a nice parallax effect.
                </p>
              </div>
            </Parallax>
          </div>
        </div>
      </section>
    </div>
  );
}