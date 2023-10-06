import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <div
    className={cn(
      '2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto px-3',
      className
    )}
  >
    {children}
  </div>
)

export default Container
