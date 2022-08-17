import TableContent from "@/components/Post/TableContent";
import Link from "next/link";

export const ResourceArticle = ({ category, title, children, heading }: any) => {
  return (
    // <div className='px-4 py-24'>
    //   <div className='mx-auto max-w-prose'>
    //     <p className='block text-center text-base font-semibold uppercase tracking-wide text-indigo-600'>
    //       {category.name}
    //     </p>
    //     <h1 className='mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
    //       {title}
    //     </h1>
    //     <article className='mx-autotext-gray-500 prose-md prose prose-indigo py-24 lg:prose-lg'>
    //       {children}
    //     </article>
    //   </div>
    // </div>

    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div className="relative    sm:px-6 lg:px-8 grid grid-cols-4  max-w-screen-lg mx-auto gap-4  ">
        <div className="col-span-4 lg:col-span-3 ">
          <p className='block text-center text-base font-semibold uppercase tracking-wide text-indigo-600'>
            {category.name}
          </p>
          <h1 className='mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
            {title}
          </h1>
          <article className='mx-autotext-gray-500 prose-md prose prose-indigo py-24 lg:prose-lg !max-w-full '>
            {children}
          </article>

        </div>

        <div className={` hidden  lg:block  md:col-span-1   `}>
          <TableContent heading={heading} />
        </div>

      </div>

    </div>
  );
};