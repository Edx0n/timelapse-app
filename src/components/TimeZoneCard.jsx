import { Star, MapPin, Clock } from 'lucide-react'
import { useTimeStore } from '../store/timeStore'
import { Card } from './ui/Card'
import { Button } from './ui/Button'

const TimeZoneCard = ({ timezone }) => {
  const { toggleFavorite } = useTimeStore()

  const handleFavoriteClick = () => {
    toggleFavorite(timezone.id)
  }

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold text-gray-800 dark:text-white">
              {timezone.city}
            </h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleFavoriteClick}
            className="h-8 w-8"
          >
            <Star
              className={`w-4 h-4 ${
                timezone.isFavorite
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-400'
              }`}
            />
          </Button>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {timezone.country}
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-3 mb-3">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <p className="text-2xl font-bold text-gray-800 dark:text-white tabular-nums">
              {timezone.time}
            </p>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            {timezone.date}
          </p>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500 dark:text-gray-400">
            {timezone.region}
          </span>
          <span className="font-mono text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
            UTC{timezone.offset}
          </span>
        </div>
      </div>
    </Card>
  )
}

export default TimeZoneCard

