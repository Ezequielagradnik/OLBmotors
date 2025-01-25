import React from "react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  const getVisiblePages = () => {
    if (totalPages <= 5) return pages

    if (currentPage <= 3) return [...pages.slice(0, 4), "...", totalPages]
    if (currentPage >= totalPages - 2) return [1, "...", ...pages.slice(totalPages - 4)]

    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages]
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 text-[#9b8b6f] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      {getVisiblePages().map((page, index) => (
        <button
          key={index}
          onClick={() => (typeof page === "number" ? onPageChange(page) : undefined)}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors
            ${
              typeof page === "number"
                ? currentPage === page
                  ? "bg-[#9b8b6f] text-black"
                  : "text-[#9b8b6f] hover:bg-[#9b8b6f] hover:bg-opacity-20"
                : "text-[#9b8b6f] cursor-default"
            }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 text-[#9b8b6f] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination

