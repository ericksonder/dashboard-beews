import React from 'react'
import Loader from '../../components/Loader/Loader'
import TableNewsletter from '../../components/TableNewsletter/TableNewsletter'

const ListaClientes = () => {
  const loading = false

  const tableProps = {
    listaNewsletter: []
  }

  return (
    <div className="md:shadow md:rounded bg-white p-5 py-10 md:p-10">
      <h1 className="flex items-center text-xl md:text-2xl font-regular tracking-wide mb-5">
        LISTA DE NEWSLETTER
      </h1>

      {/* TABLA */}
      <div className="overflow-x-auto w-full">
        {loading ? <Loader /> : <TableNewsletter {...tableProps} />}
      </div>

      {/* paginaActual */}

      {/* {!loading && (
        <Pagination
          nroPaginas={nroPaginas}
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
        />
      )} */}
    </div>
  )
}

export default ListaClientes
