import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MUIDataTable from "mui-datatables";

  const columnas = [ "Vehiculo asoociado",
   "Serial",
    "Matricula", 
    "Empresa", 
    "Version", 
    "Estado", 
    "Ubicacion",
    "Archivo desde",
    "Archivo hasta", 
    "Acciones" 
  ]
  
  const options = {
    filterType: 'checkbox',
  };
  
export const HomeComponent = () => {

  const [devices, setDevice] = useState( [] )

  const endpoint = 'http://localhost:3004/devices_list'

  const getData = async () => {
    await axios.get(endpoint).then((response) => {

      const data = response.data.map(function(element){
        return [element.asset,
               element.serial,
              element.license_plate,
            element.company_name,
          element.version.software,
        element.active_from,]
      })
      setDevice(data)
    } )
  }

  useEffect ( () => {
    getData()
  }, [])

  return (
    <div>
        <MUIDataTable
          title={"Dispositivos"}
          data={devices}
          columns={columnas}
          options={options}
        />
    </div>
  )
}
