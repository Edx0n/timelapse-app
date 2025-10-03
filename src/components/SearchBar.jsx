import { Search, X } from 'lucide-react'
import { useTimeStore } from '../store/timeStore'
import { Input } from './ui/Input'
import { Button } from './ui/Button'

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useTimeStore()

  const handleClear = () => {
    setSearchQuery('')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Search by country, city, or region..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClear}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  )
}

export default SearchBar

