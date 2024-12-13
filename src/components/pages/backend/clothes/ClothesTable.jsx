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


const ClothesTable = ({setClothesEdit}) => {
  const {store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");

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
    isFetching,
    error,
    data: result,
    status,
  } = useQueryData(
    `/v2/clothes`, //endpoint
    "get", //method
    "clothes" //key
  );


 
  return (
    <>
<div className='mt-10 bg-secondary rounded-md p-4 border border-line relative'>
                        {/* <SpinnerTable/> */}
                      <div className="table-wrapper custom-scroll">
                        {/* <TableLoader count={10} cols={4}/> */}
                        <table>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Status</th>
                              <th className='w-[50%]'>Title</th>
                              <th>Category</th>
                              <th>Price</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* <tr>
                              <td colSpan={100}>
                                <IconNoData/>
                              </td>
                            </tr> */}
                            {/* <tr>
                              <td colSpan={100}>
                                <IconServerError/>
                              </td>
                            </tr> */}
                           {result?.count > 0 &&
                      result.data.map((item, key) => (
                            <tr key={key}>
                            <td>{counter++}</td>
                            <td><Pills isActive={item.clothes_is_active} /></td>
                            <td>{item.clothes_title}</td>
                            <td>{item.category_title}</td>
                            <td>{item.clothes_price}</td>
                            <td>
                              <ul className="table-action " >
                                {item.clothes_is_active ? (<>
                                <li>
                                  <button className='tooltip' data-tooltip="Edit" onClick={() => handleEdit(item)}><FilePenLine /></button>
                                </li>
                                <li><button className='tooltip' data-tooltip="Archive" onClick={() => handleArchive(item)}><Archive/></button></li>
                                </>) : (<>
                                  <li>
                                  <button className='tooltip' data-tooltip="Restore" onClick={() => handleRestore(item)}><ArchiveRestore /></button>
                                  </li>
                                <li>
                                  <button className='tooltip' data-tooltip="Delete" onClick={() => handleDelete(item)}><Trash2 /></button>
                                  </li>
                                </>)}
                              </ul>
                            </td>
                          </tr>
                           ))}
                              
                          </tbody>
                        </table>
                        <LoadMore/>
                      </div>
                      </div>
                      {store.isDelete && (
                      <ModalDelete 
                      setIsDelete={setIsDelete}
                      mysqlApiDelete={`/v2/clothes/${id}`}
                      queryKey={"clothes"}/>)}
                      
                      {store.isArchive && (
                      <ModalArchive
                      setIsArchive={setIsArchive}
                      mysqlEndpoint={`/v2/clothes/active/${id}`}
                      queryKey={"clothes"}/>)}

                      {store.isRestore && (
                      <ModalRestore
                      setIsRestore={setIsRestore}
                      mysqlEndpoint={`/v2/clothes/active/${id}`}
                      queryKey={"clothes"}/>)}
        </>  
  )
 
}

export default ClothesTable