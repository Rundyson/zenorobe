import React from 'react'
import LoadMore from '../partials/LoadMore'
import { Archive, ArchiveRestore, FilePenLine, Trash2 } from 'lucide-react'
import IconServerError from '../partials/IconServerError'
import TableLoader from '../partials/TableLoader'
import IconNoData from '../partials/IconNoData'
import SpinnerTable from '../partials/spinners/SpinnerTable'
import Pills from '../partials/Pills'
import { setIsAdd, setIsArchive, setIsConfirm, setIsDelete, setIsEdit, setIsRestore } from '@/components/store/storeAction'
import ModalDelete from '../partials/modals/ModalDelete'
import ModalConfirm from '../partials/modals/ModalConfirm'
import { StoreContext } from '../../../store/storeContext'
import { allClothes } from '../clothes-data'
import useQueryData from '@/components/custom-hook/useQueryData'
import ModalArchive from '@/components/partials/modal/ModalArchive'
import ModalRestore from '@/components/partials/modal/ModalRestore'
import { useInView } from 'react-intersection-observer'
import SearchBarWithFilterStatus from '@/components/partials/SearchBarWithFilterStatus'
import { FaArchive, FaEdit, FaTrash, FaTrashRestore } from 'react-icons/fa'
import { useInfiniteQuery } from '@tanstack/react-query'
import { queryDataInfinite } from '@/components/helpers/queryDataInfinite'


const ClothesTable = ({setClothesEdit}) => {
  const {store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
    const [isFilter, setIsFilter] = React.useState(false);
    const [onSearch, setOnSearch] = React.useState(false);
    const [statusFilter, setStatusFilter] = React.useState("");
    const search = React.useRef({ value: "" });
    const [page, setPage] = React.useState(1);
    const { ref, inView } = useInView();

  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setClothesEdit(item);
  };
  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsId(item.clothes_aid);
  };
  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsId(item.clothes_aid);
  };
  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsId(item.clothes_aid);
  };
    const {
      data: result,
      error,
      fetchNextPage,
      hasNextPage,
      isFetching,
      isFetchingNextPage,
      status,
    } = useInfiniteQuery({
      queryKey: ["clothes", onSearch, isFilter, statusFilter],
      queryFn: async ({ pageParam = 1 }) =>
        await queryDataInfinite(
          "/v2/clothes/search", // search or filter endpoint
          `/v2/clothes/page/${pageParam}`, //page api/endpoint
          isFilter || store.isSearch, // search boolean
          {
            statusFilter,
            isFilter,
            searchValue: search?.current.value,
            id: "",
          }
        ),
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.total) {
          return lastPage.page + lastPage.count;
        }
        return;
      },
      refetchOnWindowFocus: false,
    });

    React.useEffect(() => {
      if (inView) {
        setPage((prev) => prev + 1);
        fetchNextPage();
      }
    }, [inView]);


 
  return (
    <>
      <div>
        <SearchBarWithFilterStatus
          search={search}
          dispatch={dispatch}
          store={store}
          result={result}
          isFetching={isFetching}
          setOnSearch={setOnSearch}
          onSearch={onSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          setIsFilter={setIsFilter}
        />
      </div>
      <div className="mt-10 bg-secondary rounded-md p-4 border border-line relative">
        {/* <SpinnerTable/> */}
        <div className="table-wrapper custom-scroll">
          {/* <TableLoader count={10} cols={4}/> */}
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th className="w-[50%]">Title</th>
                <th>Category</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {(status === "pending" || result?.pages[0].data.length === 0) && (
                <tr>
                  <td colSpan="100%" className="p-10">
                    {status === "pending" ? (
                      <TableLoader cols={2} count={20} />
                    ) : (
                      <IconNoData />
                    )}
                  </td>
                </tr>
              )}
              {/* ERROR */}
              {error && (
                <tr>
                  <td colSpan="100%">
                    <IconServerError />
                  </td>
                </tr>
              )}
              {/* RESULT */}
              {result?.pages.map((page, pageKey) => (
                <React.Fragment key={pageKey}>
                  {page.data.map((item, key) => {
                    return (
                      <tr key={key} className="group relative cursor-pointer">
                        <td className="text-center">{counter++}</td>
                        <td>
                          <Pills isActive={item.clothes_is_active} />
                        </td>
                        <td>{item.clothes_title}</td>
                        <td>{item.category_title}</td>
                        <td>P {item.clothes_price}</td>
                        <td colSpan="100%" className="opacity-100">
                          <div className="flex items-center justify-end gap-2 mr-4">
                            {item.clothes_is_active === 1 ? (
                              <>
                                <button
                                  type="button"
                                  className="tooltip"
                                  data-tooltip="Edit"
                                  disabled={isFetching}
                                  onClick={() => handleEdit(item)}
                                >
                                  <FaEdit />
                                </button>

                                <button
                                  type="button"
                                  className="tooltip"
                                  data-tooltip="Archive"
                                  disabled={isFetching}
                                  onClick={() => handleArchive(item)}
                                >
                                  <FaArchive />
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  className="tooltip"
                                  data-tooltip="Restore"
                                  disabled={isFetching}
                                  onClick={() => handleRestore(item)}
                                >
                                  <FaTrashRestore />
                                </button>

                                <button
                                  type="button"
                                  className="tooltip"
                                  data-tooltip="Delete"
                                  disabled={isFetching}
                                  onClick={() => handleDelete(item)}
                                >
                                  <FaTrash />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          <div className="pb-2 flex items-center justify-center text-white">
            <LoadMore
              fetchNextPage={fetchNextPage}
              isFetchingNextPage={isFetchingNextPage}
              hasNextPage={hasNextPage}
              result={result?.pages[0]}
              setPage={setPage}
              page={page}
              refView={ref}
            />
          </div>
        </div>
      </div>
      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          mysqlApiDelete={`/v2/clothes/${id}`}
          queryKey={"clothes"}
        />
      )}

      {store.isArchive && (
        <ModalArchive
          setIsArchive={setIsArchive}
          mysqlEndpoint={`/v2/clothes/active/${id}`}
          queryKey={"clothes"}
        />
      )}

      {store.isRestore && (
        <ModalRestore
          setIsRestore={setIsRestore}
          mysqlEndpoint={`/v2/clothes/active/${id}`}
          queryKey={"clothes"}
        />
      )}
    </>
  );
 
}

export default ClothesTable