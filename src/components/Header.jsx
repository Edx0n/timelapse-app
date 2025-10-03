import { Clock } from 'lucide-react'

const Header = () => {
  return (
    <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              Timelapse
            </h1>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Real-time world clock
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

