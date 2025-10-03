import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { formatInTimeZone } from 'date-fns-tz'
import { TIMEZONES } from '../constants/timezones'

export const useTimeStore = create(
  persist(
    (set) => ({
      timezones: TIMEZONES,
      currentTime: new Date(),
      searchQuery: '',
      favoriteIds: [],

      updateCurrentTime: () => {
        set({ currentTime: new Date() })
      },

      setSearchQuery: (query) => {
        set({ searchQuery: query })
      },

      toggleFavorite: (id) => {
        set((state) => ({
          favoriteIds: state.favoriteIds.includes(id)
            ? state.favoriteIds.filter((favId) => favId !== id)
            : [...state.favoriteIds, id],
        }))
      },
    }),
    {
      name: 'timelapse-storage',
      partialize: (state) => ({
        favoriteIds: state.favoriteIds,
      }),
    }
  )
)

// Selector to get filtered timezones
export const useFilteredTimezones = () => {
  return useTimeStore((state) => {
    const { timezones, searchQuery, currentTime, favoriteIds } = state
    
    let filtered = timezones

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (tz) =>
          tz.country.toLowerCase().includes(query) ||
          tz.city.toLowerCase().includes(query) ||
          tz.timezone.toLowerCase().includes(query) ||
          tz.region.toLowerCase().includes(query)
      )
    }

    return filtered.map((tz) => {
      try {
        const time = formatInTimeZone(
          currentTime,
          tz.timezone,
          'HH:mm:ss'
        )
        const date = formatInTimeZone(
          currentTime,
          tz.timezone,
          'MMM dd, yyyy'
        )
        const offset = formatInTimeZone(
          currentTime,
          tz.timezone,
          'XXX'
        )

        return {
          ...tz,
          time,
          date,
          offset,
          isFavorite: favoriteIds.includes(tz.id),
        }
      } catch (error) {
        console.error(`Error formatting timezone ${tz.timezone}:`, error)
        return {
          ...tz,
          time: '--:--:--',
          date: 'Invalid',
          offset: '+00:00',
          isFavorite: favoriteIds.includes(tz.id),
        }
      }
    })
  })
}

