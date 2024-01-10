import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SupplierPage() {

    const [companyName, setcompanyName] = useState("")
    const [contactName, setcontactName] = useState("")
    const [suppliers, setsuppliers] = useState([])


    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        axios.get("https://northwind.vercel.app/api/suppliers")
            .then(response => {
                setsuppliers(response.data)
            })
    }


    const add = () => {
        let newSupplier = {
            companyName: companyName,
            contactName: contactName
        }

        axios.post("https://northwind.vercel.app/api/suppliers", newSupplier)
            .then(response => {
                console.log(response);
                loadData()
            })
    }


    return (<>
        <div>
            <label htmlFor="">Company Name</label>
            <input type='text' value={companyName} onChange={e => setcompanyName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Contact Name</label>
            <input type='text' value={contactName} onChange={e => setcontactName(e.target.value)} />
        </div>
        <div>
            <button onClick={() => add()}>Add Supplier</button>
        </div>

        <hr />

        <ul>
            {
                suppliers.map(item => <li key={item.id}>{item.companyName}</li>)
            }
        </ul>
    </>
    )
}

export default SupplierPage