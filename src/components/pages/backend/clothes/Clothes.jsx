import React from 'react'
import Header from '../partials/Header'
import SearchBar from '../partials/Searchbar'
import Footer from '../partials/Footer'
import ClothesTable from './ClothesTable'
import { setIsAdd } from '@/components/store/storeAction'
import ModalValidation from '../partials/modals/ModalValidation'
import ModalAddClothes from './ModalAddClothes'
import { StoreContext } from '../../../store/storeContext'
import SideNavigation from '../partials/SideNavigation'
import { Plus } from 'lucide-react'
import ModalError from '../partials/modals/ModalError'

const Clothes = () => {
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
            <SideNavigation menu="clothes"/>
                <main>
                    <Header title="Clothes" subtitle="Manage Clothess"/>
                    <div className="p-8">
                      <div className="flex justify-between items-center">
                        <SearchBar/>
                        <button className="btn btn-add" onClick={handleAdd}>
                          <Plus size={16}/> Add New
                        </button>
                      </div>
                      <ClothesTable setItemEdit={setItemEdit}/>
                    </div>
                    <Footer/>
                </main>
            </div>
        </section>
        {store.validate && <ModalValidation/>}
        {store.error && <ModalError/>}
      {store.success && <ToastSuccess/>}
        {/* <SpinnerWindow/> */}
        {store.isAdd && <ModalAddClothes itemEdit={itemEdit}/>}
    </>
  )
}

export default Clothes