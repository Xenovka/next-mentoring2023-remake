import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='text-center w-full h-full'>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h2 className='text-2xl font-bold'>Could not find gallery</h2>
                <div className="my-10">
                    <Link
                        href="/gallery"
                        className="pt-10 flex w-full mx-auto hover:translate-y-[-5px] transition-transform duration-300"
                    >
                        <Image
                            src="/assets/buttons/btn-default-blue.svg"
                            className="absolute bottom-1/5 left-1/2 -translate-y-1/2 -translate-x-1/2 "
                            alt="Image"
                            width={300}
                            height={300}
                        />
                        <h2 className="text-white absolute bottom-1/5 left-1/2 -translate-y-1/2 -translate-x-1/2 text-lg sm:text-2xl whitespace-nowrap">
                            Return to Gallery
                        </h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}
