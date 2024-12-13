import React from 'react'
import Header from '../partials/Header'
import SearchBar from '../partials/Searchbar'
import Footer from '../partials/Footer'
import { setIsAdd } from '@/components/store/storeAction'
import ModalValidation from '../partials/modals/ModalValidation'
import { StoreContext } from '../../../store/storeContext'
import SideNavigation from '../partials/SideNavigation'
import { Plus } from 'lucide-react'
import ModalError from '../partials/modals/ModalError'
import ToastSuccess from '../partials/ToastSuccess'
import BannerTable from './BannerTable'
import ModalAddBanner from './ModalAddBanner'

const Banner = () => {
    const {dispatch, store} = React.useContext(StoreContext);
    const [bannerEdit, setBannerEdit] = React.useState(null);

    const handleAdd = () => {
      dispatch(setIsAdd(true));
      setBannerEdit(null);
    }
  return (
    <>
    <section className="layout-main">
            <div className="layout-division">
            <SideNavigation menu="banner"/>
                <main>
                    <Header title="Banner" subtitle="Manage Banners"/>
                    <div className="p-8">
                      <div className="flex justify-between items-center">
                        <SearchBar/>
                        <button className="btn btn-add" onClick={handleAdd}>
                          <Plus size={16}/> Add New
                        </button>
                      </div>
                      <BannerTable setIsAdd={setIsAdd} setBannerEdit={setBannerEdit}/>
                    </div>
                    <Footer/>
                </main>
            </div>
        </section>
        {store.validate && <ModalValidation/>}
        {store.error && <ModalError/>}
      {store.success && <ToastSuccess/>}
        {/* <SpinnerWindow/> */}
        {store.isAdd && <ModalAddBanner setIsAdd={setIsAdd}
          bannerEdit={bannerEdit}
          setBannerEdit={setBannerEdit}/>}
    </>
  )
}

export default Banner