interface ParagraphProps {
  text: string
}

const Paragraph = ({ text }: ParagraphProps) => {
  return (
    <>
      <p className='md:text-lg'>{text}</p>
    </>
  )
}

export default Paragraph
