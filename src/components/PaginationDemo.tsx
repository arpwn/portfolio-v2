import * as React from "react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination"

type Props = {
  totalPages?: number
  initialPage?: number
  onChange?: (page: number) => void
  maxVisible?: number
}

export default function PaginationDemo({
  totalPages = 10,
  initialPage = 1,
  onChange,
  maxVisible = 3,
}: Props) {
  const [page, setPage] = React.useState(initialPage)

  const go = (p: number) => {
    const next = Math.max(1, Math.min(totalPages, p))
    setPage(next)
    onChange?.(next)
  }

  const makeRange = () => {
    // siempre incluye la página actual
    let start = Math.max(1, page - Math.floor(maxVisible / 2))
    let end = start + maxVisible - 1

    if (end > totalPages) {
      end = totalPages
      start = Math.max(1, end - maxVisible + 1)
    }

    const pages = []
    for (let i = start; i <= end; i++) pages.push(i)
    return pages
  }

  const range = makeRange()

  return (
    <div className="m-12">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault()
                go(page - 1)
              }}
            />
          </PaginationItem>

          {range[0] > 1 && (
            <>
              <PaginationItem>
                <PaginationLink href="#" onClick={(e) => { e.preventDefault(); go(1) }}>
                  1
                </PaginationLink>
              </PaginationItem>
              {range[0] > 2 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
            </>
          )}

          {range.map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={p === page}
                onClick={(e) => {
                  e.preventDefault()
                  go(p)
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}

          {range[range.length - 1] < totalPages && (
            <>
              {range[range.length - 1] < totalPages - 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationLink href="#" onClick={(e) => { e.preventDefault(); go(totalPages) }}>
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </>
          )}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault()
                go(page + 1)
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <div className="mt-4 text-sm text-muted-foreground">
        Página actual: <span className="font-medium text-foreground">{page}</span> / {totalPages}
      </div>
    </div>
  )
}
