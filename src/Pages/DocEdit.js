// import React from 'react'

// function DocEdit() {
//   return (
//     <div><h1>DocEdit</h1></div>
//   )
// }

// export default DocEdit








// import React, { useEffect, useState, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// // import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';
// import {
//     updateDoc,
//     collection,
//     doc,
//     onSnapshot
// } from 'firebase/firestore';
// import ReactQuill from 'react-quill';
// function EditDocs({
//     database
// }) {
//     const isMounted = useRef()
//     const collectionRef = collection(database, 'docsData')
//     let params = useParams();
//     const [documentTitle, setDocumentTitle] = useState('')
//     const [docsDesc, setDocsDesc] = useState('');
//     const getQuillData = (value) => {
//         setDocsDesc(value)
//     }
//     useEffect(() => {
//         const updateDocsData = setTimeout(() => {
//             const document = doc(collectionRef, params.id)
//             updateDoc(document, {
//                 docsDesc: docsDesc
//             })
//                 .then(() => {
//                     toast.success('Document Saved', {
//                         autoClose: 2000
//                     })
//                 })
//                 .catch(() => {
//                     toast.error('Cannot Save Document', {
//                         autoClose: 2000
//                     })
//                 })
//         }, 1500)
//         return () => clearTimeout(updateDocsData)
//     }, [docsDesc])

//     const getData = () => {
//         const document = doc(collectionRef, params.id)
//         onSnapshot(document, (docs) => {
//             setDocumentTitle(docs.data().title)
//             setDocsDesc(docs.data().docsDesc);
//         })
//     }

//     useEffect(() => {
//         if (isMounted.current) {
//             return
//         }

//         isMounted.current = true;
//         getData()
//     }, [])
//     return (
//         <div className='editDocs-main'>
//             <ToastContainer />
//             <h1>{documentTitle}</h1>
//             <div className='editDocs-inner'>
//                 <ReactQuill
//                     className='react-quill'
//                     value={docsDesc}
//                     onChange={getQuillData}
//                 />
//             </div>
//         </div>
//     )
// }
// export default EditDocs











import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    updateDoc,
    collection,
    doc,
    onSnapshot
} from 'firebase/firestore';
// import { Button } from 'bootstrap';
import { Box,Button } from '@mui/material';
// import { Button } from 'bootstrap';
 function EditDocs({
    database
}) {
    const isMounted = useRef()
    const collectionRef = collection(database, 'docsData')
    let params = useParams();
    const [documentTitle, setDocumentTitle] = useState('')
    const [docsDesc, setDocsDesc] = useState('');
    const getQuillData = (value) => {
        setDocsDesc(value)
    }
    useEffect(() => {
        const updateDocsData = setTimeout(() => {
            const document = doc(collectionRef, params.id)
            updateDoc(document, {
                docsDesc: docsDesc
            })
        //         .then(() => {
        //             toast.success('Document Saved', {
        //                 autoClose: 2
        //             })
        //         })
        //         .catch(() => {
        //             toast.error('Cannot Save Document', {
        //                 autoClose: 2
        //             })
        //         })
        }
        )
        return () => clearTimeout(updateDocsData)
    }, [docsDesc])

    const getData = () => {
        const document = doc(collectionRef, params.id)
        onSnapshot(document, (docs) => {
            setDocumentTitle(docs.data().title)
            setDocsDesc(docs.data().docsDesc);
        })
    }

    useEffect(() => {
        if (isMounted.current) {
            return
        }

        isMounted.current = true;
        getData()
    }, [])



   


    const navigate = useNavigate();
    function handleClick() {
      // show the alert message
      alert("Your document is updated");
      // redirect to the home page
      navigate("/");
    }




    return (
        <div className='editDocs-main '>
            <ToastContainer />
            <h1 className='ti'>{documentTitle}</h1>
            <div className='editDocs-inner r'>
                <ReactQuill
                    className='react-quill'
                    value={docsDesc}
                    onChange={getQuillData}
                />
            </div>
            <Box display="flex" justifyContent="center" padding={2}><Button onClick={handleClick} variant="contained" color="success">
  Save
</Button></Box>
{/* <div> */}
    {/* <button type="button" className='btn btn-success' >save </button> */}
{/* </div> */}
        </div>
    )
}
export default EditDocs
