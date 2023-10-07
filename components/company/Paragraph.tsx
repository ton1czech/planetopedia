interface ParagraphProps {
  text: string
  opacityForBlock: (sectionProgress: number, blockNo: number) => 1 | 0.2
  progress: number
  pageNum: number
}

const Paragraph = ({
  text,
  opacityForBlock,
  progress,
  pageNum,
}: ParagraphProps) => {
  return (
    <>
      <p
        className='text-xl transition duration-500 md:text-2xl lg:text-3xl xl:text-4xl'
        style={{ opacity: opacityForBlock(progress, pageNum) }}
      >
        {text}
      </p>
    </>
  )
}

export default Paragraph
