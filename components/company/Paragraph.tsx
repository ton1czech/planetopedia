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
        className='md:text-lg'
        // style={{ opacity: opacityForBlock(progress, pageNum) }}
      >
        {text}
      </p>
    </>
  )
}

export default Paragraph
