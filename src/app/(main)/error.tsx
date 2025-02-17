'use client'

import Link from 'next/link';
import Image from 'next/image'

export default function ErrorBoundary() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <div className="flex h-60 justify-center items-center bg-white p-6 rounded-lg shadow-lg">
        <Image
          src="/images/error.png"
          className='mr-6 h-fit'
          width={200}
          height={120}
          alt="Picture of the author"
        />
        <div className="flex-col content-center">
          <h2 className="text-2xl font-bold">Oops! Something went wrong.</h2>
          <div className="mt-4">
            <Link href="/">
              <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-400">
                Try again
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}