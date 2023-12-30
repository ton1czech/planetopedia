interface ReviewProps {
  body: string
  by: string
}

const Review = ({ body, by }: ReviewProps) => (
  <div className='flex flex-col justify-center px-5 text-center md:px-10 lg:px-20'>
    <p className='md:text-lg tracking-tight lg:text-xl'>&ldquo;{body}&rdquo;</p>
    <p className='mt-6 text-sm md:text-base'>&mdash; {by}</p>
  </div>
)

export default Review
