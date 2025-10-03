import { useEffect } from 'react'
import { Clock, Search, Globe } from 'lucide-react'
import { useTimeStore } from './store/timeStore'
import TimeZoneCard from './components/TimeZoneCard'
import SearchBar from './components/SearchBar'
import Header from './components/Header'

const App = () => {
  const { filteredTimezones, updateCurrentTime } = useTimeStore()

  useEffect(() => {
    updateCurrentTime()
    const interval = setInterval(() => {
      updateCurrentTime()
    }, 1000)

    return () => clearInterval(interval)
  }, [updateCurrentTime])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              World Clock
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Track time across all countries and timezones in real-time
          </p>
        </div>

        <SearchBar />

        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              {filteredTimezones.length} Timezones
            </h2>
          </div>

          {filteredTimezones.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                No timezones found. Try a different search term.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredTimezones.map((timezone) => (
                <TimeZoneCard key={timezone.id} timezone={timezone} />
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="mt-16 py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>Built with React, Zustand, and ShadCN UI</p>
        </div>
      </footer>
    </div>
  )
}

export default App

