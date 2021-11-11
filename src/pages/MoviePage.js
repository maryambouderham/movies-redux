import React from 'react'
import Datatable from '../component/Datatable'
import ModalAdd from '../modals/ModalAdd'
import ModalDelete from '../modals/ModalDelete'
import ModalEdit from '../modals/ModalEdit'
import Theme from '../theme/Theme'

const MoviePage = () => {
    return (
        <>
            <Theme>
                <Datatable/>
                <ModalEdit />
                <ModalDelete/>
                <ModalAdd/>
            </Theme>
        </>
    )
}

export default MoviePage
