import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <div
    className={cn(
      '2xl:max-w-screen-xl lg:max-w-screen-lg mx-auto px-[18px]',
      className
    )}
  >
    {children}
  </div>
)

export default Container
