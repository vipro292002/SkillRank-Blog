import TableContent from "@/components/Post/TableContent";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";

export const ContentPostArticle = ({ category, title, children, heading }: any) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative py-16 bg-gray-50 dark:bg-dark-100 overflow-hidden">
      <motion.div className="progress-scroll" style={{ scaleX }} />
      <div className="relative    sm:px-6 lg:px-8 grid grid-cols-4  max-w-screen-lg mx-auto gap-4  ">
        <div className="col-span-4 lg:col-span-3 ">
          <p className='block text-center text-base font-semibold uppercase tracking-wide text-indigo-600'>
            {category.name}
          </p>
          <h1 className='mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
            {title}
          </h1>
          <article className=' prose-md  prose dark:prose-invert  py-24 lg:prose-lg !max-w-full 
            prose-code:bg-gray-100 dark:prose-code:bg-dark-300 prose-code:p-1 prose-code:text-primary-100
          '>
            {children}
          </article>
          {/* <article className='  prose-md     py-24 lg:prose-lg !max-w-full 
          prose-headings:text-primary-100
            prose-a:text-primary-100 hover:prose-a:underline
            prose-blockquote:text-primary-100 '>
            {children}
          </article> */}


        </div>

        <div className={` hidden lg:block  md:col-span-1`}>
          <TableContent heading={heading} />
        </div>

      </div>

    </div>
  );
};