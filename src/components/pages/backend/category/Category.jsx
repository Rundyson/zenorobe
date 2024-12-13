import React from 'react'
import Header from '../partials/Header'
import SearchBar from '../partials/Searchbar'
import Footer from '../partials/Footer'
import CategoryTable from './CategoryTable'
import { setIsAdd } from '@/components/store/storeAction'
import ModalValidation from '../partials/modals/ModalValidation'
import ModalAddCategory from './ModalAddCategory'
import { StoreContext } from '../../../store/storeContext'
import SideNavigation from '../partials/SideNavigation'
import { Plus } from 'lucide-react'
import ModalError from '../partials/modals/ModalError'
import ToastSuccess from '../partials/ToastSuccess'


const Category = () => {
    const {dispatch, store} = React.useContext(StoreContext);
    const [isCategoryEdit, setIsCategoryEdit] = React.useState(null);

    const handleAdd = () => {
      dispatch(setIsAdd(true));
      setIsCategoryEdit(null);
    };

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
                      <CategoryTable setIsCategoryEdit={setIsCategoryEdit}/>
                    </div>
                    <Footer/>
                </main>
            </div>
        </section>
        {store.validate && <ModalValidation/>}
        {store.error && <ModalError/>}
        {store.success && <ToastSuccess/>}
        {/* <SpinnerWindow/> */}
        {store.isAdd && <ModalAddCategory isCategoryEdit={isCategoryEdit}/>}
    </>
  )
}

export default Category