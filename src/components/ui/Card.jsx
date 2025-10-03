import { cn } from '../../utils/cn'

export const Card = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50',
        className
      )}
      {...props}
    />
  )
}

