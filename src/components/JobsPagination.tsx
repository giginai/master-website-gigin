
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

interface JobsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const JobsPagination = ({ currentPage, totalPages, onPageChange }: JobsPaginationProps) => {
  const getPaginationItems = () => {
    const items = [];
    const delta = 2;
    
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        items.push(i);
      } else if (
        (i === currentPage - delta - 1 && currentPage - delta - 1 > 1) ||
        (i === currentPage + delta + 1 && currentPage + delta + 1 < totalPages)
      ) {
        if (items[items.length - 1] !== 'ellipsis') {
          items.push('ellipsis');
        }
      }
    }
    
    return items;
  };

  if (totalPages <= 1) return null;

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            className={currentPage <= 1 ? 'pointer-events-none opacity-50 cursor-default' : 'cursor-pointer'}
          />
        </PaginationItem>
        
        {getPaginationItems().map((item, index) => {
          if (item === 'ellipsis') {
            return (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }
          
          return (
            <PaginationItem key={item}>
              <PaginationLink
                onClick={() => onPageChange(item as number)}
                isActive={currentPage === item}
                className="cursor-pointer"
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        
        <PaginationItem>
          <PaginationNext 
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            className={currentPage >= totalPages ? 'pointer-events-none opacity-50 cursor-default' : 'cursor-pointer'}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default JobsPagination;
