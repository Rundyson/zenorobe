import React from 'react'
import ModalWrapper from '../partials/modals/ModalWrapper'
import { ImagePlusIcon, X } from 'lucide-react'
import SpinnerButton from '../partials/spinners/SpinnerButton'
import { StoreContext } from '@/components/pages/backend/partials/store/storeContext'
import { setIsAdd } from '@/components/pages/backend/partials/store/storeAction'
import { Form, Formik } from 'formik'
import { InputPhotoUpload, InputSelect, InputText} from '@/components/helpers/FormInputs'
import * as Yup from "Yup";
import useUploadPhoto from '@/components/custom-hook/useUploadPhoto'
import { imgPath } from '@/components/helpers/functions-general'

const ModalAddLatestProducts = ({itemEdit}) => {
  const {dispatch} = React.useContext(StoreContext);
  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto("");   

  const handleClose = () => {
    dispatch(setIsAdd(false));
  }
  console.log(itemEdit)
  const initVal = {
      clothes_title: itemEdit ? itemEdit.clothes_title : "",
      clothes_category: itemEdit ? itemEdit.clothes_category : "",
      clothes_price: itemEdit ? itemEdit.clothes_price : "",
  };
  const yupSchema = Yup.object({
    clothes_title: Yup.string().required("Required"),
    clothes_category: Yup.string().required("Required"),
    clothes_price: Yup.string().required("Required"),
  });
  return (
    <>
        <ModalWrapper>
            <div className="modal-side absolute top-0 right-0 bg-primary h-[100dvh] w-[300px] border-l border-line">
                <div className="modal-header p-4 flex justify-between items-center">
                    <h5 className="mb-0">Latest Products</h5>
                    <button onClick={handleClose}><X/></button>
                </div>

        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values) => {
            console.log(values)
        }}
      >
        {(props) => {
          return (

            <Form>

                <div className="modal-form max-h-[calc(100vh-56px)] h-full grid grid-rows-[1fr_auto]">
                    <div className="form-wrapper p-4 max-h-[85vh] h-full overflow-y-auto custom-scroll">

                    <div className="input-wrap">
                            <InputText 
                            label="Title"
                            type="text"
                            name="clothes_title"/>
                    </div>
                  
                    <div className="input-wrap relative  group input-photo-wrap h-[150px] mb-8">
                        <label htmlFor="">Photo</label>
                {itemEdit === null ? (
                  <div className="w-full border border-line rounded-md flex justify-center items-center flex-col h-full">
                    <ImagePlusIcon
                      size={50}
                      strokeWidth={1}
                      className="opacity-20 group-hover:opacity-50 transition-opacity"
                    />
                    <small className="opacity-20 group-hover:opacity-50 transition-opacity">
                      Upload Photo
                    </small>
                  </div>
                ) : (
                  <img
                    src={
                      itemEdit === null
                        ? URL.createObjectURL(photo) // preview
                        : imgPath + "/" + itemEdit?.clothes_image // check db
                    }
                    alt="employee photo"
                    className={`group-hover:opacity-30 duration-200 relative object-cover h-full w-full  m-auto `}
                  />
                )}
                <InputPhotoUpload
                          name="photo"
                          type="file"
                          id="photo"
                          accept="image/*"
                          title="Upload photo"
                          onChange={(e) => handleChangePhoto(e)}
                          onDrop={(e) => handleChangePhoto(e)}
                          className={`opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full  m-auto cursor-pointer w-full h-full 
                          `}
                        />
                    </div>

                    <div className="input-wrap">
                            <InputSelect 
                            label="Select Category"
                            type="text"
                            name="clothes_category">
                              <option value="" hidden>Select Product Category</option>
                                <option value="Summer">Summer</option>
                                <option value="Winter">Winter</option>
                            </InputSelect>
                    </div>

                    <div className="input-wrap">
                            <InputText 
                            label="Price"
                            type="text"
                            name="clothes_price"/>
                    </div>

                    </div>
                    <div className="form-action flex p-4 justify-end gap-3">
                        <button className="btn btn-accent" type='submit'><SpinnerButton/>Save</button>
                        <button className="btn btn-cancel" type='reset'  onClick={handleClose}>Cancel</button>
                    </div>
                </div>

              </Form>
            );
          }}
        </Formik>

            </div>
        </ModalWrapper>
    </>
  )
}

export default ModalAddLatestProducts