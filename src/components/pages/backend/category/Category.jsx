import React from 'react'
import Header from '../partials/Header'
import SearchBar from '../partials/Searchbar'
import Footer from '../partials/Footer'
import CategoryTable from './CategoryTable'
import { setIsAdd } from '@/components/pages/backend/partials/store/storeAction'
import ModalValidation from '../partials/modals/ModalValidation'
import ModalAddCategory from './ModalAddCategory'
import { StoreContext } from '../partials/store/storeContext'
import SideNavigation from '../partials/SideNavigation'
import { Plus } from 'lucide-react'
import ModalError from '../partials/modals/ModalError'

const Category = () => {
    const {dispatch, store} = React.useContext(StoreContext);
    const [itemEdit, setItemEdit] = React.useState(null);

    const handleAdd = () => {
      dispatch(setIsAdd(true));
      setItemEdit(null);
    }
  return (
    <>
    <section className="layout-main">
            <div className="layout-division">
            <SideNavigation menu="category"/>
                <main>
                    <Header title="Category" subtitle="Manage Category"/>
                    <div className="p-8">
                      <div className="flex justify-between items-center">
                        <SearchBar/>
                        <button className="btn btn-add" onClick={handleAdd}>
                          <Plus size={16}/> Add New
                        </button>
                      </div>
                      <CategoryTable setItemEdit={setItemEdit}/>
                    </div>
                    <Footer/>
                </main>
            </div>
        </section>
        {store.validate && <ModalValidation/>}
        {store.error && <ModalError/>}
        {store.success && <ToastSuccess/>}
        {/* <SpinnerWindow/> */}
        {store.isAdd && <ModalAddCategory itemEdit={itemEdit}/>}
    </>
  )
}

export default Category